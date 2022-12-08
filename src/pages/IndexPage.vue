<template>

  <q-page id="home" class="flex flex-center">

    <homeFranchise />
    <etapesFranchise />
    <avantagesFranchise />
    <dossiersFranchise />
    <informationsFranchise />

    <footerModule />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import homeFranchise from 'src/components/Home/Franchise.vue'
import etapesFranchise from 'src/components/Home/Etapes.vue'
import avantagesFranchise from 'src/components/Home/Avantages.vue'
import dossiersFranchise from 'src/components/Home/Dossiers.vue'
import informationsFranchise from 'src/components/Home/Informations.vue'
import footerModule from 'src/components/Footer.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    homeFranchise,
    etapesFranchise,
    avantagesFranchise,
    dossiersFranchise,
    informationsFranchise,
    footerModule
  }
})
</script>
