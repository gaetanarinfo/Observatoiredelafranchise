// values to be modified for own project
// VAPID appPublic key
const strAppPublicKey = 'BDF6D9g-lrGhP3WaJeSB7IIuW3Sll3Hi_eTGZKgYhKtllu0y4PKRxjQDnyOvSWZ8ECD4y32EDmvcfLO5R9aacdY'
// URL to save subscription on server via Fetch API
const strSubscriberURL = '/ajSW'
// default Notification Title if not pushed by server
const strDefTitle = 'Observatoire de la franchise'
// default Notification Icon if not pushed by server
const strDefIcon = '/favicon.ico'
// identifiant obs
let idObs = null
let idsecteurs = null

/**
 * encode the public key to Array buffer
 * @param {string} strBase64  -   key to encode
 * @return {Array} - UInt8Array
 */
function encodeToUint8Array(strBase64) {
  const strPadding = '='.repeat((4 - (strBase64.length % 4)) % 4)
  strBase64 = (strBase64 + strPadding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = atob(strBase64)
  const aOutput = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    aOutput[i] = rawData.charCodeAt(i)
  }
  return aOutput
}

/**
 * event listener to subscribe notifications and save subscription at server
 * @param {ExtendableEvent} event
 */
async function pnSubscribe(event) {
  console.log('Serviceworker: activate event')

  try {
    const appPublicKey = encodeToUint8Array(strAppPublicKey)
    const opt = {
      applicationServerKey: appPublicKey,
      userVisibleOnly: true
    }

    self.registration.pushManager.subscribe(opt)
      .then((sub) => {
        // subscription succeeded - send to server
        pnSaveSubscription(sub)
          .then((response) => {
            console.log(response)
          }).catch((e) => {
            // registration failed
            console.log('SaveSubscription failed with: ' + e)
          })
      }).catch((e) => {
        // registration failed
        console.log('Subscription failed with: ' + e)
      })
  } catch (e) {
    console.log('Error subscribing notifications: ' + e)
  }
}

/**
 * save subscription on server
 * using Fetch API to send subscription infos to the server
 * subscription is encance with the userAgent for internal use on the server
 * @param {object} sub - PushSubscription
 * @return {string} - response of the request
 */
async function pnSaveSubscription(sub) {
  // stringify and parse again to add 'custom' property
  // ... otherwise added property will be ignored when stringify subscription direct to body!
  const body = JSON.parse(JSON.stringify(sub))
  body.userAgent = navigator.userAgent
  body.idObs = idObs
  body.idsecteurs = idsecteurs
  body.action = 'savePn'
  const fetchdata = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  // we're using fetch() to post the data to the server
  const response = await fetch(strSubscriberURL, fetchdata)
  // activate following two lines, if any PHP-Error in the subscriber script occurs
  // -> in that case, response won't contain valid JSON data!
  /*
    var cloned = response.clone();
    console.log('Response: ', await cloned.text());
    */
  return await response.json()
}

/**
 * event listener to show notification
 * @param {PushEvent} event
 */
function pnPushNotification(event) {
  // console.log('push event: ' + event);
  let strTitle = strDefTitle
  let oPayload = null
  let opt = {
    icon: strDefIcon
  }
  if (event.data) {
    // PushMessageData Object containing the pushed payload
    try {
      // try to parse payload JSON-string
      oPayload = JSON.parse(event.data.text())
    } catch (e) {
      // if no valid JSON Data take text as it is...
      // ... comes maybe while testing directly from DevTools
      opt = {
        icon: strDefIcon,
        body: event.data.text()
      }
    }
    if (oPayload) {
      if (oPayload.title !== undefined && oPayload.title !== '') {
        strTitle = oPayload.title
      }
      opt = oPayload.opt
      if (oPayload.opt.icon === undefined ||
        oPayload.opt.icon === null ||
        oPayload.icon === '') {
        // if no icon defined, use default
        opt.icon = strDefIcon
      }
    }
  }
  const promise = self.registration.showNotification(strTitle, opt)
  event.waitUntil(promise)
}

/**
 * event listener to notification click
 * if URL passed, just open the window...
 * @param {NotificationClick} event
 */
function pnNotificationClick(event) {
  console.log('notificationclick event: ' + event)
  if (event.notification.data && event.notification.data.url) {
    const promise = clients.openWindow(event.notification.data.url)
    event.waitUntil(promise)
  }
  if (event.action !== '') {
    // add handler for user defined action here...
    // pnNotificationAction(event.action);
    console.log('notificationclick action: ' + event.action)
  }
}

self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim())
})

/**
 * event listener handling when subscription change
 * just re-subscribe
 * @param {PushSubscriptionChangeEvent} event
 */
async function pnSubscriptionChange(event) {
  console.log('Serviceworker: subscription change event: ' + event)
  try {
    // re-subscribe with old options
    self.registration.pushManager.subscribe(event.oldSubscription.options)
      .then((sub) => {
        // subscription succeeded - send to server
        pnSaveSubscription(sub)
          .then((response) => {
            console.log(response)
          }).catch((e) => {
            // registration failed
            console.log('SaveSubscription failed with: ' + e)
          })
      }).catch((e) => {
        // registration failed
        console.log('Subscription failed with: ' + e)
      })
  } catch (e) {
    console.log('Error subscribing notifications: ' + e)
  }
}

/**
 * event listener to notification close
 * ... if you want to do something for e.g. analytics
 * @param {NotificationClose} event
 */
function pnNotificationClose(event) {
  console.log('notificationclose event: ' + event)
}

self.addEventListener('push', pnPushNotification)
// ... and listen to the click
self.addEventListener('notificationclick', pnNotificationClick)
// subscription has changed
self.addEventListener('pushsubscriptionchange', pnSubscriptionChange)
// notification was closed without further action
self.addEventListener('notificationclose', pnNotificationClose)

self.addEventListener('message', function (event) {
  if (event.data.action) {
    switch (event.data.action) {
      case 'loadBo':
        fetch(strSubscriberURL, {
          method: 'POST',
          body: JSON.stringify(event.data)
        }).then(function (response) {
          return response.text()
        }).then(function (text) {
          const data = JSON.parse(text)

          if (data.reponse == 'OK') {
            event.ports[0].postMessage(data)
          }
        }).catch(function (error) {
          log('Request failed', error)
        })
        break

      case 'pnSubscribe':
        idObs = event.data.idObs
        idsecteurs = event.data.secteurs

        pnSubscribe(event).then(function (event) {
          console.log(event)
        })
        break
    }
  }
})
