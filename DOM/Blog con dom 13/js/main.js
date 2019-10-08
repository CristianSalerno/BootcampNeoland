var seccion = document.getElementById('noticias')

function cargarNoticias(pListaNoticias) {
    var i = 0;

    for (noticia of pListaNoticias) {
        //texto de la noticia
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(noticia.textoNoticia);
        parrafo.appendChild(texto);
        var divTexto = document.createElement('div');
        divTexto.className = 'texto';

        divTexto.appendChild(parrafo);

        //div con la imagen
        var divImagen = document.createElement('div');
        divImagen.className = 'imagen';
        var imagen = document.createElement('img');
        imagen.src = noticia.urlImagen;

        divImagen.appendChild(imagen);
        //titulo de la noticia

        var tituloNoticia = document.createElement('h3')
        var textoTitulo = document.createTextNode(noticia.titulo)

        tituloNoticia.appendChild(textoTitulo);
        //crear el articulo y meter todos los elementos dentro en riguroso orden
        var articulo = document.createElement('article')
        articulo.id = 'noticia' + i;
        articulo.className = 'noticia'
        //meto todo dentro del articulo
        articulo.appendChild(tituloNoticia);
        articulo.appendChild(divImagen);
        articulo.appendChild(divTexto);

        seccion.appendChild(articulo);

        i++
    }
}
cargarNoticias(listaNoticias)


function borrarNoticia(pId) {
    var articuloAborrar = document.getElementById('noticia' + pId)
    articuloAborrar.parentNode.removeChild(articuloAborrar);
    listaNoticias.splice(pId, 1);
    console.log(listaNoticias)
}