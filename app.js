//Ejercicios de String y Números
/*
1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       '
3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
4 - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
5 - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
 - El número redondeado a su mayor valor
 - El número redondeado a su menor valor
 - El número original multiplicado por 3
 - El resto del número dividido por 2
*/

// 1 
let miNombre = prompt("Ingresa tu nombre: ");
let miApellido = prompt("Ingresa tu apellido: ");

console.log(`Bienvenido al evento ${miNombre} ${miApellido}`);

// 2
let texto = "              Había una vez un pequeño programador junior       ";
let textoSinEspacios = texto.trim();

console.log(textoSinEspacios);

// 3
let nombreMayuscula = miNombre.toUpperCase();
let apellidoMayuscula = miApellido.toUpperCase();

console.log(`${nombreMayuscula} ${apellidoMayuscula}`);

// 4
let textoUsuario = prompt("Ingrese un texto: ");

console.log(`${textoUsuario.toUpperCase()} tiene ${textoUsuario.length} caracteres`);

// 5
let numeroDecimal = prompt("Ingrese un numero decimal: ");

console.log(`El numero redondeado a su mayor valor: ${Math.ceil(numeroDecimal)}`);
console.log(`El numer redondeado a su menor valor: ${Math.floor(numeroDecimal)}`);

let multiplicacion = 0;
let resto = 0;

multiplicacion = numeroDecimal * 3;
resto = numeroDecimal % 2;

console.log(`El numero ingresado multiplicado por 3 es: ${multiplicacion}`);
console.log(`El resto del numero ingresado por 2 es: ${resto}`);


