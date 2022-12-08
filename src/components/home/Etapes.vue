<template>

  <div id="etapes" class="container">
    <div id="live-cta"></div>
    <h2 class="h3 text-dark text-center noUp py-3">Les étapes d'ouverture d'une franchise</h2>
    <div class="row border mb-4">
      <div class="col-md-3 jumbotron mb-0">
        <h3 class="noUp text-dark xmodal" data-modal="renseigne_franchise"><i class="fas fa-book-open pr-2"></i> 1. Je
          me renseigne sur la franchise</h3>
      </div>
      <div class="col-md-3 jumbotron mb-0">
        <h3 class="noUp text-dark xmodal" data-modal="pret_lancer"><i class="far fa-question-circle pr-2"></i> 2.
          J'évalue si je suis prêt à me lancer</h3>
      </div>
      <div class="col-md-3 jumbotron mb-0">
        <h3 class="noUp text-dark xmodal" data-modal="selectionne_enseignes"><i class="fas fa-star pr-2"></i> 3. Je
          sélectionne les enseignes qui me correspondent</h3>
      </div>
      <div class="col-md-3 jumbotron mb-0">
        <h3 class="noUp text-dark xmodal" data-modal="mets_projet"><i class="fas fa-user-tie pr-2"></i> 4. Je mets en
          oeuvre mon projet</h3>
      </div>
    </div>
    <div class="row px-md-5">
      <div class="col-md-4 mb-4"><a href="https://www.observatoiredelafranchise.fr/annuaire/tex-mex-tacos.htm"
          class="gtm-home-ctabig-alaune"><img alt="Franchise tacos" class="img-fluid rounded w-100"
            src="https://static.observatoiredelafranchise.fr/images/home/une/cta-big-texmex.jpg"></a></div>
      <div class="col-md-4 mb-4"><a href="https://www.observatoiredelafranchise.fr/ouvrir-magasin/franchise-jouet.htm"
          class="gtm-home-ctabig-alaune"><img alt="Franchise jeu et jouets" class="img-fluid rounded w-100"
            src="https://static.observatoiredelafranchise.fr/images/home/une/cta-jouet-jeu-c4210d.jpg"></a></div>
      <div class="col-md-4 mb-4"><a href="https://www.observatoiredelafranchise.fr/ouvrir-magasin/franchise-vin.htm"
          class="gtm-home-ctabig-alaune"><img alt="Franchise Vin" class="img-fluid rounded w-100"
            src="https://static.observatoiredelafranchise.fr/images/home/une/cta-hp-vin.jpg"></a></div>
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EtapesHome',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    return {

    }
  }
})
</script>
