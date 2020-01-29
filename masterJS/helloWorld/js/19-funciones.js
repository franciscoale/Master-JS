'use strict'

//FUNCIONES

//defino la funcion
function nombre(){
	console.log("Hola?");
	console.log("digame")

	//return sirve para devolver un valor
}

nombre();

function porConsola(numero1,numero2){
	console.log("Suma: "+ (numero1+numero2));
	console.log("Resta: "+ (numero1-numero2));
	console.log("Multiplicación: "+ (numero1*numero2));
	console.log("División: "+ (numero1/numero2));
	console.log("************************");
}

function porPantalla(numero1,numero2){
	document.write("Suma: "+ (numero1+numero2)+"<br>");
	document.write("Resta: "+ (numero1-numero2)+"<br>");
	document.write("Multiplicación: "+ (numero1*numero2)+"<br>");
	document.write("División: "+ (numero1/numero2)+"<br>");
	document.write("************************"+"<br>");
}

function calculadora(numero1, numero2, mostrar = false){

	if(mostrar==false){
	porConsola(numero1,numero2);
	}else{
	porPantalla(numero1,numero2);
	}
	return true;
}
//Invocar

/*
calculadora(10,5);


for(var i = 1; i<=10; i++){
	console.log("Operaciones con: "+ i
		);
	calculadora(i,i+1);
}
*/

calculadora(10,2);
calculadora(10,3,true);
calculadora(10,4,true);