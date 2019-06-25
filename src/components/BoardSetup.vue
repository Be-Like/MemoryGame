<template>
  <v-container class="boardSetup">
    <h2>Hello Board Setup</h2>
    <game-card v-for="(card, index) of getCards" :key="index" :selected="card"/>
  </v-container>
</template>

<script>
import GameCard from './GameCard.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
    GameCard
  },
  data: () => {
    return {
      lastCard: null
    }
  }, 
  computed: {
    ...mapGetters([
      'getCards'
    ])
  }, 
  methods: {
    ...mapActions(['flipCards'])
    // onRevealed(revealedCard) {

    // }
  }
}
</script>

<style scoped>
  .boardSetup {
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    height: 530px;
    border-radius: 4px;
    padding: 10px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
  }
  .container:nth-child(4n) {
    margin-right: 0px;
  }
  /* @media screen and (max-width: 450px) {
    .chessboard {
      height: 480px;
      padding: 10px 0px;
    }
  }
  @media screen and (max-width: 370px) {
    .chessboard {
      height: 450px;
    }
  } */
</style>
