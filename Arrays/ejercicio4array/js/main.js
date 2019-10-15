/* var listaDePacientes = [
    paciente1 = {
        'id': 1,
        'nombre': 'Juan',
        'apellido': 'Pérez',
        'diagnostico': 'Fiebre',
        'edad': 37,
        'numeroSegSoc': 'A374132941',
        'especialistas': ['otorrino', 'traumatologo', 'general']
    }, */

//el ejercicio vale con que se resuelva con consola.

//El programa va a realizar las siguiente funcionalidades.

//sacara por pantalla todos los pacientes de entre 18 y 25 años. Posteriormente que tenga la posibilidad de sacar aquellos que no la cumpla.

function filtrarPorEdad(pListaPacientes, pEdadMinima, pEdadMaxima, pDonde = 'dentro') {
    var listaFiltrada = new Array();

    listaFiltrada = pListaPacientes.filter(function (paciente) {
        if (pDonde == 'dentro') {
            return (paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima)
        } else {
            return (paciente.edad < pEdadMinima || paciente.edad > pEdadMaxima)
        }
    })

    return listaFiltrada;
}

//sacar por pantalla todos los pacientes que tengan gripe.

function filtrarPorDiagnostico(pListaPacientes, pDiagnostico) {
    var listaFiltrada = new Array()
    for (paciente of pListaPacientes) {
        if (paciente.diagnostico == pDiagnostico) {
            listaFiltrada.push(paciente)
        }
    }

    return listaFiltrada
}

//sacar por pantalla todos los pacientes cuyo numero de la seguridad social acabe en 0.


function filtrarSSGG(pListaPacientes, pDigito) {
    var listaFiltrada = new Array();
    listaFiltrada = pListaPacientes.filter(paciente => {
        var longitud = paciente.numeroSegSoc.length;
        var ultimoDig = paciente.numeroSegSoc[longitud - 1]
        return (ultimoDig == pDigito)
    })
    /* console.log(listaFiltrada) */
    return listaFiltrada;

}

/* filtrarSSGG(listaDePacientes, 0); */

// sacar por pantalla todos los pacientes que se apelliden Pérez

function filtrarPorApellido(pListaPacientes, pApellido) {
    var listaFiltrada = new Array()
    for (paciente of pListaPacientes) {
        if (paciente.apellido == pApellido) {
            listaFiltrada.push(paciente)
        }
    }

    return listaFiltrada
}

// sacar por pantalla todos los pacientes que tengan como especialista asignado medico de medicina general

//Metodo HADOOOOOOKEN, funciona.
/* function filtrarPorEspecialista(pListaPacientes, pEspecialista) {
    listaFiltrada = new Array()

    for (paciente of pListaPacientes) {
        for (especialista of paciente.especialistas) {
            if (especialista == pEspecialista) {
                listaFiltrada.push(paciente);
            }
        }
    }
    return listaFiltrada;
} */

//Buenas practicas :) 
function filtrarPorEspecialista(pListaPacientes, pEspecialista) {
    var listaFiltrada = new Array();
    var listaFiltrada = pListaPacientes.filter(paciente => paciente.especialistas.includes(pEspecialista))
    return listaFiltrada;
}


//sacar por pantalla aquellos pacientes menores de 20 años que tengan gripe.


var listaFiltradaFinal = filtrarPorEdad(filtrarPorDiagnostico(listaDePacientes, 'Gripe'), 0, 20)



//sacar por pantalla aquellos pacientes menoes de 20 años y que tengan gripe


function filtrarPorEdadDiagnostico(pListaPacientes, pDiagnostico, pEdad) {
    var listaFiltrada = new Array()
    for (paciente of pListaPacientes) {
        if (paciente.diagnostico == pDiagnostico && paciente.edad <= pEdad) {
            listaFiltrada.push(paciente)
        }
    }
    return listaFiltrada
}


filtrarPorEdadDiagnostico(listaDePacientes, 'Gripe', 20)


/* var otraListaFiltrada = filtrarPorEdad(listaDePacientes, 0, 20);
console.log(otraListaFiltrada)
var otraListaFiltrada2 = filtrarPorDiagnostico(listaDePacientes, 'Gripe')
console.log(otraListaFiltrada2)

var miGranLista = otraListaFiltrada.concat(otraListaFiltrada2) 

 */