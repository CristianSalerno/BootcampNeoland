var botones = document.querySelectorAll('header #tabs li a')


for (boton of botones) {
    boton.addEventListener('click', cargarSeccion)
}

function cargarSeccion(e) {
    e.preventDefault();
    var secciones = document.querySelectorAll('main article ')

    for (seccion of secciones) {
        seccion.style.display = 'none'

    }
    var seccion = document.getElementById(this.dataset.id);
    seccion.style.display = 'block';

}