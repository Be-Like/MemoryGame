import Vue from 'vue';
import Vuex from 'vuex';
import {shuffle} from './logic/shuffle';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerForm: {
      playerOneName: 'Player1',
      playerTwoName: 'Player2'
    },
    cards: [],
    playerOneScore: 0
  },
  mutations: {
    updatePlayerNames(state, playerForm) {
      state.playerForm = playerForm;
    },
    updateCards(state, passedCardArray) {
      state.cards = passedCardArray;
    },
    reveal(state, card) {
      var c = state.cards.find(selectedCard => selectedCard === card);
      c.revealed = !c.revealed;
    },
    flipCards(state, cards) {
      state.cards.filter(selectedCards => cards.indexOf(selectedCards) >= 0)
        .forEach(selectedCard => {selectedCard.revealed = !selectedCard.revealed});
    },
    cardsMatch(state) {
      state.playerOneScore++;
    }
  },
  actions: {
    flipCards({commit}, cards) {
      commit('flipCards', cards);
    },
    revealCard({commit}, card) {
      commit('reveal', card);
    },
    reset({commit}) {
      const cardNames = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8'];
      var shuffledCards = shuffle(cardNames.concat(cardNames)).map(name => ({revealed: false, cardName: name}));
      commit('updateCards', shuffledCards);
    },
    cardsMatch({commit}) {
      commit('cardsMatch');
    }
  }, 
  getters: {
    getPlayerForm(state) {
      return state.playerForm;
    },
    getPlayerScore(state) {
      return state.playerOneScore;
    },
    getCards(state) {
      return state.cards;
    }
  }
})
