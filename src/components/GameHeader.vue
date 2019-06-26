<template>
  <v-container class="status-bar">
    <h2>{{playerOneInfo.name}}<br>{{playerOneInfo.score}}</h2>
    <div class="vr"></div>
    <h2>{{playerTwoInfo.name}}<br><div align="right">{{playerTwoInfo.score}}</div></h2>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    playerOneInfo: {
      name: '',
      score: 0
    },
    playerTwoInfo: {
      name: '',
      score: 0
    }
  }),
  methods: {
    
  },
  computed: {
    ...mapGetters(['getPlayerOneInfo', 'getPlayerTwoInfo'])
  },
  mounted() {
    this.playerOneInfo = this.getPlayerOneInfo;
    this.playerTwoInfo = this.getPlayerTwoInfo;

    // alert(JSON.stringify(this.playerOneInfo))
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

