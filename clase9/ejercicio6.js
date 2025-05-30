/*Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.
*/

// Solicitar prompt-sync
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese su edad
let edad = parseInt(prompt('Ingresa tu edad: '));

// Verificar si es mayor o menor de edad
if (edad >= 18) {
    console.log('Eres mayor de edad. Puedes votar y conducir.');
}
else {
    console.log('Eres menor de edad. No puedes votar ni conducir.');
}