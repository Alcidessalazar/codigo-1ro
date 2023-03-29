// UN OBJETO PUEDE TENER FUNCIONES COMO ATRIBUTOS

const vehiculo = {
    marca: ' audi',
    modelo: ' q5',
    mantenimientos:
        [
            {
                fecha: ' 05/05/23',
                kilometraje: 17000,
            },
            {

                fecha: ' 05/05/24',
                kilometraje: 27000,
            }
        ],

    imprimirMarcaYModelo: function () {
        console.log('this', this);
        console.log('marca', this.marca);
        console.log('modelo', this.modelo);
    }
};
console.log('vehiculo', vehiculo);
vehiculo.imprimirMarcaYModelo();

//NO COPIAR OBJETOS DE LA SIGUIENTE MANERA
const vehiculo2 = vehiculo;
vehiculo2.marca = 'q3';
console.log('vehiculo1', vehiculo);
console.log('vehiculo2', vehiculo2);


//FUNCION QUE CREA OBJETOS
function creadorDeVehiculos(pMarca = '', pModelo = '', Panio = 0, pMantenimientos = []) {
    const vehiculoGenerico = {
        marca: pMarca,
        modelo: pModelo,
        anio: Panio,
        mantenimientos: pMantenimientos
    };
    return vehiculoGenerico;
}
//FUNCION CREADORRA DE MANTENIMIENTOS CON LOS SIGUIENTES ATRIBUTOS
/**
 * FECHA: ''
 * KILOMETRAJE: 0
 * ACEITE: FALSE
 */

function mantenimiento(pFecha = '', pKilometraje = 0, pAceite = false) {
    return {
        fecha: pFecha,
        kilometraje: pKilometraje,
        aceite: pAceite
    };
}

const mazdaCX3 = creadorDeVehiculos('Mazda', 'CX3', 2023, [
    mantenimiento('05/05/23',15000,true),
    mantenimiento('05/05/24', 25000,true)
]);


// se le esta agregando primero a la funcion de creador los parametros para
//facilitar el ingreso de atributos para nuevos vehiculos por ejm pero todo en un codigo.
const bmwX4 = creadorDeVehiculos('BMW', 'X4', 2021, []);
const mercedesGLA450 = creadorDeVehiculos();
// se anula como comentario ya que arriba se coloca todo de uno mazdaCX3.anio = 2023;
//bmwX4.anio = 2024;
console.log('mazda', mazdaCX3);
console.log('bmw', bmwX4);
console.log('mercedes', mercedesGLA450);
