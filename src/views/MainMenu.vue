<template>
  <v-container text-xs-center wrap class="hero-image" fluid>
    <div class="hero-text-centered">
      <v-flex mb-4>
        <h1 class="hero-text">UNION {{ getRandomTest }}</h1>
        <h2 class="hero-text">Yeah! It's a Memory Game.</h2>
      </v-flex>

      <v-flex xs12 mb-5 id="verticalButtons" v-for="(mode, i) in gameModes"
            :key="i"
            class="subeading mx-3"
            target="_blank">
        <v-layout justify-center id="maxButtonWidth">
          <v-btn dark class="hero-text" block flat :to="mode.url" active-class="inactive">
            {{ mode.text }}
          </v-btn>
        </v-layout>
      </v-flex>

      <v-dialog v-model="dialog" persistent max-width="50%">
        <template v-slot:activator="{on}">
          <v-btn id="maxButtonWidth" dark block flat v-on="on">
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
                <v-text-field :rules="[rules.required]" label="Player 1 Name" v-model="playerOneInfo.name"/>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="[rules.required]" label="Player 2 Name" v-model="playerTwoInfo.name"/>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" :disabled="isValidPlayerInfo" flat @click="savePlayerInfo(playerOneInfo, playerTwoInfo)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-footer absolute color="#000000" dark class="pa-3">
      <v-spacer></v-spacer>
      <a href="https://github.com/Be-Like/MemoryGame.git" class="footer-link">Jake Simpson: Memory Game Repo</a>
    </v-footer>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      rules: {
          required: value => !!value || 'Required.',
      },
      gameModes: [
        {text: "Let's Get Started", url: 'easy'}
      ],
      dialog: false,
      playerOneInfo: {
        name: '',
        score: 0
      },
      playerTwoInfo: {
        name: '',
        score: 0
      }
    }),
    computed: {
      getRandomTest() {
        return this.$store.getters.getRandomTest;
      },
      isValidPlayerInfo() {
        var user1 = this.playerOneInfo.name;
        var user2 = this.playerTwoInfo.name;

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
      savePlayerInfo(player1, player2) {
        var user1 = player1.name;
        var user2 = player2.name;

        if (user1 && user2) {
          this.$store.commit('setPlayerOneInfo', player1);
          this.$store.commit('setPlayerTwoInfo', player2);
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
  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/mainScreen.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }
  .hero-text-centered {
    text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  .hero-text {
    color: white;
  }
  .footer-link {
    color: white;
  }
</style>
