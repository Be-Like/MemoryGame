export const shuffle = function(cardArray) {
  var newCardArray = cardArray.slice();
  for (let i = newCardArray.length; i; i--) {
    const x = Math.floor(Math.random() * i);
    const y = newCardArray[i - 1];
    newCardArray[i - 1] = newCardArray[x];
    newCardArray[x] = y;
  }
  return newCardArray;
}