<template>
  <v-container class="status-bar">
    <h2 v-if="!startingPlayer1 && !startingPlayer2" 
      :class="{player1Turn: playerOneInfo.turn, getWinningPlayer}">
        {{playerOneInfo.name}}<br>{{playerOneInfo.score}}
    </h2>
    <h2 v-if="!startingPlayer1 && !startingPlayer2" 
      :class="{player2Turn: playerTwoInfo.turn}">
        {{playerTwoInfo.name}}<br><div align="right">{{playerTwoInfo.score}}</div>
    </h2>
    <div v-if="startingPlayer1" class="status-bar" :class="{player1Started: startingPlayer1}">
      <h2  class="bannerText">Starting {{playerOneInfo.name}}</h2>
    </div>
    <div v-if="startingPlayer2" class="status-bar" :class="{player2Started: startingPlayer2}">
      <h2 class="bannerText">Starting {{playerTwoInfo.name}}</h2>
    </div>
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
    },
    startingPlayer1: false,
    startingPlayer2: false
  }),
  // props: ['winningPlayer'], TODO: may be able to delete this if there aren't any issues that arise.
  computed: {
    ...mapGetters(['getPlayerOneInfo', 'getPlayerTwoInfo']),
    getWinningPlayer() {
      if (this.playerOneInfo.score > this.playerTwoInfo.score) {
        this.$emit('winner', this.playerOneInfo.name);
        this.$emit('player1IsWinner', true)
      } else if (this.playerOneInfo.score < this.playerTwoInfo.score){
        this.$emit('winner', this.playerTwoInfo.name);
        this.$emit('player1IsWinner', false);
      } else {
        this.$emit('winner', null)
      }
      return null;
    }
  },
  mounted() {
    const player1 = this.getPlayerOneInfo;
    const player2 = this.getPlayerTwoInfo;
    this.playerOneInfo = player1;
    this.playerTwoInfo = player2;

    if (player1.turn) {
      this.startingPlayer1 = true;
        setTimeout(() => {
          this.startingPlayer1 = false;
        }, 2000);
    } else {
      this.startingPlayer2 = true;
        setTimeout(() => {
          this.startingPlayer2 = false;
        }, 2000);
    }
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
  .bannerText {
    width: 100%;
    position: relative;
    text-align: center;
  }
  .status-bar.player1Started {
    background-image: url(../assets/redWinner.jpg);
  }
  .status-bar.player2Started {
    background: url(../assets/blueWinner.jpg);
    background-size: cover;
  }
</style>

