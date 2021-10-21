let mascota = {
    nombre: "Backus",
    raza: "Poddle",
    edad: 13,
    hobbies: ["Jugar", "Dormir", "Perseguir gatos"],
    comer: function () {
        console.log("ñam ñam ñam");
    },
};

console.log(mascota);
// console.table(mascota);

//objeto.propiedad

console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.hobbies[2]);

mascota.comer();
