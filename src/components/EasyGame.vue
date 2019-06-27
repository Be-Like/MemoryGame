<template>
  <v-container class="game-panel">
    <v-toolbar dark color="#546E7A">
      <v-toolbar-title>Welcome to an Easy Game of Memory</v-toolbar-title>
    </v-toolbar>
    <game-header @winner="updateCurrentWinner" @player1IsWinner="updateIsWinner"/>
    <board-setup class=""/>
    <div class="winnerBanner" 
      :class="{player1IsWinner: player1IsWinner, player2IsWinner: !player1IsWinner}"
       v-if="getTotalMatches == 0 && currentWinner">
       <h1 class="winnerText" >{{currentWinner}} is the winner!</h1>
    </div>
    <div class="winnerBanner tie" 
       v-if="getTotalMatches == 0 && !currentWinner">
       <h1 class="winnerText tie">Alas, it has come down to a tie...</h1>
    </div>
    <v-footer justify-center dark color="#546E7A" align="right">
      <v-spacer></v-spacer>
        <v-btn @click.stop="confirmReset = true" flat>Reset</v-btn>
        <v-btn @click.stop="confirmExit = true" flat>Main Menu</v-btn>
    </v-footer>
    

    <!-- Confirmation Dialogs -->
    <v-dialog v-model="confirmReset" max-width="290">
      <v-card>
        <v-card-title class="headline">Reset</v-card-title>
        <v-card-text>
          Are you sure you want to reset? Current game data will be erased.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="confirmReset = false">
            cancel
          </v-btn>
          <v-btn color="green darken-1" flat="flat" @click="confirmedReset">
            reset
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmExit" max-width="290">
      <v-card>
        <v-card-title class="headline">Are you sure you want to leave?</v-card-title>
        <v-card-text>
          Current game data will be erased and you will return to the main menu.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="confirmExit = false">
            cancel
          </v-btn>
          <v-btn color="green darken-1" flat="flat" @click="confirmExit = false" to="/">
            Exit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import GameHeader from './GameHeader.vue';
import BoardSetup from './BoardSetup.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    GameHeader,
    BoardSetup
  },
  data: () => ({
    currentWinner: '',
    player1IsWinner: null,
    confirmReset: false,
    confirmExit: false
  }),
  computed: {
    ...mapGetters(['getCards', 'getTotalMatches'])
  },
  methods: {
    ...mapActions(['reset']),
    showCards() {
      alert(JSON.stringify(this.getCards));
    },
    updateCurrentWinner(currentWinner) {
      console.log("update current winner " + currentWinner);
      this.currentWinner = currentWinner;
    },
    updateIsWinner(isWinner) {
      console.log("update Is Winner " + isWinner)
      this.player1IsWinner = isWinner;      
    },
    confirmedReset() {
      this.confirmReset = false;
      this.reset();
    }
  },
  created() {
    this.reset();
  }
}
</script>

<style>
  .winnerText {
    top: 50%;
    position: relative;
    text-align: center;
  }
  .winnerText.tie {
    color: white;
    text-align: start;
  }
  .winnerBanner {
    width: 100%;
    height: 50%;
    position: fixed;
    top: 20%;
    left: 0;
    z-index: 10;
  }
  .winnerBanner.tie {
    background-image: url(../assets/gameTie.jpg);
    background-size: cover;
  }
  .winnerBanner.player1IsWinner {
    background-image: url(../assets/redWinner.jpg);
  }
  .winnerBanner.player2IsWinner {
    background: url(../assets/blueWinner.jpg);
    background-size: cover;
  }
  .game-panel {
    background-color: rgba(214, 219, 223, 1);
    background-image: url(../assets/mainScreen.jpg);
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
</style>

