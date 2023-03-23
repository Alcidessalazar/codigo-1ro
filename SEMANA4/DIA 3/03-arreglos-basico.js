const nro = 2;
const nombre = 'asd';
const casado = true;
const libros = ['L1', 'L2', 'L3'];
console.log(libros);
console.log(libros[2]);

const notas = [7, 5, 3, 13, 6, 12];
console.log('notas', notas);
console.log('suma de la 1ra y la ultima', notas[0] + notas[5]);

// reasignacion de un elemento
notas[4] = 20;
console.log('notas nuevas', notas);

// propiedades
console.log('cantidad de libros');
console.log(libros.length);

console.log('cantidad de notas');
console.log(notas.length)

libros.push('aves sin nido');
console.log(libros);

//recorriendo un arreglo
let acumulador = 0;
for(let i = 0; i < notas.length; i++) {
    acumulador = acumulador + notas[i];
}
console.log('acumulador', acumulador);

// ejercicios:
// cuantos numero del arreglo de notas son pares?
//cuantos numeros del arreglo de notas son impares?

let pares = 0;
let impares = 0;
for(let i = 0; i < notas.length; i++) {
    if (notas[i]%2 ===0){
        pares++;
    } else {
        impares++;
    }
}
console.log('total pares', pares);
console.log('total impares', impares);

//ejercicio mejorado reto
// al enunciado anterior, imprimir tambien 
//que numeros son pares y que numeros son impares
//ojo imprimir al final, no en cada iteracion.