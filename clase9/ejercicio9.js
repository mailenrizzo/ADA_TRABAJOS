/*Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.
*/
// Solicitar prompt-sync
const prompt = require('prompt-sync')();

// Definir la constante PI
const PI = 3.14159;

// Solicitar al usuario que ingrese el radio del círculo
let radio = (prompt('Ingresa el radio del círculo: '));

// Convertir el radio a número
let area = PI * radio * radio; // Área del círculo
let perimetro = 2 * PI * radio; // Perímetro del círculo    

// Mostrar los resultados
console.log('El area del círculo es: ' + area);
console.log('El perímetro del círculo es: ' + perimetro);
