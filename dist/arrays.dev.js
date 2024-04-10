"use strict";

/* ARRAYS, los métodos que más se usan son Includes, Push, POP y a lo mejor Splice */

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

/* i. Push: AGREGA ELEMENTOS AL FINAL DEL ARRAY */

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
/* ii. Lenght: NOS DICE EL NUM DE ELEMENTOS QUE TIENE UN ARRAY */

console.log(numArray.length);
console.log(Countries.length);
console.log(Products.length);
/* iii. Unshift: AGREGA ELEMENTOS AL PRINCIPIO DEL ARRAY, se suele usar MUCHO MÁS el PUSH*/

numArray.unshift(0.5);
console.log(numArray);
Countries.unshift("Portugal");
console.log(Countries);
Products.unshift({
  productName: "Mesa",
  precio: 50,
  isForSale: true
});
console.log(Products);
/* iv. Pop: ELIMINA EL ULTIMO ELEMENTO DEL ARRAY, es un elemento MUY UTILIZADO, por ejemplo, cuando creamos un carrito de compras, porque lo elimina automaticamente cuando completamos el carrito */

numArray.pop();
console.log(numArray);
Countries.pop();
console.log(Countries);
Products.pop();
console.log(Products);
/* v. Shift: ELIMINA EL PRIMER ELEMENTO DEL ARRAY, es un elemento UNSHIFT VA CON SHIFT*/

Products.shift();
console.log(Products);
/* v. Splice: Como quitar o añadir un elemento de los arrays, pero en la posición que nosotros queremos, esto sirve mucho porque nos permite crear arrays dinámicos */

/* Si quisieramos borrar un elemento, simplemente ponemos en el segundo parámetro el indice del elemento que queremos borrar, pusimos 0 en el ejemplo debajo para no borrar ninguno, pero si poníamos 1, borrará el segundo elemento (10), no se suele usar mucho */

numArray.splice(2, 0, 99);
console.log(numArray);
Countries.splice(1, 1);
console.log(Countries);
Products.splice(1, 2);
console.log(Products);
/* v. Reverse: Modifica el array original; INVIERTES LOS ELEMENTOS DEL ARRAY, le da la vuelta, el que era el primero será el último y viceversa */

numArray.reverse();
console.log(numArray);
/* Modifica el Array original... ahora numArray será este: [99, 40, 30, 20, 10], muchas veces no queremos modificar el array original, tenerlo en cuenta */

/* vi. Sort: Modifica al Array original; alfabeticamente ordena el array y modifica el array original */

/* Veremos el viernes como utilizar mejor el método sort...*/

numArray.sort();
console.log(numArray);
var numbers = [1383838183823, 9394, 9489384, 0];
console.log(numbers);
numbers.sort();
console.log(numbers);
/* vii. Concat: Nos permite concatenar 2 o más arrays, Concatenar arrays  */

var allNumber = numArray.concat(numbers);
console.log(allNumber);
/* viii. Slice: Nos permite obtener una porción de un Array */

console.log(numArray.slice(2, 7));
/* Quedaría de 2 a 7, es decir 20, 30, 40, 50, 99, en lugar de lo que era numArray antes */

console.log(Countries.slice(1));
console.log(Products.slice(0, 2));
/* ix. toString: Nos permite convertir un array en string, puedes verlo en la consola */

console.log(numArray.toString());
console.log(Countries.toString());
console.log(Products.toString());
/* x. join: Método de los array que nos va a devolver un string con el separador que queramos, el separador por defecto es una coma. Queda muy parecido al string, pero entre los elementos, le podemos especificar el separador que queremos que tengan los elementos*/

/* Puede ser muy útil al procesar mucho texto, por ej, tenemos un chat donde el usuario puede escribir, todo eso serán arrays de string, si queremos mostrar toda la convo en formato texto, debemos unir todo via strings con el método Join */

console.log(numArray.join("-"));
console.log(Countries.join(" "));
console.log(Products.join("omg increible separador"));
/* xi. split: Nos permite convertir un string en un array, el separador por defecto es un espacio, el separador que le pasemos a split () */

/* Separa cada palabra del string en un array, por indice... */

/* el salto de línea se hac econ "\n" */

/* Muy útil si por ejemplo queremos dividir los datos por saltos de línea ("\n") */

var lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deserunt!";
var words = lorem.split(" ");
console.log(words);
/* xii. indexOf: Nos permite saber la posición de un elemento dentro de un array  */

var numerosInfinitos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(numerosInfinitos.indexOf(10));
/* Si hacemos index of de un elemento que no existe saldrá -1 */

console.log(numerosInfinitos.indexOf(100));
console.log(Products.indexOf("Aspiradora"));
/* Nos da -1 porque es un array de objetos, al final son objetos se guardan como referencias, como posición de memoria, y el que queremos buscar no coincide con ninguno, no se puede buscar objetos con IndexOf, pero se puede hacer con otras formas */

/* xiii. lastIndexOf: Nos permite saber la posición de un elemento dentro de un array, buscando por la derecha, a diferencia de indexOf que busca por la izquierda */

/* Viene bien si nos queremos quedar con los últimos elementos, no con los primeros */

console.log(numArray.lastIndexOf(50));
/* xiv. includes: Nos permite saber si un elemento existe dentro de un array */

/* Por ej, si estamos buscando una habitación con precio entre 100 y 200, si existe nos los dirá, caso contrario nos dirá false, se me ocurro que usan esto por ejemplo en idealista al buscar pisos */

console.log(numArray.includes(393939));
/* False */

console.log(numArray.includes(50));
/* True */

/* Nos dice true o false si el array incluye el número o no, funciona con strings también, pero no con objetos */

console.log(Countries.includes("Ecuador"));
/* True */