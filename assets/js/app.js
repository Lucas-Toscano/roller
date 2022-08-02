// const d20 = Math.floor(Math.random() * 20);
const diceResult = (min, max) => Math.floor(Math.random() *(max - min) + 1);

const button = document.querySelector('.rollDice');
const result = document.querySelector('.rolledNumber');
const diceAlert = document.querySelector('.diceAlert');

button.onclick = function() {
  const diceRoll = diceResult(1, 21);

  if (diceRoll === 20) {
    diceAlert.innerHTML = 'Uau! um acerto crítico!';
  } else if (diceRoll === 1) {
    diceAlert.innerHTML = 'Falha crítica!';
  } else {
    diceAlert.innerHTML = '';
  }

  result.innerHTML = `${diceRoll}`;
};

// // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// var dice = {
//   sides: 6,
//   roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }

// //Prints dice roll to the page
// function printNumber(number) {
//   var placeholder = document.getElementById('placeholder');
//   placeholder.innerHTML = number;
// }

// var button = document.getElementById('button');

// button.onclick = function() {
//   var result = dice.roll();
//   printNumber(result);
// };