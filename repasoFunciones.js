console.log("Repaso funciones!");

/* Como crear una función */
/* Ponemos function, le damos nombre a la función (SayHelllo) y siempre ponemos paréntesis tras escribirla */
function sayHello() {
  console.log("Hola!");
}
/* Primero la declaramos (arriba) */

sayHello(); /* Aqui la ejecutamos (a la izquierda) */

/* Y la podemos llamar cuantas veces querramos */
sayHello(); /* Aqui la ejecutamos (a la izquierda) */
sayHello(); /* Aqui la ejecutamos (a la izquierda) */
sayHello(); /* Aqui la ejecutamos (a la izquierda) */

console.log(
  "Pero esa función es muy sencilla, porque no recibe argumentos ni nada, podría recibir argumentos numéricos, strings, objetos, arrays, etc"
); /* Ejemplo debajo */

/* Función de suma, sirve como plantilla */
function sum(num1, num2) {
  console.log(num1 + num2);
}
/* Luego ya creada la función, le creamos los argumentos que querramos */
sum(4949, 19393);
sum(0, 2);
sum(5, 2);

console.log(
  " Si no quisiera usar console log, y quiero que devuelva algo, usamos return"
);

/* opción 1: */
function subtract(num1, num2) {
  let result = num1 - num2;
  return result;
}
/* opción 2: */
// No se puede tener dos funciones con el mismo nombre, así que he eliminado la opción 2

let subResult = subtract(10, 5);
console.log(subResult);

/* Función con objeto */

function isOutOfAge(user) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const user = {
  username: "Carlos",
  age: 27,
  height: 192,
};

const isUserOutOfAge = isOutOfAge(user);

console.log(isUserOutOfAge); // Esto imprimirá true en la consola, ya que la edad de "Carlos" es mayor o igual a 18.

console.log("Función más compleja, con Array");
/* Ejemplo adicional */

const numbers = [10, 20, 30]; /* 1. Creamos el array */
/* 2. Creamos la función (debajo) y le ponemos su argumento (en este caso un array) */
function numbersSum(nums) {
  /* 3. Utilizamos un loop (bucle) para que la función nos devuelva algo; usamos forof */
  let result = 0;
  for (let num of nums) {
    /* "let num of nums" Por cada número del array numeros has cosas */
    result += num;
  }

  return result; /* 4. Devolvemos el resultado */
}
console.log(
  numbersSum(numbers)
); /* 5. para poder verlo en consola la llamo con console log */

/* Nuevo ejemplo, function expression, otra manera de escribir funciones... */

const sayGoodbye = function () {
  console.log("Bye bbtchhh");
};

sayGoodbye();

/* Arrow functions */
const sayHieee = () => {
  console.log("holimundo");
};

sayHieee();

const sayHiTo = (str) => {
  return str.toUpperCase();
};

console.log(sayHiTo("patata"));

/* Callbacks: Es una función que se pasa como argumento a otra función, además, las funciones en JS no son más que variables */
