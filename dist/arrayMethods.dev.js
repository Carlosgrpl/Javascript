"use strict";

console.log("Advanced Array Methods");
var numbers = [10, 20, 30, 40];

var show = function show(elem) {
  console.log(elem);
};
/* Esto se va a utlizar muchísimo */


numbers.forEach(function (number) {
  console.log(number);
});
var students = ["María", "Carlos", "Pedro"];
/* Por cada estudiante del array de estudiantes has cosas */

students.forEach(function (student) {
  console.log(student.toUpperCase());
});
/* Array que tiene objetos dentro */

var products = [{
  productName: "computer",
  price: 1000,
  isAvailable: true
}, {
  productName: "tv",
  price: 200,
  isAvailable: false
}, {
  productName: "sheet",
  price: 33,
  isAvailable: true
}];
/* Queremos mostrar dentro de products el nombre del producto, con for each */

products.forEach(function (product) {
  console.log(products.productName);
});
/* Método Map (también necesita callback) Siempre nos da de vuela un nuevo array */

var nemNumbers = numbers.map(function (number) {
  return number * 3;
});
console.log(tripleNumbers);
/* Si queremos crear un nuevo Array utilizamos el MAP, si no queremos utilizar un nuevo array utilizamos el forEach */

/* El metodo de map nos devuelve un nuevo array a raíz del array original */

var studentsCopy = students.map(function () {
  return student;
});
console.log(studentsCopy);
console.log(students);
/* Método filter, al igual que el método map y el for each también necesita call back */

var filteredNumbers = numbers.filter(function (number) {
  return number > 25;
});
console.log(numbers);
console.log(filteredNumbers);
/* otro ejemplo */

var cheapProducts = product.filter(function (product) {
  return product.price <= 50;
  /* Nos filtrará esto, si el precio es menor o igual a 50 nos lo mostrará (filtrará) si no, no */
});