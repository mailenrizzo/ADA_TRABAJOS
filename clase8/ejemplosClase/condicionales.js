/* Consigna:
Crear un programa que simule un sistema de calificaciones basado en la nota
de un estudiante (un valor numerico del 0 al 100). El programa lo que tiene
que hacer es determinar si el estudiante ha reprobado, aprobado o ha obtenido
una calificacion excelente, segun las sig condiciones:


- Si a nota es menos a 60, el estudiante ha reprobado
- Si la nota esta entre 60 y 89 (inclusive), es estudiante ha aprobado
- Si la nota es 90 o mayor, estudiante obtuvo una calificacion excelente

Usar condicionales if, else if para modtrar el mensaje correspondiente
en la consola.
*/

let nota = 55;

if (nota < 60) {
    console.log("alumno reprobado");
} else if (nota >=60 && nota <=89) {
  console.log("estudiante aprobado")
} else if (nota >= 90 && nota <=100) {
  console.log("calificacion excelente");
} else {
  console.log("el numero ingresado no es correcto")
}
