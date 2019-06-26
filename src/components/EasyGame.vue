<template>
  <v-container>
    <router-link tag="h2" to="/">Welcome to an Easy Game of Memory</router-link>
    <game-header @winner="updateCurrentWinner"/>
    <board-setup/>
    <h3 v-if="getTotalMatches == 0">We have a winner! {{currentWinner}}</h3>
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
  data: () => ({
    currentWinner: '',
  }),
  computed: {
    ...mapGetters(['getCards', 'getTotalMatches'])
  },
  methods: {
    ...mapActions(['reset']),
    showCards() {
      alert(JSON.stringify(this.getCards));
    },
    updateCurrentWinner(currentWinner) {
      console.log("update current winner " + currentWinner);
      this.currentWinner = currentWinner;
    }
  },
  mounted() {
    this.reset();
  }
}
</script>

