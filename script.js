'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0');
// select element by its ID
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
