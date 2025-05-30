/*Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.
*/

// Solicitar prompt-sync
const prompt = require('prompt-sync')();


// declaro variables booleanas
let condicion1 = true;
let condicional = false;


//solicito al usuario dos variables booleanas
let primeraVariable = prompt('Ingresa el primer booleano: (true/false):');
let segundaVariable = prompt('Ingresa el segundo valor booleano: (true/false)');


// 3. Verificar si el valor es verdadero o falso
//primer variable
if (primeraVariable === true) {
    console.log('El valor es verdadero');
}
else{
    console.log('El valor es falso')
}

// segunda variable
if(segundaVariable = false){
    console.log('El valor es falso');
}
else{
    console.log('El valor es verdadero');
}

// 4. Combinaciones logicas
console.log('Combinaciones logicas:');
console.log('AND: ' + (primeraVariable && segundaVariable));
console.log('OR: ' + (primeraVariable || segundaVariable));
console.log('NOT primeraVariable: ' + !primeraVariable);
console.log('NOT segundaVariable: ' + !segundaVariable);
