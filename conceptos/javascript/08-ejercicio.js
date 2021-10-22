let productos = [
    {
        nombre: "Audifonos",
        clave: 1,
        materiaPrima: 20,
    },
    {
        nombre: "Funda para movil",
        clave: 2,
        materiaPrima: 10,
    },
    {
        nombre: "USB",
        clave: 3,
        materiaPrima: 15,
    },
    {
        nombre: "Mouse Gamer",
        clave: 6,
        materiaPrima: 30,
    },
    {
        nombre: "Teclado",
        clave: 4,
        materiaPrima: 120,
    },
    {
        nombre: "Gráfica",
        clave: 5,
        materiaPrima: 200,
    },
];

function calcularGastosFabricacion(clave, costoMP) {
    if (clave === 2 || clave === 5) {
        return costoMP * 0.3;
    } else if (clave === 3 || clave === 6) {
        return costoMP * 0.35;
    } else {
        return costoMP * 0.28;
    }
}

function calcularManoObra(clave, costoMP) {
    if (clave === 3 || clave === 4) {
        return costoMP * 0.75; //se termina la función
    } else if (clave === 1 || clave === 5) {
        return costoMP * 0.8;
    } else {
        // se asume estas son claves 2 o 6
        return costoMP * 0.85;
    }
}

//PRINCIPAL
function calcularCostos(listaProductos) {
    let costoProd = 0;
    for (let i = 0; i < listaProductos.length; i++) {
        let costoMP = listaProductos[i].materiaPrima;
        let clave = listaProductos[i].clave;
        let costoMO = calcularManoObra(clave, costoMP);
        let costoGF = calcularGastosFabricacion(clave, costoMP);
        costoProd = costoMP + costoMO + costoGF;
    }
    let precioTotal = costoProd * 1.45;
    console.log(`El precio de venta total es ${precioTotal}`);
}

calcularCostos(productos);
