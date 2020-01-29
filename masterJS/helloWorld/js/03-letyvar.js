'use strict'
//Pruebas con let y var


//Prueba con var
var numero = 40;
console.log(numero); //valor 40.

if(true){
	numero = 50;
	console.log(numero); //valor 50.
}

console.log(numero); //valor 50.


//Prueba con let
var texto = "JS Course";
console.log(texto);  //valor: JS Course

if(true){
	let texto = "Cambio de cadena";
	console.log(texto);   //valor: Cambio de cadena
}

console.log(texto);   //valor: JS Course