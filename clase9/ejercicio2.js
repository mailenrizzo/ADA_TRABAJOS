/*Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.
*/

// Solicitar prompt-sync
const prompt = require('prompt-sync')();

// 1. Definir constantes
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 90;

// 2. Solicitar al usuario un numero
let numero = parseFloat(prompt('Ingresa un numero:'));


// 3. Verificar si el numero esta dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log('El numero ' + numero + ' esta dentro del rango definido.');
}
else {
    console.log('El numero ' + numero + ' no esta dentro del rango definido.');
}

