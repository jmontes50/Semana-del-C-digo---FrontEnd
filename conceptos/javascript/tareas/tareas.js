//creando referencias para los elementos que estan en el HTML
let inputTarea = document.getElementById("inputTarea");

let btnTarea = document.getElementById("btnTarea");

let divContenido = document.getElementById("contenedor");

// .innerHTML modifica el contenido HTML que tenga un elemento
// divContenido.innerHTML = "<h1>Título desde JS</h1>";

let tareas = []; //almacenar las tareas por hacer

//capturando eventos
//addEventListener("evento", function(){})
btnTarea.addEventListener("click", function () {
    // en un input, podemos capturar su contenido/valor actual con la propiedad .value
    // console.log(inputTarea.value);
    let nuevaTarea = {
        texto: inputTarea.value,
        fecha: new Date(), //fecha y hora actual, objeto
    };
    tareas.push(nuevaTarea); //agrega la nueva tarea
    console.table(tareas); //observamos que tareas tengo
    dibujarTareas(); //c/click ejecutamos dibujarTareas()
});

function dibujarTareas() {
    let htmlTareas = "";
    // item es c/items dentro de tarea
    tareas.forEach(function (item) {
        // transformar
        // + concatenar/unir texto
        htmlTareas = htmlTareas + `<p>${item.texto} - ${item.fecha.toLocaleDateString("es-PE")}</p>`;
    });
    divContenido.innerHTML = htmlTareas;
}
