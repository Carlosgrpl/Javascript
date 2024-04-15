"use strict";

console.log("FUNCIONES");
/* Un bloque de código al que nosotros llamamos para ejecutar cuando queramos, es un comando, esto permite reducir y reutilizar código */

console.log("Tenemos 3 maneras de crear funciones, las 3 son similares, vamos una a una");
/* Crear una función */

function LeDamosElNombreQueQueramos_SuelenTenerNombredeVerbo_QueremosQueHaganAlgo_PorEjemplo_SayHello() {
  console.log("Hello");
}
/* Para ejecutar una función simplemente utilizamos su nombre */


LeDamosElNombreQueQueramos_SuelenTenerNombredeVerbo_QueremosQueHaganAlgo_PorEjemplo_SayHello();

function SayHello() {
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
}

SayHello();
/* Antes de utilizar una función tiene que estar definida, debe estar en algún sitio previo antes de que la llamemos */

function SayMyName(Username) {
  console.log("Hola", Username);
}
/* Username sería el argumento de la función */


SayMyName("Carlos");
SayMyName("María");
SayMyName("Pedro");
/* Cuando creemos un programa queremos que se comporte siempre igual, además, las funciones permiten reducir y reutilizar código, por ejemplo */

/* Permiten pasar información diferente a la misma función */

function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

sum(10, 20, 30);
sum(30, 48, 3838393);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
  /* Esto es lo que devuelve la función, usamos RETURN */
}

var akmdsaskdm_result = multiply(10, 20, 30);
console.log(akmdsaskdm_result);
/* Siempre es mejor crearla dentro de su bloque para dejar el código lo más limpio posible */

/* Podemos tener varios return dentro de una función... con condicionales if tal return else if return else return, por ejemplo... */

console.log("Formar de definir una función (Qué es mejor? DA IGUAL, la que nos guste más");
/* Function statement */

function sayHi() {
  console.log("Hi");
}
/* Como se ejectuva-> */


sayHi();
/* Function expression  */

var sayHello = function sayHello() {
  console.log("Hello!");
};
/* Como se ejectuva */


SayHello();
console.log("Arrow Functions");
/* Arrow Functions */

var SayPotato = function SayPotato() {
  console.log("Potato");
};

var concat = function concat(str1, str2) {
  return str1 + str2;
};

concat("aaa", "bbb");