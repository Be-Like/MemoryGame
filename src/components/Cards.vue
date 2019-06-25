<template>
  <div class="container" v-on:click="flip">
      <h2>Hello</h2>

    <div class="card" v-bind:class="{ flipped: option.flipped }">
      <img class="front" v-if="option.cardName === '8-ball'" src="../assets/EasyImages/easyImage1.jpg"/>
      <!-- <img class="front" v-if="option.cardName === 'baked-potato'" src="../assets/easyImage"/>
      <img class="front" v-if="option.cardName === 'dinosaur'" src="../assets/easyImage"/>
      <img class="front" v-if="option.cardName === 'kronos'" src="../assets/easyImage"/>
      <img class="front" v-if="option.cardName === 'rocket'" src="../assets/easyImage"/>
      <img class="front" v-if="option.cardName === 'skinny-unicorn'" src="../assets/easyImage"/>
      <img class="front" v-if="option.cardName === 'that-guy'" src="../assets/easyImage"/>
      <img class="front" v-if="option.cardName === 'zeppelin'" src="../assets/easyImage"/> -->

      <!-- <img class="back" src="../../../img/back.png"/> -->
    </div>
  </div>
</template>
