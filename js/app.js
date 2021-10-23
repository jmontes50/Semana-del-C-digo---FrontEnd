let btnPrueba = document.getElementById("btnPrueba");

btnPrueba.addEventListener("click", function () {
    console.log("Click!");
});

async function buscarDeezer(busqueda) {
    let configuracion = {
        method: "GET",
        // headers, rapid-api, privado
        headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "f6fd461a61mshff38733c3e43515p18e191jsn9e41ff4bce99",
        },
    };

    try {
        //fetch(url, configuracion)
        let rpta = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${busqueda}`);
    } catch (error) {}
}
