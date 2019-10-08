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

//trabajar con archivos a parte.

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

// sacar por pantalla todos los pacientes que se apelliden Pérez

// sacar por pantalla todos los pacientes que tengan como especialista asignado medico de medicina general

//sacar por pantalla aquellos pacientes menores de 20 años que tengan gripe.