'use strict'

//Métodos para transformación de texto.

var numero = 444;
var texto1 = "Bienvenido amigo!, espero que te guste amigo";
var texto2 = "HEY!";



numero.toString();

console.log(texto1.toUpperCase());
console.log(texto2.toLowerCase());
console.log(texto1.length);

//Concatenar (Unir textos)

var textoTotal = texto1.concat(texto2);
console.log(textoTotal);

//Buscar si existe palabra en un string

var busqueda = texto1.trim();
console.log(busqueda);