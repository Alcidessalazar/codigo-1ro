console.log(promedioDosnumeros (2,4));

function promedioDosnumeros(num1,num2) {
    return (num1 + num2) / 2;    
};


const calcularEdad = (anioNacimiento) => {
    return 2023 - anioNacimiento;
};
/*console.log(calcularEdad(2000));*/

/**
 * otra manera de sacar lo mismo de arriba pero reduciendo o ahorrando codigo 
 */
const calcularEdad2 = (anioNacimiento) => 2023 - anioNacimiento;


const sumarNNumeros  = (... numeros) => {
    console.log(numeros);
    let suma = 0;
    for(let i =0; i < numeros.length; i++) {
        suma += numeros[i];
        //suma = suma + numero[i];
    }
    return suma;
}
console.log(sumarNNumeros(2,4));

const concatenaCadenas = (...cadenas) =>{
    return cadenas.join("");
}
console.log(concatenaCadenas("hola", "mundo" ,"js" ,"2023"));


/**
 * ternarios
 */

const ternarios = (num1,num2) => {
    return num1 !== num2 ? "son diferentes" : "son iguales"
};
console.log(ternarios(13, 27));

const ternarios2 = (acepto) => {
    return acepto? "Acepto" : "No acepto";
};
console.log(ternarios2(true));

/**
 * 
 */
//const ternarios2 = (acepto) => {
  //  return acepto ?}


