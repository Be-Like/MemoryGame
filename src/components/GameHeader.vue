<template>
  <v-container class="status-bar">
    <h2>{{playerForm.playerOneName}}<br>{{player1Score}}</h2>
    <div class="vr"></div>
    <h2>{{playerForm.playerTwoName}}<br><div align="right">{{player2Score}}</div></h2>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    playerForm: {
      playerOneName: '',
      playerTwoName: ''
    },
    player1Score: 0,
    player2Score: 0
  }),
  methods: {
    
  },
  mounted() {
    this.playerForm = this.$store.getters.getPlayerForm;
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
</style>

