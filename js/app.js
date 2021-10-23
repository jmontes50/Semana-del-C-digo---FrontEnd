let btnPrueba = document.getElementById("btnPrueba");

btnPrueba.addEventListener("click", function () {
    // buscarDeezer("x dinero");
});

async function buscarDeezer(busqueda) {
    let configuracion = {
        method: "GET",
        // headers, rapid-api, privado
        headers: {
            //-key es un token de autenticación
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "cdc9f7f226msh8605ce5e8a80f6dp10989ejsnd58bb6c5f95e",
        },
    };

    try {
        //fetch(url, configuracion)
        let rpta = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${busqueda}`, configuracion);
        const datos = await rpta.json(); //convierte de TEXTO(json) a un Objeto de JS
        console.table(datos.data);
    } catch (error) {
        console.log(error);
    }
}
