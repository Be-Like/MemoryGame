import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomTest: 'just another test',
    playerForm: {
      playerOneName: 'Player1',
      playerTwoName: 'Player2'
    }
  },
  mutations: {
    updatePlayerNames(state, playerForm) {
      state.playerForm = playerForm
    }
  },
  actions: {
    revealCard({commit}, card) {
      commit('reveal', card)
    }
  }, 
  getters: {
    getRandomTest(state) {
      return state.randomTest
    },
    getPlayerForm(state) {
      return state.playerForm;
    }
  }
})
