console.log("REPASO.JS");
/* CONDICIONALES / CONDICIONALS, REPASO; las condicionales son una estructura de control de flujo, nos permite ejecutar un código si una función se cumple */

console.log("If else");

let num = "caca";

if (num > 20) {
  console.log("10 es mayor que 20");
} else {
  console.log("Desgracia");
}

/* Esto es lo básico en condicionales <3 */

if (num < 0) {
  console.log("Es negativo");
} else if (num === 0) {
  console.log("Es igual a 0");
} else if (num > 0) {
  console.log("Es positivo");
} else {
  console.log("No sé que es tu huveada");
}

/* BUCLES - LOOPS: REPASO */

console.log(
  "Bucles: Bloque de código que permite repetir un código en un bucle, se repetirá las veces que nosotros queramos, mientras se cumpla esa condición se seguirá repitiendo"
);
/* El primer elemento (indice) es la variable desde la que parte la cuenta, el segundo elemento (indice) es la condición que debe cumplir el loop para que se continue cumpliend, el tercero es el incremento */
for (let indice = 1; indice <= 10; indice++) {
  console.log(indice);
}

/* for of: permite recorrer estructuras iterables */

const movies = [
  "The Matrix",
  "The Matrix 2",
  "The Matrix 3",
  "The Matrix 4",
]; /* Array de 4 elementos */

console.log(
  movies[0]
); /* Si ponemos 0 mostramos el primero, con el 1 el segundo, etc */

for (let indice = 0; indice < movies.length; indice++) {
  console.log(movies[indice]);
}

/* Ejemplo sencillo */

/* Diferencia entre for y while, son intercambiables, hacen lo mismo, pero se escriben de manera distinta */

let index = 0; /* Primera diferencia, creamos la variable fuera del bucle while */

console.log(
  "--------------------------------bucle while---------------------------------"
);

while (index < movies.length) {
  index++;
  console.log(movies[index]);
}

console.log("bucle for of (este me gusta más :-))");
/* For of, permite etierar a través de un elemento iterable, un array por ejemplo, te lo permite hacer de una manera con menos código que con el loop FOR normal, bucle for of es mejor para arreglos */
for (let element of movies) {
  console.log(element);
}
/* se lee; por cada movie del array movies, has cosas (console.log etc). La sintaxis es bastante más fácil en for of */

console.log("como se haría con objetos");

const products = [
  {
    name: "zapatillasasasas",
    price: 939393203203293932,
    EstáDisponibleAhoraMismo: true,
  },

  { name: "termosossoso", price: 0, EstáDisponibleAhoraMismo: true },

  { name: "sweatersssoso", price: 20, EstáDisponibleAhoraMismo: false },
];

for (let elemento of products) {
  console.log(elemento.name, elemento.EstáDisponibleAhoraMismo);
} /* se lee; por cada elemento del array products, has cosas (console.log etc). La sintaxis es bastante más fácil en for of */
