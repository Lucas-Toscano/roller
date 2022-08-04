




const diceResult = (min, max) => Math.floor(Math.random() *(max - min) + 1);

const button = document.querySelector('.rollDice');
const result = document.querySelector('.rolledNumber');
const sum = document.querySelector('.sum');
const diceAlert = document.querySelector('.diceAlert');

const modifier = document.querySelector('.modifier');
const bonus = document.querySelector('.bonus');
const profBonus = document.querySelector('.profBonus');
const additionalDice = document.querySelector('.additionalDice');

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
  const extraDice = additionalDice.value;
  console.log(additionalDice.value);

  if (d20 === 20) {
    diceAlert.innerHTML = 'Uau! Acerto crítico!';
    result.classList.add('text-yellow-500');
    diceAlert.classList.add('text-yellow-500');
  } else if (d20 === 1) {
    diceAlert.innerHTML = 'Falha crítica!';
    result.classList.add('text-red-600');
    diceAlert.classList.add('text-red-600');
  } else {
    diceAlert.innerHTML = '';
    result.classList.remove('text-red-600');
    result.classList.remove('text-yellow-500');
    diceAlert.classList.remove('text-red-600');
    diceAlert.classList.remove('text-yellow-500');
  }

  let xtraDice = 0;

  if (extraDice === '0') {
    xtraDice = 0;
  } else if (extraDice === 'd4') {
    xtraDice = diceResult(1, 5);
  } else if (extraDice === 'd6') {
    xtraDice = diceResult(1, 7);
  } else if (extraDice === 'd8') {
    xtraDice = diceResult(1, 9);
  } else if (extraDice === 'd10') {
    xtraDice = diceResult(1, 11);
  } else if (extraDice === 'd12') {
    xtraDice = diceResult(1, 13);
  } else {
    xtraDice = diceResult(1, 21);
  }

  const totalSum = d20 + mod + profBon + bon;

  if (totalSum === 0) {
    result.innerHTML = '1';
  } else {
    result.innerHTML = `${d20 + mod + profBon + bon + xtraDice}`;
  }
  sum.innerHTML = `${d20} + ${mod} + ${profBon} + ${bon} + ${xtraDice}`;

  
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