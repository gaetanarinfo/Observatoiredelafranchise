<template>
  <q-item clickable v-if="link" tag="a" target="_blank" :href="link">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>
  </q-item>

  <q-item clickable v-if="link == '' && menu == '1'" :onclick="deroulant">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>
  </q-item>

  <q-item clickable v-if="link == '' && menu == '2'" :onclick="deroulant2">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>
  </q-item>

  <q-item clickable v-if="link == '' && menu == '3'" :onclick="deroulant3">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>
  </q-item>

  <q-item clickable v-if="link == '' && menu == '4'" :onclick="deroulant4">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>
  </q-item>

  <q-list class="q-pl-md" dense v-if="(menuDeroulant == true) && (menu == 1)">

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise/opportunites-secteur.htm">
      <q-item-section>
        Franchise qui marche
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise/selection-franchise-mois.htm">
      <q-item-section>
        Sélection du mois
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/franchises-themes/jeunes-reseaux.htm">
      <q-item-section>
        Jeunes Réseaux
      </q-item-section>
    </q-item>

  </q-list>

  <q-list class="q-mt-md q-pl-none" style="justify-content: flex-start;" dense
    v-if="(menuDeroulant == true) && (menu == 1)">

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-automobiles-cycles-motos/guide-franchises-700.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Automobile, cycle, moto
      </q-item-section>

    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-batiment/guide-franchises-1200.htm">

      <q-item-section style="flex-direction: row;justify-content: flex-start;gap: 16px;">

        <span style="color: #6c757d !important">
          Franchise
        </span>
        Bâtiment
      </q-item-section>

    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-beaute-sante-remise-en-forme/guide-franchises-600.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>
        Beauté - bien être

      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-commerce-alimentaire/guide-franchises-100.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Alimentaire
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-commerces-specialises/guide-franchises-500.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Commerce spécialisé
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-decoration-et-equipement-de-la-maison/guide-franchises-400.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Décoration
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-hotellerie-restauration/guide-franchises-1100.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Restauration
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-immobilier/guide-franchises-900.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Immobilier
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-mini-super-et-hypermarches/guide-franchises-200.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>
        Super et hypermarchés
      </q-item-section>

    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-mode-et-equipement-de-la-personne/guide-franchises-300.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Mode
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-services-aux-entreprises/guide-franchises-1000.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Services entreprises
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/creation-entreprise-services-aux-particuliers/guide-franchises-1201.htm">

      <q-item-section style="flex-direction: row;gap: 16px;justify-content: flex-start;">

        <span style="color: #6c757d !important">
          Franchise
        </span>

        Services particuliers
      </q-item-section>
    </q-item>

  </q-list>

  <q-list class="q-pl-md" dense v-if="(menuDeroulant2 == true) && (menu == 2)">

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/indiscretions-actualite/france-news.htm">
      <q-item-section>
        Actualités de la franchise
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/interviews-franchiseurs/liste.htm">
      <q-item-section>
        Interviews de la franchise
      </q-item-section>
    </q-item>

    <q-item clickable class="q-mb-sm" v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/interviews-franchises/liste.htm">
      <q-item-section>
        Témoignages de franchisés
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/dossier-franchise/liste.htm">
      <q-item-section>
        Les dossiers de la franchise
      </q-item-section>
    </q-item>

  </q-list>

  <q-list class="q-pl-md" dense v-if="(menuDeroulant3 == true) && (menu == 3)">

    <q-item class="item-secondaire" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/guide-creation-entreprise-en-franchise/introduction-sommaire.htm">
      <q-item-section>
        La franchise de A à Z
      </q-item-section>
    </q-item>

    <q-item class="item-secondaire" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/fiches-pratiques/liste.htm">
      <q-item-section>
        Fiches pratiques
      </q-item-section>
    </q-item>

    <q-item class="item-secondaire" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/fiches-pratiques/liste-metiers.htm">
      <q-item-section>
        Fiches métiers
      </q-item-section>
    </q-item>

    <q-item class="item-secondaire" clickable v-ripple tag="a" target="_blank"
      href="https://www.observatoiredelafranchise.fr/questions-reponses/FAQ-franchise.htm">
      <q-item-section>
        Forum franchise : les experts
      </q-item-section>
    </q-item>

    <div class="col-lg-4 mt-3 text-center"><a href="https://www.observatoiredelafranchise.fr/formulaire/livre-blanc.htm"
        class="gtm-menu-cta-guide"><img
          src="https://static.observatoiredelafranchise.fr/images/site/cover-livreblanc-thumb.png" alt="Livre blanc"
          class="img-fluid"></a>
      <p class="mt-1"><a href="https://www.observatoiredelafranchise.fr/formulaire/livre-blanc.htm"
          class="nav-link mt-1 gtm-menu-cta-guide">Télécharger le
          Guide de la franchise 2022</a></p>
    </div>

  </q-list>

  <q-list class="q-pl-md" dense v-if="(menuDeroulant4 == true) && (menu == 4)">

    <q-item class="item-secondaire q-pl-0">

      <form class="px-2 mt-2 loginM" method="post" name="loginM"
        action="https://www.observatoiredelafranchise.fr/club-des-entrepreneurs/login.htm" autocomplete="off">
        <div class="form-group"><input type="text" name="email" class="form-control" placeholder="Email"
            autocomplete="off"></div>
        <div class="form-group"><input type="password" name="password" class="form-control" placeholder="Mot de passe"
            autocomplete="new-password"></div>
        <div class="text-center"><button type="button" class="btn btn-primary gtm-menu-btn-login">Connexion</button>
        </div><input type="hidden" name="envoi" value="1">
      </form>

    </q-item>

  </q-list>

</template>

<script>
import { defineComponent, ref } from 'vue'

const menuDeroulant = ref(false),
  menuDeroulant2 = ref(false),
  menuDeroulant3 = ref(false),
  menuDeroulant4 = ref(false)

export default defineComponent({
  name: 'MenuLink',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    return {
      menuDeroulant,
      menuDeroulant2,
      menuDeroulant3,
      menuDeroulant4,
      // eslint-disable-next-line space-before-function-paren
      deroulant() {
        if (menuDeroulant.value === false) menuDeroulant.value = true
        else menuDeroulant.value = false
      },
      // eslint-disable-next-line space-before-function-paren
      deroulant2() {
        if (menuDeroulant2.value === false) menuDeroulant2.value = true
        else menuDeroulant2.value = false
      },
      // eslint-disable-next-line space-before-function-paren
      deroulant3() {
        if (menuDeroulant3.value === false) menuDeroulant3.value = true
        else menuDeroulant3.value = false
      },
      // eslint-disable-next-line space-before-function-paren
      deroulant4() {
        if (menuDeroulant4.value === false) menuDeroulant4.value = true
        else menuDeroulant4.value = false
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    menu: {
      type: String,
      default: ''
    }

  }
})
</script>
