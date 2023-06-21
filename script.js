function borrar() {
    document.getElementById("resultado").innerHTML = ""
}

function calcular() {
    // recuperar los valores de la página
    // sumarlos
    // agregarlos en la página en el lugar adecuado
    const operador_1 = document.getElementById("op1").value;
    const operador_2 = document.getElementById("op2").value;
    const resultado = document.getElementById("resultado");

    const operador = document.getElementById("operador").value;
    switch (operador) {
        case '+':
            resultado.innerHTML = ~~operador_1 + ~~operador_2;
            break;
        case '-':
            resultado.innerHTML = ~~operador_1 - ~~operador_2;
            break;
        case '*':
            resultado.innerHTML = ~~operador_1 * ~~operador_2;
            break;
        case '/':
            resultado.innerHTML = ~~operador_1 / ~~operador_2;
            break;
        case '//':
            resultado.innerHTML = Math.trunc(~~operador_1 / ~~operador_2);
            break;
        case '**':
            resultado.innerHTML = Math.pow(~~operador_1, ~~operador_2);
            break;
        case '%':
            resultado.innerHTML = ~~operador_1 % ~~operador_2;
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }


}
