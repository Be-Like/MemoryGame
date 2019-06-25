<template>
  <v-container class="boardSetup">
    <game-card v-for="(card, index) of getCards" :key="index" :selected="card" @revealed="onRevealed"/>
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
    ...mapActions(['flipCards', 'cardsMatch']),
    onRevealed(revealedCard) {
      // if (this.status === STATUS.READY) {
      //   this.updateStatus(STATUS.PLAYING);
      // }
      if (!this.lastCard) {
        return (this.lastCard = revealedCard);
      }
      if (this.lastCard !== revealedCard 
        && this.lastCard.cardName === revealedCard.cardName) {
          this.lastCard = null;
          this.cardsMatch(); // TODO: work on player turns (boolean or currentPlayer data or something along those lines)
          return this.leftMatched; // TODO:uncomment this-> || this.updateStatus(STATUS.PASS);
      }
      const lastCard = this.lastCard;
      this.lastCard = null;
      setTimeout(() => {
        this.flipCards([lastCard, revealedCard])
      }, 1000);
    }
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
  @media screen and (max-width: 450px) {
    .boardSetup {
      height: 480px;
      padding: 10px 0px;
    }
  }
  @media screen and (max-width: 370px) {
    .boardSetup {
      height: 450px;
    }
  }
</style>
