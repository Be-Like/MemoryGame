export const randomTurn = function() {
  var x = Math.floor(Math.random() * 10);
  var player1Turn;
  if (x < 5) {
    player1Turn = true;
  } else {
    player1Turn = false;
  }
  return player1Turn;
}