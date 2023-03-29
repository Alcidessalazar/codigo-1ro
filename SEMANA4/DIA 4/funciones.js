// una funcion es un conjunto de soluciones para poder realizar tareas

function nombreDeLaFuncion() {
    //una vez declarada mi funcion todo el codigo que haga dentro de esta 
    //solo se va a ejecutarse cuando se llame la funcion
    console.log("mi primera funcion");
    alert("mi primera funcion");
}

//nombreDelaFuncion()

const sumar = (numero1, numero2) => {
    const suma = numero1 + numero2;
    console.log("resultado", suma);
}

sumar(100, 20);
//exiten 3 tipos de funciones - declarativa - expresiva o anonima y arrow funcion o funcion flecha
//anteponemos la palabra funcion

function suma(a, b, c) {
    return a + b + c
}

console.log(suma(10, 10, 10))

// funcion anonima o expresiva


let suma2 = function (a, b) {
    return a + b
}
console.log(suma2(20, 10))

//arrow funcion

const suma3 = (x, y) => {
    return x + y
}
console.log(suma3(20, 10))



//funcion saludar al alumno

const saludar = (nombre, apellido) => {
    //template string
    return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`
};
console.log(saludar("elmer", "salazar"));

//----------------

const mostrarNombre = () => {

    let elementoNombre = document.getElementById("nombreUsuario");
    let title = document.getElementById("reemplazo");
    let mensaje = "tu te llamas" + elementoNombre.value;

    title.textContent = mensaje;

}

//-------------------------

const comenzarAlarma = () => {
    setTimeout(tiempoCumplido, 1000 * 3);

}
const tiempoCumplido = () => {
    alert("se acabo el tiempo")

}
// ejemplo 2

let elementoSegundos = document.getElementById("tiempoElegido");
let elementoTextoAlarma = document.getElementById("textoAlarma");

const comenzarTiempo = () => {
    setTimeout(tiempoCumplido2, 1000 * elementoSegundos.value)
}
const tiempoCumplido2 = () => {
    elementoTextoAlarma.textContent = "ENCENDIDO";
    elementoTextoAlarma.style.color = "green";

}