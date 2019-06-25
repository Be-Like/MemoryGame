<template>
  <v-container>
    <router-link tag="h2" to="/">Welcom to an Easy Game of Memory</router-link>
    <game-header/>
    <board-setup/>
  </v-container>
</template>

<script>
import GameHeader from './GameHeader.vue';
import BoardSetup from './BoardSetup.vue';

export default {
  components: {
    GameHeader,
    BoardSetup
  }
}
</script>

