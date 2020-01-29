'use strict'

//Document Object Model

function cambiaColor(color){
	caja.style.color = color;
}

//var caja = document.getElementById("micaja");

//Conseguir elementos con un id concreto
var caja = document.querySelector("#micaja");
caja.innerHTML = "Texto de sustitución";
caja.style.background ="red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className ="hola";
console.log(caja);
/*
var color = prompt();
cambiaColor(color);
*/
//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);
todosLosDivs[2].style.color = "red";

//todosLosDivs.forEach((valor,indice) =>{
	var valor;
	for(valor in todosLosDivs){
	if(typeof(todosLosDivs[valor].textContent)=="string"){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);
	}
	
	}
//})



//Conseguir elementos por su clase
/*
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background="yellow";

var div;
for(div in divsRojos){
	
	divsRojos[div].style.background="green";
	
}
console.log(divsRojos);
*/


//Query Selector

var id = document.querySelector("#encabezado");
console.log(id);

var clases = document.querySelectorAll(".rojo");
console.log(clases);

