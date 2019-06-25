<template>
  <v-container>
    <router-link tag="h2" to="/">Welcom to an Easy Game of Memory</router-link>
    <game-header/>
    <board-setup/>
    <v-btn @click="showCards"/>
    <v-btn @click="reset">Reset</v-btn>
  </v-container>
</template>

<script>
import GameHeader from './GameHeader.vue';
import BoardSetup from './BoardSetup.vue';
import {shuffle} from '../logic/shuffle.js';
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
    resetGame() {
      const cardNames = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8'];
      var shuffledCards = shuffle(cardNames.concat(cardNames)).map(name => ({revealed: false, cardName: name}));
      this.$store.commit('updateCards', shuffledCards);
    },
    showCards() {
      alert(this.getCards);
    }
  },
  created() {
    this.reset();
  }
}
</script>

