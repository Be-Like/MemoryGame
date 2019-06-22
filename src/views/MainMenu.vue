<template>
  <v-container text-xs-center wrap>
    <v-flex mb-4>
      <h1>UNION {{ getRandomTest }}</h1>
      <h2>Yeah... It's a Memory Game</h2>
    </v-flex>

    <v-flex xs12 mb-5 id="verticalButtons" v-for="(mode, i) in gameModes"
          :key="i"
          class="subeading mx-3"
          target="_blank">
      <v-layout justify-center id="maxButtonWidth">
        <v-btn block flat @click="testAlert(getPlayerForm)">
          {{ mode.text }}
        </v-btn>
      </v-layout>
    </v-flex>

    <v-dialog v-model="dialog" persistent max-width="50%">
      <template v-slot:activator="{on}">
        <v-btn id="maxButtonWidth" block flat v-on="on">
          Player Settings
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Player Information</span>
        </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md6>
              <v-text-field label="Player 1 Name" v-model="playerForm.playerOneName"/>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field label="Player 2 Name"/>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="savePlayerInfo; dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      gameModes: [
        {text: 'Easy'},
        {text: 'Medium'},
        {text: 'Hard'}, 
        {text: 'Absurd'}
      ],
      dialog: false,
      playerForm: {
        playerOneName: '',
        playerTwoName: ''
      }
    }),
    computed: {
      getPlayerForm() {
        return this.$store.state.playerOneName;
      },
      getRandomTest() {
        return this.$store.getters.getRandomTest;
      }
    },
    methods: {
      testAlert(string) {
        alert(string);
      },
      savePlayerInfo() {
        this.$$store.commit('updatePlayerNames', playerForm.playerOneName);
      }
    }
}
</script>

<style>
  #maxButtonWidth {
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    min-width: fit-content;
    max-width: 25%;
  }
  #verticalButtons {
    display: inline;
  }
</style>
