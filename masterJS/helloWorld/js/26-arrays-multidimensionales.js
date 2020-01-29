'use strict'

//Arrays multidimensionales
var categorias = ['Acción','Terror','Comedia','Drama'];
var peliculas = ["La verdad duele", "Bienvenidos a Zombiland", "Gran torino"];


var cine = [categorias, peliculas];
console.log(cine);

//console.log(cine[0][1]);

peliculas.push("Batman");
console.log(peliculas);

/*
var elemento ="";
do{
	var elemento = prompt("Introduce una pelicula");
	peliculas.push(elemento);
	peliculas.pop();
}
while(elemento != "ACABAR" || (elemento != "acabar"));

*/

/*
var indice = peliculas.indexOf("Gran torino");
if(indice > -1){
	peliculas.splice(indice);
}

console.log(peliculas);

var peliculas_string = peliculas.join();

console.log(peliculas_string);

 var cadena = "texto1, texto2,texto3";
 var cadena_array = cadena.split(",");
 console.log(cadena_array);
 */

 console.log(peliculas.sort());