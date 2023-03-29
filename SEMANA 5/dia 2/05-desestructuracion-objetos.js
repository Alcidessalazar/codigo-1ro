const producto = {
    nombre:"iphone 14 pro",
    precio: 5500,
    codigo: 5,
    stock: 80,
    colores: ['negro', 'azul','rojo']
};

/**
 * una forma correcta de copiar o clonar
 * un objeto seria la siguiente
 */

const producto2 = {...producto};

/**
 * desestructurando atributos
 */

const {codigo, precio,...rest} = producto;
console.log('codigo', codigo);
console.log('precio', precio);
console.log('rest', rest);

/**
 * desestructurando atributos con nuevos nombres
 * de variables
 */

const{precio : precioProducto} = producto;
console.log('precio producto', precioProducto);

//ejemplo
//const random = (min, max) => Math.random()*(max-min)+min;
//random(20,80);
const random = (atributos) => {
    const {min, max} = atributos;
    return Math.random() * (max - min) +min;
};

let maxYMin = {
max:200,
min:100
};
console.log(random(maxYMin));
//console.log(random({max: 300, min: 220}));

