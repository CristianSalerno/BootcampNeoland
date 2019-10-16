//API 
var url = "https://jsonplaceholder.typicode.com/posts";
//Section donde voy a dibujar el JSON.
var seccionNoticias = document.querySelector('.noticias');
//Recibo el JSON
var miJson = new XMLHttpRequest();
//Abrir la URL para poder hacer la petición. (Recibo tres parametros)
miJson.open('GET', url, true);
//Enviar 
miJson.send();
//Evento para llamar a la funcion de carga del archivo
miJson.addEventListener('readystatechange', cargarArchivo);
//Function cargarArchivo (){} 
function cargarArchivo(event) { //readyState: 4(recibido), lo miro por consola.
    //Si esta en readyState 4 y status 200, lo traigo.
    if (event.target.readyState == 4 && event.target.status == 200) {
        var listaDePost = new Array() //Lo almaceno en una variable
        //console.log(event.target.response); Veo el JSON en una string.
        listaDePost = JSON.parse(event.target.response); //Lo parseo a integer
        //console.log(listaDePost); lo veo por la consola como un Array.
        pintarPost(listaDePost); //Function para traerlo al Section.
    }
}
//API RECOGIDA. 


function pintarPost(pLista) {
    var contenido = ''
    for (post of pLista) {
        contenido += `<article id="noticia_${post.id}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </article>`
    }

    seccionNoticias.innerHTML += contenido;
}