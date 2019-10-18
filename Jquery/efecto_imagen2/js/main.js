var imagen = $('.container');
/* imagen.on('mouseover', entrar);
imagen.on('mouseout', salir); */


imagen.hover(entrar, salir)

function entrar(event) {
    $(this).find('.info').stop().animate({
        'left': '0px'
    })
}

function salir(event) {
    $(this).find('.info').stop().animate({
        'left': '-400px'
    })
}