/* OBJECTS Y ARRAYS */

console.log("!Objects");
/* los objetos en javascrip se escriben poniendo llaves {}, luego, entre las llaves, debemos añadir propiedades, y las propidades no utilizan =, utilizan : */
/* Es un tipo de dato que sirve para agrupar varias propiedades */
let book = {
  title: "La Sombra de los Vientos",
  author: "Carlos Ruiz Zafon",
  pages: 493,
  language: "Spanish",
  isGood: true,
};

/* Luego le podemos hacer console.log, pero esto es para nosotros como desarrolladores, no para nada más, es un log de lo que se ha realizado */

console.log(book);

/* ¿Y si solo queremos acceder a una de las propiedades del objeto? */

console.log(book.title);

let HotelRoom = {
  suite: "Presidencial",
  precio: 2500,
  fees: 250,
};

console.log(
  HotelRoom.precio + HotelRoom.fees
); /* Al final al huesped le interesa solo ver el total, al final se pueden sumar varias propiedades para imprimir otra específiaa, por eso es mejor tener todas estas propiedades juntas y no sueltas */

/* Alguien tiene un cupón... que hacemos, tenemos que modificar la propiedad de un objeto*/

HotelRoom.precio -= 50;
/* El nuevo precio de Hotel room es lo que costaba antes menos 50 */
console.log(HotelRoom);

/* Podemos acceder a las propiedades del objeto y podemos modificarlas, con el . */

/* A veces no sabemos el nombre de una propiedad, y podemos acceder con la utilización de corcheres */
console.log(HotelRoom["suite"]);

/* ARRAYS */

let a = 10;
let b = a;
console.log("a:", a, "b:", b);
b = 20;
console.log("a:", a, "b:", b);

/* PASAS VALORES ENTRE VARIABLES POR: 
1. VALOR: Cuando decimos que b es igual a a, estamos haciendo una copia de lo que vale a en la variable b
2. REFERENCIA:  Los valores de los arrays y objetos funcionan por referencia, no por valor, cuando cambiamos las propiedades en un objeto las cambiamos también en
