<template>
  <v-container>
    <router-link tag="h2" to="/">Welcom to an Easy Game of Memory</router-link>
    <game-header/>
  </v-container>
</template>

<script>
import GameHeader from './GameHeader.vue';

export default {
  components: {
    GameHeader
  }
}
</script>

