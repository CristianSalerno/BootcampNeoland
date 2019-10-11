var listaAficiones = [];
var lista = document.getElementById('lista');
var inputNombre = document.getElementById('inputNombre')
var inputAficion = document.getElementById('inputAficion')

var btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click', pulsarGuardar);

var btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', reset);


function pulsarGuardar(e) {
    var valueNombre = inputNombre.value
    var valueAficion = inputAficion.value

    listaAficiones.find(function (item) {
        return valueNombre === item.nombre;
    })

    if (!elemEncontrado) {
        var registro = {
            nombre: valueNombre,
            aficiones: [valueAficion]
        }
        listaAficiones.push(registro);
    } else {
        elemEncontrado.aficion.push(valueAficion);
    }
    console.log(listaAficiones)
    pintarRegistro();
    reset()
}


function pintarRegistro() {
    var li = document.createElement('li');
    var ultElemento = listaAficiones[listaAficiones.length - 1];
    li.innerHTML = `<strong>  - ${ultElemento.nombre}: </strong>${ultElemento.aficion}`
    lista.appendChild(li);
}

function reset(e) {
    inputNombre.value = '';
    inputAficion.value = '';
}