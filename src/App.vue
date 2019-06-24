<template>
  <v-app>
    <MainMenu/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import MainMenu from './views/MainMenu'

export default {
  name: 'App',
  components: {
    MainMenu
  },
  data () {
    return {
      //
    }
  }
}
</script>
