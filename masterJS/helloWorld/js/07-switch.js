'use strict'

//SWITCH.
var edad= 18;
var imprime = "";

switch(edad){
	case 18: imprime="Acabas de cumplir la mayoria de edad"; break;
	case 28: imprime ="Ya eres un adulto"; break;
	case 40: imprime ="Ojo piojo"; break;
	case 70: imprime ="Eres un anciano"; break;
	default: imprime="Tu edad es neutral"; break;
}
console.log(imprime);