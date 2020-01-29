'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2,... restoFrutas){
	console.log("Fruta 1: "+fruta1);
	console.log("Fruta 2: "+fruta2);
	console.log(restoFrutas);
}

var frutas = ["Manzana","Fresa"]
listadoFrutas(...frutas,"Naranja","Melón","Melocotón");