let edad = 20;
let disfrazado = false;
let comorbolidad = true;

// if (edad > 18) {
//     console.log("Puedes Vacunarte");
// } else {
//     console.log("Espera por favor");
// }

// if (edad > 60) {
//     console.log("Vacunate ahora - Pfizer");
// } else if (edad > 18) {
//     //pueden ser varios else if
//     console.log("Vacunate ahora - Sinopharm");
// } else {
//     console.log("Espera por favor");
// }

if (edad > 60 || comorbolidad === true) {
    console.log("Vacunate ahora - Pfizer");
} else if (edad > 18 && disfrazado === true) {
    console.log("Vacunate con Sinopharm y entras al concurso");
} else if (edad > 18) {
    console.log("Vacunate ahora - Sinopharm");
} else {
    console.log("Espera por favor");
}
