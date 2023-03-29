// OBJETOS
/*const persona = ['jorge', 20 , 'casado'];
const persona = ['yuli', 34, 'casado', ' ing industrial', ['blanco', 'verde']];
*/
const persona = {
    nombre: 'Yuli',
    dni: '12345678',
    telefono: '990779443',
    idiomas: ['Espanol', 'Ingles', 'Frances'],
};
console.log('telefono',persona.telefono);
console.log('idiomas',persona.idiomas);

//INYECTANDO UN NUEVO IDIOMA
persona.idiomas.push('aymara');
console.log('persona actualizada',persona);

//MODIFICANDO EL TELEFONO
persona.telefono= '999999999';
console.log('persona actualizada', persona);

//AGREGANDO UN NUEVO ATRIBUTO A LA PERSONA (no se recomienda agregar nuevos) atributos a un objeto
persona.direccion = {};
persona.direccion.calle = 'Calle Lima';
persona.direccion.distrito = 'Miraflores';
persona.direccion.ciudad = 'Arequipa';
console.log('persona actualizada', persona);

//AGREGANDO UN ATRIBUTO A LA PERSONA (FORMA 2) - VAN CON PUNTOS YA NO CON IGUAL
persona.estudios = {
    primaria: 'Escuela de los Andes',
    secundaria: 'Colegio Nuestra Senora de Fatima',
    Superior: ' UNMSM'
};
console.log('persona actualizada', persona);