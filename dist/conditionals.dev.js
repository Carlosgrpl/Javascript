"use strict";

console.log("conditionals.js");
var age = "popo";
/* Si le pongo un número ya me daría un console log normal jajja, me ha dado el del último else, que se refiere a que si ninguna condición se cumple poner esto */

if (age >= 18) {
  console.log("Eres mayor de edad");
} else if (age < 18) {
  console.log("Eres menor de edad");
} else if (age === 18) {
  console.log("Eres de 18 años");
} else {
  console.log("No tienes una edad razonable, chao");
}

var number = 10;
/* % es el operador módulo, es el resto de la división */

if (number % 2 === 0) {
  console.log("El numero es par");
}