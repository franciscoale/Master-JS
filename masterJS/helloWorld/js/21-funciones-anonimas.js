'use strict'

//FUNCIONES ANONIMAS
//Funcion sin nombre que se puede guardar en una variable.
//Usado para hacer callbacks

var pelicula = function(nombre){
	return "La pelicula es: "+ nombre;
}

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYMuestra(sumar);
	sumaPorDos(sumar);
	return "La suma es: "+ sumar;
}

sumame(5,7, function(dato){
	console.log("La suma es: ", dato)
},function(dato){
	console.log("La suma por 2 es:", (dato*2));
});