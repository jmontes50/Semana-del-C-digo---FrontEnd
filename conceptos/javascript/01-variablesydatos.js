console.log("Hola Mundo");

// variable
// string - texto
let nombre = "Jorge";

console.log(nombre);

// numero - number
let edad = 31;

console.log(edad);

// Boolean - Booleano
let meQuiere = false; //true o false

console.log(meQuiere);

//cambiar de tipo de dato
edad = "treinta y uno";

console.log(typeof edad);
//UNA VARIABLE VA A PODER REFERENCIAR CASI CUALQUIER COSA EN JS

let nota;
// undefined, no esta definido
console.log(nota);

let nulo = null; //deberia haber algo pero no esta

console.log(nulo);

//Operaciones Aritméticas
console.log("----Operaciones Aritméticas----");

let a = 100;
let b = 4;

let suma = a + b;
console.log("Suma", suma);

let resta = a - b;
console.log("Resta", resta);

let Multiplicacion = a * b;
console.log("Multiplicación", Multiplicacion);

let Division = a / b;
console.log("División", Division);

let residuo = 105 % 4;
console.log("Residuo", residuo);

console.log("----Concatenación de Texto----");

// Template String - Template Literal
let perro = "Backus";
let edadPerro = 13;

// backtick
// ${variable} , puedo llamar al valor de esa variable
let oracion = `Mi perro se llama ${perro} y tiene de edad ${edadPerro} años`;

console.log(oracion);
