<template>
  <v-container class="status-bar">
    <h2 :class="{player1Turn: playerOneInfo.turn, getWinningPlayer}">{{playerOneInfo.name}}<br>{{playerOneInfo.score}}</h2>
    <h2 :class="{player2Turn: playerTwoInfo.turn}">{{playerTwoInfo.name}}<br><div align="right">{{playerTwoInfo.score}}</div></h2>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    playerOneInfo: {
      name: '',
      turn: false,
      score: 0
    },
    playerTwoInfo: {
      name: '',
      turn: false,
      score: 0
    }
  }),
  // props: ['winningPlayer'], TODO: may be able to delete this if there aren't any issues that arise.
  computed: {
    ...mapGetters(['getPlayerOneInfo', 'getPlayerTwoInfo']),
    getWinningPlayer() {
      if (this.playerOneInfo.score > this.playerTwoInfo.score) {
        this.$emit('winner', this.playerOneInfo.name);
      } else if (this.playerOneInfo.score < this.playerTwoInfo.score){
        this.$emit('winner', this.playerTwoInfo.name);
      } else {
        this.$emit('winner', null)
      }
      return null;
    }
  },
  mounted() {
    this.playerOneInfo = this.getPlayerOneInfo;
    this.playerTwoInfo = this.getPlayerTwoInfo;
  }
}
</script>

<style>
  .status-bar {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .player1Turn {
    color: red
  }
  .player2Turn {
    color: blue
  }
</style>

