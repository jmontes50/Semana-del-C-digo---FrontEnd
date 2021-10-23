let btnPrueba = document.getElementById("btnPrueba");

let modal = document.getElementById("miModal");

let cerrar = document.getElementById("btnCerrar");

let divCanciones = document.getElementById("divCanciones");

btnPrueba.addEventListener("click", function () {
    // buscarDeezer("x dinero");
    // elementosHTML tiene una propiedad .style
    modal.style.display = "block";
});

btnCerrar.addEventListener("click", function () {
    modal.style.display = "none";
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

function dibujarCanciones(arregloCanciones) {
    let htmlCanciones = "";

    //RR: forEach obtiene cada elemento del arregloCanciones 1 x 1
    arregloCanciones.forEach(function (cancion) {
        htmlCanciones =
            htmlCanciones +
            `<div class="cancion-container">
			<div class="cancion">
				<div class="cancion-img">
					<img src="" alt="">
				</div>
				<div class="cancion-content">
					<h3></h3>
					<p></p>
					<audio controls>
						<source src="">
					</audio>
				</div>
			</div>
		</div>`;
    });
}
