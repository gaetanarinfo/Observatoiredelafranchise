<template>

  <div id="franchises" class="container-fluid home">

    <section class="row justify-content-center pb-5 mb-5 search">

      <div class="justify-content-center pb-4">

        <div class="col">

          <form class="form-inline px-3 px-sm-0" name="mainSearch" autocomplete="off" method="get">

            <div class="homeBloc_1"></div>

          </form>

        </div>

      </div>

      <div class="cover" data-diap="default" style="background-image: url('/images/cover_default.jpg');">
        <div class="slider"></div>
      </div>

    </section>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

import axios from 'axios'
import $ from 'jquery'

$(document).on('click', 'body', function (e) {
  if ($(e.target).attr('class') !== 'form-control search-full') {
    $('.suggest').fadeOut()
  }
})

export default defineComponent({
  name: 'FranchiseHome',
  // eslint-disable-next-line space-before-function-paren
  data() {
    $(document).on('input', 'input[name=query]', function (e) {
      const value = $(this).val()

      if (value.length >= 3) {
        $('.suggest').fadeIn()

        axios
          .get('obs/search/' + value)
          .then(res => {
            if (res.status === 200) {
              if (res.data.searchList.enseignes.length !== 0 && res.data !== "Vous n'avez rien à faire ici ...") {
                const countEnseignes = parseInt(res.data.searchList.reste)
                let autreEnseignes = ''

                if (countEnseignes >= 1) {
                  autreEnseignes = '<div class="text-right w-100"><a href="https://www.observatoiredelafranchise.fr/creation-entreprise/recherche-franchise.htm?query=' + value + '">Voir les ' + countEnseignes + ' autres enseignes</a></div>'
                } else {
                  autreEnseignes = ''
                }

                $('.suggest').html('<div class="row w-100 top m-0 p-3" ><div class="col-12 font-weight-bold ml-0 p-0">Franchises :</div><ul class="list-unstyled row franchises"></ul>' + autreEnseignes + '<div class="col-12 font-weight-bold mt-3 mb-3 ml-0 p-0">Secteurs :</div><ul class="list-unstyled secteurs"></ul></div>')

                res.data.searchList.enseignes.forEach(a => {
                  const data = '<li class="col-md-4">' + '<a class="' + a.class + '" href="' + a.url + '" data-goto="Centre Services">' + '<img src="' + a.logo + '">' + '<span>' + a.nom + '</span>' + '</a></li>'
                  if ($('.suggest .franchises li').length <= 6) {
                    $('.suggest .franchises').append(data)
                  }
                })
              } else {
                const data = '<div class="empty w-100 top m-0 px-3 py-2">Aucun élément trouvé</div>'
                $('.suggest').html(data)
              }

              if (res.data.searchList.cats.length >= 1) {
                res.data.searchList.cats.forEach(a => {
                  $('.secteurs').removeAttr('css')
                  $('.secteurs').prev().removeAttr('css')
                  const data = '<li>' + '<a class="' + a.class + '" href="' + a.url + '" data-goto="Centre Services">' + a.nom + '</a></li>'
                  $('.suggest .secteurs').append(data)
                })
              } else {
                $('.secteurs').css('display', 'none')
                $('.secteurs').prev().css('display', 'none')
              }
            }
          })
      } else {
        $('.suggest').html('')
      }
    })

    return {
    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    axios
      .get('obs/home')
      .then(res => {
        if (res.status === 200) {
          $('.homeBloc_1').html(res.data.homeBloc_1)
        }
      })
  }
})
</script>
