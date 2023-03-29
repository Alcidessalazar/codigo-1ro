//PROPIEDADES DE LOS STRINGS

let frase = 'Los programadores crean lo que las personas suenan.';
console.log(frase);

/**
 * LENGTH
 * retorna la cantidad de caracteres de un string
 */
console.log('length', frase.length);

/**
 * tolowerCase()
 * retorna el string en minusculas
 */
console.log('tolowerCase', frase.toLowerCase());

/**
 * tuUpperCase ()
 * retorna el string en mayusculas
*/
console.log('toUpperCase', frase.toUpperCase());

/**
 * trim()
 * retorna el string sin espacios en blanco a los extremos
 * en caso que el string tuviera dichos espacios
 */

console.log('trim', "    hola     mundo   ". trim() );

/**
 * ? parametro opcional
 * substr(comienzo, extension)
 * devuelve una subcadena desde la posicion "comienzo"
 * incluyendo "extension" caracteres en adelante
 * si no se manda la extension, el retorno sera desde
 * la posicion "comienzo" hasta el final 
 */

console.log('frase desde la posicion 9 por 4 caracteres');
console.log(frase.substr(9,4));

/**
 * ? parametro opcional
 * substr(comienzo, final)
 * devuelve una subcadena desde la posicion "comienzo"
 * Hasta la posicion final 
 */

console.log('frase desde la posicion 9 hasta la posicion 13');
console.log(frase.substring(9,13));

/**
 * startsWith(texto)
 * devuelve true si el string inicia con el parametro
 * "texto"
 */
console.log(frase.startsWith('Los pro'));

/**
 * endsWith(texto)
 * devuelve true si el string finaliza con el parametro
 * "texto"
 */
console.log(frase.endsWith('suenan.'));

/**
 * includes(texto,posicion?)
 * devuelve true si el string contiene el parametro "texto"
 * desde la posicion "posicion"; si este ult parametro 
 * no se ha establecido , el texto es buscado desde el inicio de la cadena
 */
console.log(frase.includes('crean', 19));

/**
 * indexof(texto, posicion?)
 * retorna la posicion en la que inicia el texto "texto"
 * dentro del string a partir de la posicion "posicion"
 * si este ultimo parametro no se ha establecido
 * la busqueda se realiza desde el inicio de la cadena
 */
console.log(frase.indexOf('crean'));