<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated glossy class="bg_perso">
      <q-toolbar>

        <q-btn flat round dense icon="menu" size="lg" @click="toggleRightDrawer" />

        <q-toolbar-title>
          <q-img class="logo" src="https://static.observatoiredelafranchise.fr/images/site/logo.png"></q-img>
        </q-toolbar-title>

        <q-space></q-space>

        <q-btn flat round dense icon="search" size="lg" color="grey" />

      </q-toolbar>

    </q-header>

    <q-drawer :heigth="200" side="right" class="drawer" v-model="RightDrawerOpen" show-if-above>
      <q-list>
        <menuLinks v-for="link in menuLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import menuLinks from 'src/components/Menu.vue'

const linksList = [
  {
    title: 'Liste des franchises',
    icon: 'chevron_right',
    link: '',
    menu: '1'
  },
  {
    title: 'Villes & territoires',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Actualités',
    icon: 'chevron_right',
    link: '',
    menu: '2'
  },
  {
    title: 'Devenir franchisé',
    link: '',
    icon: 'chevron_right',
    menu: '3'
  },
  {
    title: 'Connexion',
    link: '',
    icon: 'chevron_right',
    menu: '4'
  },
  {
    title: 'Inscription',
    link: 'https://www.observatoiredelafranchise.fr/club-des-entrepreneurs/formulaire-inscription.htm'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    menuLinks
  },

  // eslint-disable-next-line space-before-function-paren
  setup() {
    const RightDrawerOpen = ref(false)

    return {
      menuLinks: linksList,
      RightDrawerOpen,
      // eslint-disable-next-line space-before-function-paren
      toggleRightDrawer() {
        RightDrawerOpen.value = !RightDrawerOpen.value
      }
    }
  }
})
</script>
