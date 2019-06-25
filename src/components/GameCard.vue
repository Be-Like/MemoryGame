<template>
  <div class="cardContainer"  @click="reveal">
    <div class="card">
      <img class="revealed" src="../assets/EasyImages/easyImage1.jpg"/>
      <img class="revealed" src="../assets/EasyImages/easyImage2.jpg"/>

      <img class="hidden" src="../assets/cardBack.jpg">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    selected: {
      type: Object,
      default() {
        return {
          revealed: false,
          cardName: ''
        }
      }
    }
  },
  methods: {
    ...mapActions(['revealCard']),
    reveal() {
      if (this.option.revealed) {
        return;
      }
      this.revealCard(this.option);
      this.$emit('revealed', this.option);
    }
  }
}
</script>

<style scoped>
  .cardContainer {
    width: 100px;
    height: 121px;
    margin-right: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
  }
  .card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  .card img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }
  .card .selected {
    transform: rotateY(180deg);
  }
  .card .revealed {
    transform: rotateY(180deg);
  }
  .card .hidden {
    transform: rotateY(0deg);
  }
  /* @media screen and (max-width: 450px) {
    .cardContainer {
      width: 92px;
      height: 111px;
      margin-right: 1px;
    }
  }
  @media screen and (max-width: 380px) {
    .cardContainer {
      width: 85px;
      height: 102px;
      margin-right: 1px;
    }
  }
  @media screen and (max-width: 360px) {
    .cardContainer {
      width: 70px;
      height: 84px;
      margin-right: 1px;
    }
  } */
</style>

