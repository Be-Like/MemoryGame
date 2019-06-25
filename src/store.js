import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerForm: {
      playerOneName: 'Player1',
      playerTwoName: 'Player2'
    },
    cards: []
  },
  mutations: {
    updatePlayerNames(state, playerForm) {
      state.playerForm = playerForm;
    },
    updateCards(state, passedCardArray) {
      state.cards = passedCardArray;
    }
  },
  actions: {
    flipCards({commit}, cards) {
      commit('flips', cards);
    },
    revealCard({commit}, card) {
      commit('reveal', card);
    }
  }, 
  getters: {
    getPlayerForm(state) {
      return state.playerForm;
    },
    getCards(state) {
      return state.cards;
    }
  }
})
