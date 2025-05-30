/*  Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.
*/

// Solicitar prompt-sync
const prompt = require('prompt-sync')();

// 1. Varialble numero 1 y numero 2
let numero1 = parseFloat(prompt('Ingresa un numero:'));
let numero2 = parseFloat(prompt('Ingresa un numero:'));

if (numero1 === numero2) {
    console.log('los numeros son iguales');
}
else if (numero1 > numero2) {
    console.log('este numero es mayor: ' + numero1);
}
else if (numero2 > numero1) {
    console.log('este numero es mayor: ' + numero1);
}






