/*Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.
*/ 

// Solicitar prompt-sync
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese tres números
let numero1= parseFloat(prompt('Ingresa el primer número: '));
let numero2 = parseFloat(prompt('Ingresa el segundo número: '));
let numero3 = parseFloat(prompt('Ingresa el tercer número: '));

// Determinar cuál es el mayor de los tres números

if (numero1 > numero2 && numero1 > numero3) {
    console.log('Este numero es el mayor de los tres:', numero1);
} 
else if(numero2 > numero1 && numero2 > numero3){
    console.log('Este numero es el mayor de los tres:', numero2);
}
else { 
    console.log('Este numero es el mayor de los tres:', numero3);
}
