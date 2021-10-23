async function obtenerUsuarios() {
    try {
        // fetch(url) me permite hacer peticiones con JS
        let respuesta = await fetch("https://reqres.in/api/users?page=2");
        // console.log(respuesta);//texto
        //.json() convierte los datos de la respuesta de texto a JS
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}

obtenerUsuarios();
