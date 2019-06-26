<template>
  <v-container>
    <router-link tag="h2" to="/">Welcome to an Easy Game of Memory</router-link>
    <game-header/>
    <board-setup/>
    <v-btn @click="showCards"/>
    <v-btn @click="reset">Reset</v-btn>
  </v-container>
</template>

<script>
import GameHeader from './GameHeader.vue';
import BoardSetup from './BoardSetup.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    GameHeader,
    BoardSetup
  },
  computed: {
    ...mapGetters(['getCards'])
  },
  methods: {
    ...mapActions(['reset']),
    showCards() {
      alert(JSON.stringify(this.getCards));
    }
  },
  mounted() {
    this.reset();
  }
}
</script>

