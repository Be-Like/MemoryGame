<template>
  <v-container class="game-panel">
    <router-link tag="h2" to="/">Welcome to an Easy Game of Memory</router-link>
    <game-header @winner="updateCurrentWinner" @player1IsWinner="updateIsWinner"/>
    <board-setup class=""/>
    <div class="winnerBanner test" 
      :class="{player1IsWinner: player1IsWinner, player2IsWinner: !player1IsWinner}"
       v-if="getTotalMatches == 0">
      <h1 class="winnerText" >{{currentWinner}} is the winner!</h1>
    </div>
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
    player1IsWinner: null
  }),
  computed: {
    ...mapGetters(['getCards', 'getTotalMatches'])
  },
  methods: {
    ...mapActions(['reset']),
    showCards() {
      alert(JSON.stringify(this.getCards));
    },
    updateCurrentWinner(currentWinner, isWinner) {
      console.log("update current winner " + currentWinner);
      this.currentWinner = currentWinner;
    },
    updateIsWinner(isWinner) {
      console.log("update Is Winner " + isWinner)
      this.player1IsWinner = isWinner;      
    }
  },
  created() {
    this.reset();
  }
}
</script>

<style>
  .winnerText {
    top: 50%;
    position: relative;
    text-align: center;
  }
  .winnerBanner {
    width: 100%;
    height: 50%;
    position: fixed;
    top: 20%;
    left: 0;
    z-index: 10;
  }
  .winnerBanner.player1IsWinner {
    background-image: url(../assets/redWinner.jpg);
  }
  .winnerBanner.player2IsWinner {
    background: url(../assets/blueWinner.jpg);
    background-size: cover;
  }

  .game-panel {
  width: 450px;
  height: 670px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>

