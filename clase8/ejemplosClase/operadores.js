// operadores aritmeticos

let a = 10;
let b = 3;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

console.log("suma: ", suma);
console.log("resta: ", resta);
console.log("multiplicacion: ", multiplicacion);
console.log("division: ", division);
console.log("modulo: ", modulo);


// operadores de comparacion
console.log(a > b);     // Devuelve true - a es mayor que b
console.log(a < b);    // Devuelve false - a es menor que b
console.log(a === 10);// Devuelve true - a es estrictamente igual a 10
console.log(a === "10");//Devuelve false - a (commo number) no es estrictamente igual a 10

// Operadores logicos
console.log(true && false);     // Devuelve false - operandor and ambas condiciones deben ser true
console.log(true || false);     // Devuelve true - operador OR devuelve true si al menos de 1 de las condiciones es true
console.log(!true);            // Devuelve falso - operador NOT invierte el valor de un booleano. Es para negacion