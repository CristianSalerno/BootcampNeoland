//variables
var edadMaxima = document.getElementById('edadMax');
var edadMinima = document.getElementById('edadMin');
var boton = document.querySelector('#btnEdad');
var seccionPacientes = document.querySelector('#pacientes');
var diagnostico = document.querySelector('#selectDiagnostico')

//For para cargar la etiqueta select de 0 a 100
for (var i = 1; i <= 100; i++) {
    edadMaxima.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

//Eventos
btnEdad.addEventListener('click', cargarEdades); //Click filtro de edades
diagnostico.addEventListener('change', cargarDiagnostico) // Select de diagnosticos

//function para cagar las edades filatradas
function cargarEdades(event) {
    var edadmaxima = parseInt(edadMaxima.value);
    var edadminima = parseInt(edadMinima.value);

    if (edadminima > edadmaxima) {
        alert('Los valores introducidos no son correctos')
    } else {
        pintarPacientes(filtrarPorEdad(listaDePacientes, edadminima, edadmaxima));
    }
}

//function para pintar los pacientes en el HTML
function pintarPacientes(pLista) {
    var contenido = '<h2>' + pLista.length + ' pacientes encontrados</h2>';
    //Recorro la lista de pacientes con un forEach:
    pLista.forEach(paciente => {
        contenido += ` <article id="paciente${paciente.id}">
        <h3>${paciente.nombre} ${paciente.apellido}</h3>
        <ul>
            <li>Diagnostico: ${paciente.diagnostico}</li>
            <li>Edad: ${paciente.edad}</li>
            <li>Seguridad Social: ${paciente.numeroSegSoc}</li>
        </ul>
    </article>`;
    })
    //Dentro del Section, pinto los pacientes.

    seccionPacientes.innerHTML = (pLista.length != 0) ? contenido : '<h2>No hay registros</h2>'
}
//llamado a la función
pintarPacientes(listaDePacientes);


function cargarDiagnostico(event) {
    var valorDiagnostico = event.target.value;

    if (valorDiagnostico != '') {
        pintarPacientes(filtrarPorDiagnostico(listaDePacientes, valorDiagnostico));
    } else {
        alert('Por favor selecciona un diagnostico valido')
    }
};


//filtro por edades y diagnostico


var min = document.getElementById('min');
var max = document.getElementById('max');
var diag = document.getElementById('diag');

var btnFiltrarTodo = document.getElementById('filtrarTodo')
btnFiltrarTodo.addEventListener('click', filtrarDiagEdad)

function filtrarDiagEdad(e) {
    //Paso 1: quiero sacar con un alert cada uno de los valores del filtro.
    //3 alerts

    var menor = parseInt(min.value);
    var mayor = parseInt(max.value);
    var diagnostico = diag.value;


    if (diagnostico != '') {
        var listaFiltradaFinal = filtrarPorEdad(filtrarPorDiagnostico(listaDePacientes, diagnostico), menor, mayor)

        pintarPacientes(listaFiltradaFinal);
    } else {
        var listaEdades = filtrarPorEdad(listaDePacientes, menor, mayor);
        pintarPacientes(listaEdades);
    }
}

var buscador = document.getElementById('search');
buscador.addEventListener('click', buscar);

var input = document.getElementById('inputSearch')


function buscar(e) {
    var palabraBuscar = input.value;

    var arrayApellido = new Array();

    arrayApellido = palabraBuscar.split('');

    arrayApellido[0] = arrayApellido[0].toUpperCase()

    palabraBuscar = arrayApellido.join('');

    pintarPacientes(filtrarPorApellido(listaDePacientes, palabraBuscar));
}