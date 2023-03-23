/**
 * 
 * 
 * ejercicio 3.6
 */
/*
const nroPersonas = 50;
let costoPlato = 0;
let total = 0;

if (nroPersonas > 200 && nroPersonas <= 300) {
    costoPlato = 85;
} else {
    if (nroPersonas > 300) {
        costoPlato = 75;
    } else {
        costoPlato = 95;
    }
}

total = costoPlato * nroPersonas;
console.log('total a pagar para' + nroPersonas + ' personas:' + total);

/**
 * ejercicio 3.8
 */
/*
console.log('----ejercicio 3.8---');

const nroAlumnos = 200;
let costoBus = 0;

if (nroAlumnos >= 100) {
    costoBus = nroAlumnos * 65;
} else {

    if (nroAlumnos >= 50) {
        costoBus = nroAlumnos * 70;
    } else {
        if (nroAlumnos >= 30) {
            costoBus = nroAlumnos * 95;
        } else {
            costoBus = 4000;
        }
    }
}

console.log('total a pagar' + nroAlumnos + ':S/' + costoBus);
/**
 *  tarea 3.4
 */
/*const  nHoras = 6;
const n ; 
if (nHoras > 2) {

}*/

/**
 * ejercicio 3.9
 */
console.log('----ejercicio 3.9----')
const planA = 1200;
const planB = 950;
let totalPagar = 0;
const planElegido = prompt('que plan desea? a (plan A) O b (plan B)');
const alcohol =  confirm('toma alcohol?');
const lentes = confirm('usted usa lentes?');
const enfermedad = confirm('padese usted de alguna enfermedad?');
const edad = +prompt('ingrese su edad');
let precioBase = 0;

if(planElegido === 'a'){
    totalPagar = planA;
} else {
    totalPagar = planB;
}

if (alcohol){
    totalPagar = totalPagar + 0.1 * precioBase;
}
if (lentes){
    totalPagar = totalPagar + 0.05 * precioBase;
}

if (enfermedad){
    totalPagar = totalPagar + 0.05 * precioBase;
}

if (edad >40){
    totalPagar = totalPagar + 0.20 * precioBase;
} else {
    totalPagar = totalPagar + 0.1 * precioBase;
}

console.log('su cuenta total:' + totalPagar + 'soles');