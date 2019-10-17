var listaUsuarios = document.getElementById('usuarios')
var datosUsuarios = document.getElementById('otrosDatos')

function cambiarListado(event) {
    var urlDos = "https://reqres.in/api/users?page=2";
    var JsonDos = new XMLHttpRequest;

    JsonDos.open('GET', url, true);
    JsonDos.send();
    JsonDos.addEventListener('readystatechange', cargarContactosDos);

}

function cargarContactosDos(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        var listaDeContactos = new Array();
        //console.log(event.target.response)
        listaDeContactos = JSON.parse(event.target.response)


        pintarLista(listaDeContactos.data);
        //console.log(listaDeContactos.data)
    }
}


function pintarLista(pLista) {
    var contenido = '';
    for (lista of pLista) {
        contenido += `
                <article data-id ="${lista.id}">
                <div id="img">
                <h3>${lista.first_name}</h3>
                <h3> ${lista.last_name}</h3>
                <h4>${lista.email}</h4>
                <a><img src="${lista.avatar}"
                alt=""></a>   
                </div>
                </article>`
    }
    listaUsuarios.innerHTML += contenido;

}


function pasarPagina(pLista) {
    var pagina2 = "https://reqres.in/api/users/2";

    var pagina2 = new XMLHttpRequest;
    pagina2.open('GET', url, true);
    pagina2.send();
    pagina2.addEventListener('readystatechange', cargarContactos);

}