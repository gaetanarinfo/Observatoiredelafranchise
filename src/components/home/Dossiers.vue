<template>

  <div id="dossiers" class="container">

    <section>
      <h2 class="my-4"><a href="https://observatoiredelafranchise.fr/dossier-franchise/liste.htm" class="h2 noUp">Les
          dossiers à la une</a></h2>

      <div>

        <div class="card-deck dossiers"></div>

      </div>

    </section>

    <div class="row mt-4">

      <div class="col-md-8">

        <h2 class="mb-4 noUp"><a href="https://observatoiredelafranchise.fr/interviews-franchises/liste.htm"
            class="h2 noUp">Témoignages des franchisés</a>
        </h2>

        <div class="temoignages col-md"></div>

        <h2 class="mb-4 mt-5 noUp"><a href="https://observatoiredelafranchise.fr/interviews-franchiseurs/liste.htm"
            class="h2 noUp">Témoignages
            franchiseurs</a></h2>

        <div class="temoignages_2 col-md"></div>

      </div>

      <div class="col-md-4 mt-4">

        <h2 class="mb-4 noUp">
          <a href="https://observatoiredelafranchise.fr/indiscretions-actualite/france-news.htm"
            class="h2 noUp">Actualités des
            enseignes</a>
        </h2>

        <ul class="list-unstyled actus_enseigne"></ul>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import $ from 'jquery'

export default defineComponent({
  name: 'DossiersHome',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    return {

    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    axios
      .get('obs/dossiers')
      .then(res => {
        if (res.status === 200) {
          $('.dossiers').html(res.data.dossiers)
        }
      })

    axios
      .get('obs/temoignages')
      .then(res => {
        if (res.status === 200) {
          $('.temoignages').html(res.data.temoignages)
        }
      })

    axios
      .get('obs/temoignages_2')
      .then(res => {
        if (res.status === 200) {
          $('.temoignages_2').html(res.data.temoignages_2)
        }
      })

    axios
      .get('obs/actus_enseigne')
      .then(res => {
        if (res.status === 200) {
          $('.actus_enseigne').html(res.data.actus_enseigne)
        }
      })
  }
})
</script>
