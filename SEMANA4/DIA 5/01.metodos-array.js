
const alumnos = ["juan", "pedro", "maria", "jose", "luis"];

//for
for (let index = 0; index < alumnos.length; index++) {
    /*console.log(index,alumnos[index]);*/
}
//foreach

alumnos.forEach((alumno, index)=>{
    console.log(index,alumno,)})

//map
const nuevosAlumnos = alumnos.map((alumno, index)=>{
        /*return alumno + "" + index; es igual al de abajo*/
    /*return `el alumno se llama: ${alumno}`;*/
    return `${alumno} ${index}`
});

    /*console.log(nuevosAlumnos,);*/

    //filter

    const alumnosSinmaria = alumnos.filter((alumno,index)=>{
        /*return index !==4; con este se filtro por pisicion, pero abajo normal por nombre*/
        return alumno !== "maria";
    });
    /*console.log(alumnosSinmaria);*/

/**
 * opcion find
 */
    const alumnoEncontrado = alumnos.find((alumno,index) => {
return alumno ==="maria";
    });
    console.log(alumnoEncontrado);

/**
 * opcion
 * findIndex
 */
    const indexAlumno = alumnos.findIndex((alumno,index) => {
        return alumno === "jose";
    });
    console.log(indexAlumno);

/**
 * funcion some 
*/

const existeAlumno = alumnos.some((alumno)=>{
    return alumno === "luis";
})
console.log(existeAlumno);



    /**
     * caso resuelto nro 14
     */

    const focos = ["verde","rojo","blanco","blanco"]

    let focosBlancos = 0
    let focosVerdes = 0
    let focosRojos = 0

    const contarfocos = () => {
        for (let index = 0 ; index < focos.length; index ++ ){
            if (focos[index] === "blanco") {
                focosBlancos++;
            }
            if (focos[index] === "verde") {
                focosVerdes++;
            }
            if (focos[index] === "rojo") {
                focosRojos++;
            }
    }

    return {
        focosBlancos:focosBlancos,
        focosVerdes:focosVerdes,
        focosRojos:focosRojos,
    }
    };
     console.log(contarfocos())