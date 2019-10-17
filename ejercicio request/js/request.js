var url = "https://reqres.in/api/users?page=1";


var Json = new XMLHttpRequest();

var listaUsuarios = document.getElementById('usuarios')

Json.open('GET', url, true);
Json.send();
Json.addEventListener('readystatechange', cargarContactos);



function cargarContactos(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        var listaDeContactos = new Array();
        console.log(event.target.response)
        listaDeContactos = JSON.parse(event.target.response)

        pintarLista(listaDeContactos.data);
        console.log(listaDeContactos.data)
    }
}