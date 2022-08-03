




const diceResult = (min, max) => Math.floor(Math.random() *(max - min) + 1);

const button = document.querySelector('.rollDice');
const result = document.querySelector('.rolledNumber');
const sum = document.querySelector('.sum');
const diceAlert = document.querySelector('.diceAlert');

const modifier = document.querySelector('.modifier');
const bonus = document.querySelector('.bonus');
const profBonus = document.querySelector('.profBonus');

button.onclick = function() {
  const d20 = diceResult(1, 21);
  const d4 = diceResult(1, 5);
  const d6 = diceResult(1, 7);
  const d8 = diceResult(1, 9);
  const d10 = diceResult(1, 11);
  const d12 = diceResult(1, 13);
  const xd20 = diceResult(1, 21);

  const mod = parseFloat(modifier.value);
  const bon = parseFloat(bonus.value);
  const profBon = parseFloat(profBonus.value);

  console.log(mod);

  if (d20 === 20) {
    diceAlert.innerHTML = 'Uau! um acerto crítico!';
  } else if (d20 === 1) {
    diceAlert.innerHTML = 'Falha crítica!';
  } else {
    diceAlert.innerHTML = '';
  }

  const totalSum = d20 + mod + profBon + bon;

  if (totalSum === 0) {
    result.innerHTML = '1';
  } else {
    result.innerHTML = `${d20 + mod + bon + profBon}`;
  }
  sum.innerHTML = `${d20} + ${mod} + ${profBon} + ${bon} `;

  
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