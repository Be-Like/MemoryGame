<template>
  <v-container class="boardSetup">
    <v-flex v-for="(card, index) of getCards" :key="index" xs3>
      <game-card :selected="card" @revealed="onRevealed"/>
    </v-flex>
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
      'getCards', 'getPlayerOneInfo'
    ])
  }, 
  methods: {
    ...mapActions(['flipCards', 'cardsMatch', 'switchTurns']),
    onRevealed(revealedCard) {
      if (!this.lastCard) {
        return (this.lastCard = revealedCard);
      }
      if (this.lastCard !== revealedCard 
        && this.lastCard.cardName === revealedCard.cardName) {
          this.lastCard = null;
          this.cardsMatch(this.getPlayerOneInfo);
          this.switchTurns(this.getPlayerOneInfo);
          console.log("Switch Turns " + JSON.stringify(this.getPlayerOneInfo))
          return; // TODO:uncomment this-> || this.updateStatus(STATUS.PASS);
      }
      const lastCard = this.lastCard;
      this.lastCard = null;
      this.switchTurns(this.getPlayerOneInfo);
      console.log("Switch Turns " + JSON.stringify(this.getPlayerOneInfo))
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
</style>
