function sumar(pNum1, pNum2) {
    return pNum1 + pNum2
}

var suma2 = (pNum1, pNum2) => {
    return pNum1 + pNum2
}


//Ambito variables

const nombre = 'cristian';
//cambio
nombre = 'maria';
// no se puede realizar.


//Caso 2 obj 
const persona = {
    nombre: 'juan',
    apellidos: 'castro'
};

//solo modifica una propiedad del objeto, no parte el enlace. Si puede realizarse. 
persona.nombre = 'carlos';
//Esto no se puede modificar.
persona = {
    nombre: 'eduardo',
    apellidos: 'dato'
}

const numeros = [1, 2, 3, 4, 5, 6];
numeros.push(40); // No modificio el array.

numeros = []; //NO SE PUEDE .