// Created: 07/28/2024
// Author: Jose I. Ossorio-Rojas

// script.js
function showAlert() {
    alert('Button clicked!');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', showAlert);
});

