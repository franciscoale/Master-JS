'use strict'

//CONDICIONALES

//IF, (Si a es igual que b, entonces HAZ ALGO)


var edad = 20;
var nombre = "Curro Alé";

//OPERADORES RELACIONLES
/*
< MENOR QUE
> MAYOR QUE
<= MENOR/IGUAL
>= MAYOR/IGUAL
== IGUAL
=== IDENTICO
!= NO IGUAL
*/


/*
if(edad>18){
	console.log(nombre+" "+"es mayor de edad, "+"tiene: "+edad+" años.");

	if(edad < 33){
		console.log("Todavia eres milenial");
	}else if(edad>= 70){
		console.log("Eres anciano");
	}else{
		console.log("Ya no eres milenial")
	}
}else{
	console.log(nombre + " " + "es menor de edad");
}
*/

//OPERADORES LOGICOS
/*
AND(Y): &&
OR(O): ||
Negación: !
*/

if(edad>=18 && edad<= 33){
	console.log(nombre+""+" es mayor de edad y milenial")
}else{
	console.log(nombre+ ""+ " no es mayor de edad");
}

var year = 2018;

//Negación
if(year!= 2016){
	console.log("El año no es 2016, realmente es: "+ year);
}

//AND
if(year>=2000 && year <=2020){
	console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year==2028)){
	console.log("El año acaba en 8");
}else{
	console.log("Año no registrado");
}