import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomTest: 'just another test',
    // playerForm: {
    //   playerOneName: 'Jake',
    //   playerTwoName: 'Simpson'
    // }
    playerOneName: 'Jake'
  },
  mutations: {
    updatePlayerNames(state, data) {
      state.playerOneName = data
    }
  },
  actions: {

  }, 
  getters: {
    getRandomTest(state) {
      return state.randomTest
    },
    getPlayerForm(state) {
      return state.playerOneName
    }
  }
})
