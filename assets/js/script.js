
/** Operaciones aritmeticas
 */
alert("a continuacion se solicitara ingresar dos numeros, por favor que sean ambos mayores a 0 y diferentes entre si");
let a = + (prompt("ingresa primer numero"));
while(a <= 0){
    a = + ( prompt ("porfavor ingresar un numero mayor a 0"));
}
let b = + ( + prompt("ingresa segundo numero"));
while(b<=0 || b==a){
    b =   + prompt("porfavor ingresar un numero mayor a 0 y diferente de a");
}

alert("la suma de ambos numeros es: " + (a+b) + " la resta de ambos numeros es: " + (a-b) + " la multiplicacion de ambos numeros es: " + (a/b) +
 " la division de ambos numeros es: " + (a*b) + " el modulo de ambos numeros es: " + (a%b));

/** Transformar grados Celsius a Fahrenheit y Kelvin */
 let C = + prompt("Ingrese una temperatura en celsius");

 let kelvin = C + 273.15;
 let fahrenheit = (C * (9/5)+ 32);

 alert("la temperatura ingresada en kelvin es: " + kelvin + " y la temperatura ingresada en fahrenheit es: " + fahrenheit);

 let input = +prompt("Haga el favor de ingresar un numero de dias");

/*
 * Transformar Dias en anios, semanas y dias
 *  
 */



let anios = Math.floor(input/365);
let semanas = Math.floor((input%365)/7);
let dias = Math.floor(((input%365)%7));

alert(" Anios: " + anios + " Semanas: " + semanas + " dias: " + dias);
 

/** Suma y promedio de los numeros ingresados*/

alert("A continuacion se pediran 5 numeros");
a = +prompt("ingresar primer numero");
b = +prompt("ingresar segundo numero");
let c = +prompt("ingresar tercer numero");
let d = +prompt("ingresar cuarto numero");
let e = +prompt("ingresar quinto numero");

/**sumar numeros */

let sumatoria = a+b+c+d+e;
let promedio = sumatoria/5;

alert("la suma de los numeros es " + sumatoria);
alert("el promedio de los numeros es: " + promedio);