var boton = $('.button');
var desplegable = $('.desplegable')

boton.on('click', mostrarDesplegable)


function mostrarDesplegable(evento) {
    if (desplegable.css('right') == '-400px') {
        desplegable.animate({
            'right': '0px'
        })
    } else {
        desplegable.css({
            'right': '-400px'
        })
    }
}