<template>
  <div class="cardContainer"  @click="reveal">
    <div class="card" v-bind:class="{revealed: selected.revealed}">
      <img class="faceUp" v-if="selected.cardName === 'card1'" src="../assets/EasyImages/easyImage1.jpg"/>
      <img class="faceUp" v-if="selected.cardName === 'card2'" src="../assets/EasyImages/easyImage2.jpg"/>
      <img class="faceUp" v-if="selected.cardName === 'card3'" src="../assets/EasyImages/easyImage3.jpg"/>
      <img class="faceUp" v-if="selected.cardName === 'card4'" src="../assets/EasyImages/easyImage4.jpg"/>
      <img class="faceUp" v-if="selected.cardName === 'card5'" src="../assets/EasyImages/easyImage5.jpg"/>
      <img class="faceUp" v-if="selected.cardName === 'card6'" src="../assets/EasyImages/easyImage6.jpg"/>
      <img class="faceUp" v-if="selected.cardName === 'card7'" src="../assets/EasyImages/easyImage7.png"/>
      <img class="faceUp" v-if="selected.cardName === 'card8'" src="../assets/EasyImages/easyImage8.jpg"/>

      <img class="faceDown" src="../assets/cardBack.jpg">
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
      if (this.selected.revealed) {
        return;
      }
      this.revealCard(this.selected);
      this.$emit('revealed', this.selected);
      console.log(this.selected.cardName)
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
  .card.revealed {
    transform: rotateY(180deg);
  }
  .card img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }
  .card .faceDown {
    transform: rotateY(0deg);
  }
  .card .faceUp {
    transform: rotateY(180deg);
  }
  @media screen and (max-width: 450px) {
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
  }
</style>

