// función que me devuelva el área de un triangulo

let constante = 2;

function calcularArea(base, altura) {
    let area = (base * altura) / constante;
    return area; //opcional
}

// invocar-llamar
console.log(calcularArea(100, 50));
