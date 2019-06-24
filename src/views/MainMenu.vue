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
        <v-btn block flat :to="mode.url" active-class="inactive">
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
              <v-text-field :rules="[rules.required]" label="Player 1 Name" v-model="playerForm.playerOneName"/>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field :rules="[rules.required]" label="Player 2 Name" v-model="playerForm.playerTwoName"/>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" :disabled="isValidPlayerInfo" flat @click="savePlayerInfo(playerForm)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      rules: {
          required: value => !!value || 'Required.',
      },
      gameModes: [
        {text: 'Easy', url: 'easy'},
        {text: 'Normal', url: 'normal'},
        {text: 'Hard', url: '/hard'}, 
        {text: 'Absurd', url: '/'}
      ],
      dialog: false,
      playerForm: {
        playerOneName: '',
        playerTwoName: ''
      }
    }),
    computed: {
      getPlayerForm() {
        return this.$store.state.playerForm;
      },
      getRandomTest() {
        return this.$store.getters.getRandomTest;
      },
      isValidPlayerInfo() {
        var user1 = this.playerForm.playerOneName;
        var user2 = this.playerForm.playerTwoName;

        if (user1 && user2) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      testAlert(player) {
        alert(JSON.stringify(player));
      },
      savePlayerInfo(playerInfo) {
        var user1 = playerInfo.playerOneName;
        var user2 = playerInfo.playerTwoName;

        if (user1 && user2) {
          this.$store.commit('updatePlayerNames', playerInfo);
          this.dialog = false;          
        }
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
