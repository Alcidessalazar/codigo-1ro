// Ejercicio.
/**
 * Dados 3 numeros entero, evaluar el mayor de todos
*/

const n1 = 40;
const n2 = 20;
const n3 = 50;

/*if ((n1 > n2) && (n1 > n3)){
console.log (n1, 'es el mayor ');
}
if ((n2 > n1) && (n2 > n3)){
console.log (n2, 'es el mayor ');
}
if ((n3 > n1) && (n3 > n2)){
    console.log (n3, 'es el mayor ');}
*/

if (n1 > n2) {
    if (n1 > n3) {
        console.log('el mayor es', n1);
    } else {
        console.log('El mayor es', n3);
    }
} else {
    if (n2 > n3) {
        console.log('El mayor es', n2);
    } else {
        console.log('El mayor es', n3);
    }
}

/**
 * Ejercicio
 * dado un ao , ejm : 2020, evaluar si ese ao es visciesto
 * Es viciesto  si:
 * es divisible entre 4 y no entre 100
 * o que es divisible entre 400
 */
/*if ((n /4) && (n%100 != 0) )*/
const anio = 2023;
if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0){
    console.log(anio,'es bisiesto');
} else {
    consoles.log(anio,'no es bisiesto');
}