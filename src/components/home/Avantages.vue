<template>

  <div id="avantages" class="container-fluid bg-light2 mt-3 py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-dark text-center py-3 noUp">Les avantages de la franchise</h3>
          <div class="row mt-3 mb-4 franchises">
            <div class="col text-center"><i class="fas fa-user-friends text-secondary f-15"></i>
              <p>Vous êtes indépendant tout en étant accompagné</p>
            </div>
            <div class="col text-center"><i class="fas fa-chart-line text-secondary f-15"></i>
              <p>Vous doublez vos chances de réussite par rapport au commerce traditionnel</p>
            </div>
            <div class="col text-center"><i class="fas fa-book text-secondary f-15"></i>
              <p>Vous bénéficiez d'une formation complète</p>
            </div>
            <div class="col text-center"><i class="fas fa-comments text-secondary f-15"></i>
              <p>Vous disposez d'une assistance technique et commerciale</p>
            </div>
          </div>
          <div class="tabbable">
            <ul class="nav nav-tabs">
              <li class="nav-item"><a class="nav-link active" href="#tabFranchise" data-event="ongletChoixAlaune"
                  data-toggle="tab">
                  <h3 class="text-dark text-center py-2 noUp">Sélection de la semaine</h3>
                </a></li>
              <li class="nav-item"><a class="nav-link" href="#tabSecteurs" data-event="ongletChoixParSecteur"
                  data-toggle="tab">
                  <h3 class="text-dark text-center py-2 noUp">Choix par secteur</h3>
                </a></li>
              <li class="nav-item"><a class="nav-link" href="#tabApport" data-event="ongletChoixParApport"
                  data-toggle="tab">
                  <h3 class="text-dark text-center py-2 noUp">Choix par apport</h3>
                </a></li>
              <li class="nav-item"><a class="nav-link" href="#tab1" data-event="ongletChoixCustom" data-toggle="tab">
                  <h3 class="text-dark text-center py-2 noUp">Nouveau chez nous</h3>
                </a></li>
            </ul>

            <div class="tab-content p-3">

              <div class="tab_1 active"></div>

              <div class="tab_2"></div>

              <div class="tab_3"></div>

              <div class="tab_4"></div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import $ from 'jquery'

export default defineComponent({
  name: 'AvantagesHome',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    return {

    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    axios
      .get('obs/home/' + 'tabFranchise')
      .then(res => {
        if (res.status === 200) {
          $('.tab_1').html(res.data.selections)
        }
      })

    axios
      .get('obs/home/' + 'tabSecteurs')
      .then(res => {
        if (res.status === 200) {
          $('.tab_2').html(res.data.selections)
        }
      })

    axios
      .get('obs/home/' + 'tabApport')
      .then(res => {
        if (res.status === 200) {
          $('.tab_3').html(res.data.selections)
        }
      })

    axios
      .get('obs/home/' + 'tab1')
      .then(res => {
        if (res.status === 200) {
          $('.tab_4').html(res.data.selections)
        }
      })
  }
})
</script>
