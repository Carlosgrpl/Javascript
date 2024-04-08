console.log("Hello World");
//alert("stawp");
/* Alert: hace que se muestre una alerta en la web, no se suele usar mucho... */
/* shitf alf f: Prettier -> Formatear el documento, antes de terminar siempre formatear el código */
/* let username = "Carlos"; */
/* confirm("Are you sure?"); */
let userName = "Carlos"; /* aqui creamos la variable, info de tipo STRING */
let userAge = 25; /* aqui creamos la variable, info de tipo NUMBER */
let isOnline = true; /* aqui creamos la variable, info de tipo BOOLEAN */
/* las variables en JS se crean del mismo modo: 1. let, 2. nombre, 3. = "tipo de dato"; */

console.log("User Name: ", userName);
console.log("User Age: ", userAge);
console.log("User is Online: ", isOnline);

let wow = "wow";
let wowMayusc = wow.toUpperCase();
console.log(wowMayusc);

userName = "Homero";
console.log("User Name: ", userName);

userAge = "99";
console.log("User Age:", userAge);

/* Si no queremos que una variable se quiere redefenir usamos CONST */
const ComoVas = "Ugh"; /* esto es un string, por ejemplo */
/* now i log it */
console.log("Cómo vas?: ", ComoVas);

/* JAVASCRIPT NOS PERMITE CAMBIAR EL TIPO DE DATO AL RENOMBRAR O REVALORAR VARIABLES, PERO ESO ES UNA MUY MALA PRÁCTICA, OSEA SI ES ORIGINALMENTE UNA VARIABLE STRING, NO PASARLA A NUMBER O BOLEANA, QUE SEA CONSTANTE, por ejemplo, debajo: */

console.log(10 + 10);
/* No podría ser console.log (10+"10") porque estoy mezclando dos datos de tipos distintos, entonces javascript lo interpreta como string, y no debería ser así...OJO a la mala práctica */

/* -----------OPERADORES LÓGICOS (de comparación)-------- */

let NUMBER1 = 10;

let NUMBER2 = 20;

let MyBoolean = true;

console.log(NUMBER1 > NUMBER2);
console.log(NUMBER1 < NUMBER2);
console.log(NUMBER2 >= NUMBER1);
console.log(NUMBER1 <= NUMBER2);
/* == compara valores, === compara valores y tipos*/
/* SIEMPRE utilizamos el triple igual para comparar valores */
console.log(NUMBER1 == NUMBER2);
console.log(NUMBER1 === NUMBER2);

console.log(!MyBoolean);
/* ! -> invierte el valor del operador lógico, si es true, se haría false, es cuestión de ponerlo antes de la variable al loggearla, se utiliza mucho.  */
//&& el resultado de cualquier operación lógica será true, si y solo si todos sus operandos son true
console.log(MyBoolean && MyBoolean); /* condición ilogica */
console.log(
  false || true
); /* Ológico: con al menos uno que sea verdadero devuelve true, así el resto sea False, condición ológica */

/* Operacioones aritméticas */
let NUM1 = 5;
let NUM2 = 10;

let sumResult = NUM1 + NUM2;
console.log("sumResult: ", sumResult);

let subResult = NUM1 - NUM2;
console.log("subResult: ", subResult);

let multResult = NUM1 * NUM2;
console.log("multResult: ", multResult);

let expResult = NUM1 ** NUM2; /* No se usa practicamente */
console.log("expResult: ", expResult);

/* Operador MODULO, sirve por ejemplo para saber si un numero es par o impar, te da el restante de la divisón... */

let modResult = NUM1 % NUM2;
console.log("modResult: ", modResult);

/* Métodos de los string */

const myName = "Carlos";
const myLastName = "GR";

console.log(myName + " " + myLastName);

console.log(fullName);

/* Tres maneras de escribir un string en javascript:
i. ''
ii. ""
iii. `` */

/* Caracter especial -> la contrabarra: \  */

const fullName = `Carlos ${myLastName}`;

let _myCompleteName = `${myLastName} ${myName}`;
console.log(_myCompleteName);
/* `` Entiendo que estas comillas angulares son mejores, se usa más cuando el string es más completo, le dicen string literal porque lo que esté dentro se loggea tal cuál en conselo */

/* Métodos de los String */

let myString = "Hola Mundo!";
console.log(myString.length);
