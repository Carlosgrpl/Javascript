console.log("FUNCIONES");
/* Un bloque de código al que llamamos para ejecutarlo cuando queramos, es una función. Esto nos permite reducir y reutilizar código. */
console.log(
  "Tenemos 3 maneras de crear funciones, las 3 son similares, vamos una a una."
);

/* Crear una función */
function decirHola() {
  console.log("Hola");
}

/* Para ejecutar una función, simplemente utilizamos su nombre */
decirHola();

function decirHolaMultiplesVeces() {
  for (let i = 0; i < 6; i++) {
    console.log("Hola");
  }
}

decirHolaMultiplesVeces();
/* Antes de utilizar una función, debe estar definida, debe estar en algún sitio previo antes de que la llamemos */

function decirMiNombre(usuario) {
  console.log("Hola", usuario);
}
/* 'usuario' sería el argumento de la función */
decirMiNombre("Carlos");
decirMiNombre("María");
decirMiNombre("Pedro");
/* Cuando creamos un programa, queremos que se comporte siempre igual. Además, las funciones permiten reducir y reutilizar código, por ejemplo. */
/* Permiten pasar información diferente a la misma función */

function suma(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

suma(10, 20, 30);
suma(30, 48, 3838393);
suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

function multiplicar(num1, num2, num3) {
  return (
    num1 * num2 * num3
  ); /* Esto es lo que devuelve la función, usamos RETURN */
}

let resultado = multiplicar(10, 20, 30);
console.log(resultado);

/* Siempre es mejor crearla dentro de su bloque para dejar el código lo más limpio posible */

/* Podemos tener varios 'return' dentro de una función... con condicionales 'if' tal 'return', 'else if return', 'else return', por ejemplo... */

console.log(
  "Formas de definir una función (¿Cuál es mejor? DA IGUAL, la que nos guste más)."
);
/* Function statement */
function decirHola() {
  console.log("Hola");
}

/* Como se ejecuta: */ decirHola();

/* Function expression */
const decirHola = function () {
  console.log("¡Hola!");
};

/* Como se ejecuta: */ decirHola();

console.log("Arrow Functions");
/* Arrow Functions */
const decirPatata = () => {
  console.log("Patata");
};

/* const concatenar = (str1, str2) => {
    return str1 + str2;
  }; esto es lo mismo que lo de abajo */

const concatenar = (str1, str2) => str1 + str2;

const aMayusculas = (str) => str.toUpperCase();
/* Función flecha corregida para eliminar paréntesis innecesarios */

console.log(concatenar("aaa", "bbb"));
console.log(aMayusculas("hola"));

const llamador = (callback) => {
  console.log("Dentro de la función llamador");
  callback();
};
/* Declaración de función corregida para usar 'const' en lugar de la palabra clave 'function' */

function f() {
  console.log("Dentro de la función f");
}

function g() {
  console.log("Dentro de la función g");
}

llamador(f);
llamador(g);
