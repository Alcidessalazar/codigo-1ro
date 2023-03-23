for(let i = 0; i < 10; i++) {
    console.log(i);
}
/**
 * tabla de multiplicar de un numero n
 * 1-12
 */

const n = 7;

for (let i = 1; i <= 12; i++) {
    console.log(n + 'x' + i + '=' + n * i);
}

/**
 * Ejercicio 
 * obtener la multiplicacion de 2 numero a*b
 * no usar el simbolo de multiplicacion *
 * usar solamente sumas
 * usar el ciclo for 
 */

const n1 = 5;
const n2 = 9;
let suma = 0;
for (let i = 1 ; i <= n1; i++) {
    suma = suma + n2;
}

console.log ('resultado' + suma);

/**
 * un usuario engresara 5 numeros , de todos ellos
 * se desean saber
 * cantidad de nros positivos
 * cantidad de nros negativos
 * cantidad de nros iguales a cero
 */

let pos = 0;
let neg = 0;
let cer = 0;
let ingreso = undefined;

for(let  i = 0; i <=4; i++){
    ingreso = + prompt (' ingreso un numero ');
    if (ingreso > 0){
        pos = pos + 1;
    } else if (ingreso === 0) {
        cer = cer + 1;
    } else {
        neg = neg + 1;
    }
}

console.log ('cantidad de positivos', pos);
console.log ('cantidad de negativos', neg);
console.log ('cantidad de ceros', cer);

