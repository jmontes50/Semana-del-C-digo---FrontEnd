//creando referencias para los elementos que estan en el HTML
let inputTarea = document.getElementById("inputTarea");

let btnTarea = document.getElementById("btnTarea");

let divContenido = document.getElementById("contenedor");

// .innerHTML modifica el contenido HTML que tenga un elemento
divContenido.innerHTML = "<h1>Título desde JS</h1>";

inputTarea.value = "Comprar leche";

//capturando eventos
//addEventListener("evento", function(){})
btnTarea.addEventListener("click", function () {
    console.log("Me has hecho click!!");
    // en un input, podemos capturar su contenido/valor actual con la propiedad .value
    console.log(inputTarea.value);
});
