import Vue from 'vue';
import Vuex from 'vuex';
import {shuffle} from './logic/shuffle';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerOneInfo: { // TODO: fix up code to handle these instead
      name: 'Player1',
      turn: false,
      score: 0
    },
    playerTwoInfo: {
      name: 'Player2',
      turn: false,
      score: 0
    },
    totalMatchesLeft: 8,
    cards: []
  },
  mutations: {
    setPlayerOneInfo(state, playerInfo) {
      state.playerOneInfo.name = playerInfo.name;
      state.playerOneInfo.score = playerInfo.score;
    },
    setPlayerTwoInfo(state, playerInfo) {
      state.playerTwoInfo.name = playerInfo.name;
      state.playerTwoInfo.score = playerInfo.score;
    },
    resetBoard(state, passedCardArray) {
      state.cards = passedCardArray;
      state.playerOneInfo.score = 0;
      state.playerTwoInfo.score = 0;
      state.totalMatchesLeft = 8;
    },
    setInitialPlayerTurn(state, randomTurn) {
      state.playerOneInfo.turn = randomTurn;
      state.playerTwoInfo.turn = !randomTurn;      
    },
    reveal(state, card) {
      var c = state.cards.find(selectedCard => selectedCard === card);
      c.revealed = !c.revealed;
    },
    flipCards(state, cards) {
      state.cards.filter(selectedCards => cards.indexOf(selectedCards) >= 0)
        .forEach(selectedCard => {selectedCard.revealed = !selectedCard.revealed});
    },
    playerOneMatch(state) {
      state.playerOneInfo.score++; // TODO: update score depending on whose turn it is
      state.totalMatchesLeft--;
    },
    playerTwoMatch(state) {
      state.playerTwoInfo.score++;
      state.totalMatchesLeft--;
    },
    switchTurns(state, isTurn) {
      state.playerOneInfo.turn = !isTurn;
      state.playerTwoInfo.turn = isTurn;
    }
  },
  actions: {
    setPlayerOneInfo({commit}, player) {
      commit({commit}, player)
    },
    setPlayerTwoInfo({commit}, player) {
      commit({commit}, player)
    },
    flipCards({commit}, cards) {
      commit('flipCards', cards);
    },
    revealCard({commit}, card) {
      commit('reveal', card);
    },
    reset({commit}) {
      const cardNames = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8'];
      var shuffledCards = shuffle(cardNames.concat(cardNames)).map(name => ({revealed: false, cardName: name}));
      var x = Math.floor(Math.random() * 2);
      var player1Turn;
      if (x < 1) {
        player1Turn = true;
      } else {
        player1Turn = false;
      }
      commit('resetBoard', shuffledCards);
      commit('setInitialPlayerTurn', player1Turn);
    },
    cardsMatch({commit}, player1) {
      if (player1.turn) {
        commit('playerOneMatch');
      } else {
        commit('playerTwoMatch')
      }
    },
    switchTurns({commit}, player1) {
      commit('switchTurns', player1.turn)
    }
  }, 
  getters: {
    getPlayerOneInfo(state) {
      return state.playerOneInfo;
    },
    getPlayerTwoInfo(state) {
      return state.playerTwoInfo;
    },
    getCards(state) {
      return state.cards;
    }, 
    getTotalMatches(state) {
      return state.totalMatchesLeft;
    }
  }
})
