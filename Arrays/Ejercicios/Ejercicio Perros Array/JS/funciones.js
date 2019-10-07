//Quiero que saquemos por pantalla aquellos perros cuya raza es considerada peligrosa
function filtrarPorPeligrosidad(pLista, pPeligrosidad) {
    var listaFiltrada = new Array();

    for (raza of pLista) {
        if (raza.peligrosidad == pPeligrosidad) {
            //obejeto Json raza
            listaFiltrada.push(raza);
        }
    }
    pintarRazas(listaFiltrada)

}

//filtrarPorPeligrosidad(razas, false)

function pintarRazas(pListaRazas) {
    var contenido = ''
    for (perro of pListaRazas) {
        contenido += `
        <div>
        <h3>${perro.raza}</h3>
        <ul>
            <li>Longitud: ${perro.longitud}</li>
            <li>Longevidad: ${perro.longevidad}</li>
            <li>Peso: ${perro.peso}</li>
            <li>Peligrosidad: ${perro.peligrosidad}</li>
            <li>Color: ${perro.color}</li>
        </ul>
    </div>
    <hr>`
    }
    document.write(contenido)
}

// var listaPeligrosidad = filtrarPorPeligrosidad(razas, true);
// pintarRazas(listaPeligrosidad)

//funcion que me permita filtrar perros entre un valor de peso max y min


//resolucion Juanan


function filtrarPorRangoPeso(pListaRazas, pPesoMaximo, pPesoMinimo) {
    var listaFiltrada = new Array();
    for (perro of pListaRazas) {
        if (perro.peso >= pPesoMinimo && perro.peso <= pPesoMaximo) {
            listaFiltrada.push(perro);
        }
    }
    return listaFiltrada;
}
var listaPeso = filtrarPorRangoPeso(razas, 10, 5)
pintarRazas(listaPeso)