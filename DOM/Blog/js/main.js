var seccion = document.getElementById('noticias')
var i = 0;
var contenido = ''
for (noticia of listaNoticias) {
    contenido += `  <article id="noticia${i}" class="noticia">
                            <h3>${noticia.titulo}</h3>
                            <div class="imagen">
                                <img src="${noticia.UrlImagen}">
                            </div>
                            <div class="texto">
                                <p>${noticia.textoNoticia}</p>
                            </div>
                            </article>`;
    i++;
}

seccion.innerHTML = contenido;