/* Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)
*/

// Solicitar prompt-sync
const prompt = require('prompt-sync')();


// Solicitar al usuario que ingrese su peso en kilogramos
let pesoKg = parseFloat(prompt('Ingresa tu peso en kilogramos: ')); 


// Convertir el peso a libras (1 kg = 2.20462 libras)
let pesoLibras = pesoKg * 2.20462;

// Mostrar el resultado con un mensaje
console.log(`Tu peso en libras es:` + pesoLibras);


