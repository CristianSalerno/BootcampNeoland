//sacara por pantalla todos los pacientes de entre 18 y 25 años. Posteriormente que tenga la posibilidad de sacar aquellos que no la cumpla.

console.log('Filtro por edad')

var edadMin = prompt('Dime la edad minima')
var edadMax = prompt('dime la edad maxima')

function filtroPorEdad(pEdadMin, pEdadMax) {
    var listaFiltrada = new Array();
    var ListaSinFiltrar = new Array();

    for (paciente of listaDePacientes) {
        if (paciente.edad >= pEdadMin && paciente.edad <= pEdadMax) {
            listaFiltrada.push(paciente)

        } else
            ListaSinFiltrar.push(paciente)
    }
    console.log(listaFiltrada)
}

filtroPorEdad(edadMin, edadMax)

//sacar por pantalla todos los pacientes que tengan gripe.

console.log('Filtro por enfermedad')

var filtrarPorDiagnostico = prompt('inserte el diagnostico por el cual filtrar');

function filtroPorEnfermedad(pDiagnostico) {
    var listaFiltrada = new Array();
    var ListaSinFiltrar = new Array();
    for (paciente of listaDePacientes) {
        if (paciente.diagnostico.toLowerCase() == pDiagnostico) {
            listaFiltrada.push(paciente)

        } else
            ListaSinFiltrar.push(paciente);
    }
    console.log(listaFiltrada)
}
filtroPorEnfermedad(filtrarPorDiagnostico)

//sacar por pantalla todos los pacientes cuyo numero de la seguridad social acabe en 0.
console.log('filtro por Numero de seg social acabado en 0')
var filtroSecSoc = prompt('indique ultimo numero de la seg social')

function filtrarSecSoc(pNumero) {
    var listaFiltrada = new Array();
    var listaSinFiltrar = new Array();
    for (paciente of listaDePacientes) {
        if (paciente.numeroSegSoc[paciente.numeroSegSoc.length - 1] == pNumero) {
            listaFiltrada.push(paciente);
        } else
            listaSinFiltrar.push(paciente)
    }
    console.log(listaFiltrada)
}
filtrarSecSoc(filtroSecSoc)
// sacar por pantalla todos los pacientes que se apelliden Pérez

console.log('filtro Por Apellido')
var filtrarPorApellido = prompt('Dime el apellido a filtrar')

function filtrarApellido(pApellido) {
    var listaFiltrada = new Array();
    var ListaSinFiltrar = new Array();
    for (paciente of listaDePacientes) {
        if (paciente.apellido.toLowerCase() == pApellido) {
            listaFiltrada.push(paciente)

        } else
            ListaSinFiltrar.push(paciente)
    }
    console.log(listaFiltrada)
}
filtrarApellido(filtrarPorApellido)

// sacar por pantalla todos los pacientes que tengan como especialista asignado medico de medicina general


console.log('Filtro por medico asignado')

var filtrarEspecialidad = prompt('indique especialidad (general,etc)')

function filtroEspecialidad(pEspecialidad) {
    var listaFiltrada = new Array();
    var listaSinFiltrar = new Array();
    for (const paciente of listaDePacientes) {
        for (pa of paciente.especialistas) {
            if (pa.toLowerCase() == pEspecialidad) {
                listaFiltrada.push(paciente);
            } else {
                listaSinFiltrar.push(paciente);
            }
        }
    }
    console.log(listaFiltrada)
}

filtroEspecialidad(filtrarEspecialidad)


//sacar por pantalla aquellos pacientes menores de 20 años que tengan gripe.

console.log('Filtro por diagnostico menores de 20 y gripe')
var edadIndicada = prompt('indique Edad')
var enfermedad = prompt('indique enfermedad')

function filtrarEdadEnfermedad(pEdad, pEnfermedad) {
    var listaFiltrada = new Array();
    var ListaSinFiltrar = new Array();
    for (paciente of listaDePacientes) {
        if (paciente.edad <= pEdad && paciente.diagnostico.toLowerCase() == pEnfermedad) {
            listaFiltrada.push(paciente);

        } else
            ListaSinFiltrar.push(paciente);
    }
    console.log(listaFiltrada)
}

filtrarEdadEnfermedad(edadIndicada, enfermedad)