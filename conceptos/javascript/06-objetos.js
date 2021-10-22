let mascota = {
    nombre: "Backus",
    raza: "Poddle",
    edad: 13,
    hobbies: ["Jugar", "Dormir", "Perseguir gatos"],
    comer: function () {
        //métodos
        console.log("ñam ñam ñam");
    },
};

// console.log(mascota);
// // console.table(mascota);

// //objeto.propiedad

// console.log(mascota.nombre);
// console.log(mascota.edad);
// console.log(mascota.hobbies[2]);

// mascota.comer();

let albumMusical = {
    nombre: "After Hours",
    fechaLanzamiento: "20/03/2020",
    generos: ["Dream Pop", "Drum and bass"],
    canciones: [
        {
            titulo: "Blinding Lights",
            duracion: 3.22,
            autores: ["Abel TesFaye", "Ahmad Balshe", "Jason Quenneville"],
        },
        {
            titulo: "In your eyes",
            duracion: 3.57,
            autores: ["The weeknd", "Ahmad Balshe", "Max Martín"],
        },
    ],
};

console.log(albumMusical.canciones[1].autores[2]);
