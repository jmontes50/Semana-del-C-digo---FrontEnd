function buscarAlumno(nombre) {
    let alumnosBD = ["Walter", "Wilson", "Cesar", "Gabriela", "Karen", "Felipe"];

    return new Promise(function (resolve, reject) {
        // tarea que va a demorar, hornear la torta, buscar en alumnosBD
        setTimeout(function () {
            for (let i = 0; i < alumnosBD.length; i++) {
                if (alumnosBD[i] === nombre) {
                    resolve("Alumno encontrado"); //éxito
                    return;
                }
            }
            //si terminaste de ejecutar el for y no encontraste
            reject("No se encuentra en el registro"); //fallamos
        }, 5000);
    });
}

//Vamos a tener que indicar que la tarea que se va a ejecutar en alumno va a demorar

// console.log(buscarAlumno());

async function iniciarBusqueda() {
    try {
        //intento esto
        let rpta = await buscarAlumno("Daysi"); //Chepi, espera, que esto todavia se esta ejecutando
        //await registrarAlumno()
        //await matricularAlumno()
        console.log(rpta);
    } catch (error) {
        //y si alguno sale mal
        //me pasas la voz del error
        console.log(error);
    }
}

iniciarBusqueda();
