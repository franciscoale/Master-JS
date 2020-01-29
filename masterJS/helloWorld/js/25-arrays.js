'use strict'

//Arrays , Arreglos, Matrices

var nombre = "Curro Alé";
var nombres = ["Curro Alé", "Fran Allen", "María García","Hans Carnal","Águila Calva"];

var textos = new Array("Hola", "Mundo", "Soy", "Curro");

console.log(nombres);
console.log(textos);
console.log(nombres[2]);

/*var elemento = parseInt(prompt("¿Qué elemento del Array quieres"));
if(elemento>=nombres.length){
	alert("No existe ese elemento");
}else{
	alert("El usuario seleccionado es: "+ nombres[elemento]); 
}
*/
document.write("<ul>")
document.write("<h1>NOMBRES DE USUARIOS: </h1>");
/*
for(var i = 0; i< nombres.length; i++){
	document.write("<li>"+nombres[i]+"</li>");
}
*/
/*
nombres.forEach((elemento, indice, array)=>{
	console.log(array);
	document.write("<li>"+indice+"-"+elemento+"</li>");
});
document.write("</ul>")
*/
for(let nombre in nombres){
	document.write("<li>"+nombres[nombre]+"</li>")
}

//Búsquedas.


//var busqueda = nombres.findIndex(nombre =>nombre == "Curro Alé");
//console.log(busqueda);

var precios = [10,20,30,40,12,80];

var busqueda = precios.some(precio =>precio >= 20);
console.log(busqueda);















