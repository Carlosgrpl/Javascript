"use strict";

/* ARRAYS */

/* Un conjunto de elementos ordenado, esta estructura de datos viene muy bien cuando tenemos información similar, por eso nunca podemos mezclar los tipos de datos dentro del array (aunque JS lo permita) */

/* Creamos arrays numéricos, arrays de strings, arrays de objetos, se podrían crear de distintos tipos de datos, pero es una mala práctica */
console.log("Arrays!");
var numArray = [10, 20, 30, 40, 50];
/* No tienen nombre, solo valor, son indices */

console.log(numArray);
/* Tienen un indice preexistente, que empieza a contar en cero, sería; 0: 10, 1: 20, 2: 30... */

console.log(numArray[0]);
/* 10 */

/* Accedemos a un elemento del array, dentro del indice, poniendo [0] nos dará el primer elemento, si pongo [3] nos dará el cuarto... osea sería 40 */

var Countries = ["Spain", "Mexico", "Ecuador"];
console.log(Countries);
console.log(Countries[0]);
var Products = [{
  /* Creamos un objeto dentro del array, tenemos un array de OBJETOS, esto es súper útil para marketplaces por ejemplo */
  productName: "Zapatillas",
  precio: 50,
  isForSale: true
}, {
  productName: "Libro",
  precio: 30,
  isForSale: false
}, {
  productName: "videojuego",
  precio: 60,
  isForSale: true
}];
console.log(Products);
console.log(Products[2]);
console.log(Products[3]);
/* Los arrays tienen varios metodos; push, pop, shift, unshift, etc, lo importante no es memorizarlos, lo imp es saber donde están o como buscarlos */

/* Métodos de los arrays */

/* i. Push */

numArray.push(60);
console.log(numArray);
Countries.push("Colombia");
console.log(Countries);
Products.push({
  productName: "Aspiradora",
  precio: 100,
  isForSale: true
});
console.log(Products);