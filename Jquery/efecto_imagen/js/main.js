var imagen = $('.container');
/* imagen.on('mouseover', entrar);
imagen.on('mouseout', salir); */


imagen.hover(entrar, salir)

function entrar(event) {
    $(this).find('.info').stop().fadeIn(1000);
}

function salir(event) {
    $(this).find('.info').stop().fadeOut(1000)
}




//cuando hago roll over de la imagen quiero que la caja se quede a mitad con el texto en medio