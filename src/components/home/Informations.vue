<template>

  <div id="informations" class="container-fluid bg-light2 mt-4 py-4">

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import $ from 'jquery'

export default defineComponent({
  name: 'InformationsHome',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    return {

    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    axios
      .get('obs/informations')
      .then(res => {
        if (res.status === 200) {
          $('#informations').html(res.data.informations)
        }
      })
  }
})
</script>
