/**
 * la clase Math sirve para manipular numeros y
 * funciones matematicas
 */

/**
 * Math.sqrt(numero)
 * retorna la raiz cuadrada del parametro numero
 */

console.log('rais de 49', Math.sqrt(49));

/**
 * Math.pow(base.potencia)
 * retorna un numero 'base' elevado a la "potencia"
 */
console.log('raiz cubica de 27', Math.pow(27, 1 / 3));

/**
 * Math.round(numero)
 * retorna el redondeo de un numero
 */
console.log('redondeo de 9.86', Math.round(9.86));

/**
 * Math.floor(numero)
 * retorna el piso de un numero
 * ejm: el piso de 9.99 es 9
 */
console.log('piso de 9.99', Math.floor(9.99));

/**
 * Math.ceil(numero)
 * retorna el techo de un numero
 * ejm: el techo de 10.01 es 11
 */
console.log('techo 10.01', Math.ceil(10.01));

/**
 * Math.random()
 * retorna un numero random entre 0 y 1
 */
console.log('random entre 0 y 1', Math.random());

/**
 * Artificio para generar un numero random entre min y max
 * Math.random() * (max-min)+min;
 */
console.log('random entre 50 y 850', Math.random() * (850 - 50) + 50);

const random = (min, max) => Math.random() * (max-min)+min;
console.log(random(20,99).toFixed(2));


