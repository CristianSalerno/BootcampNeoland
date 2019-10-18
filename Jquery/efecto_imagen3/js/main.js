var imagen = $('.container');
/* imagen.on('mouseover', entrar);
imagen.on('mouseout', salir); */


imagen.hover(entrar, salir)

function entrar(event) {
    //Calcular las posiciones del elemento desde la consola con JQ y ES6
    //var anchoJq = $(this).width(); Con Jquery.

    //Con javascript
    var ancho = this.clientWidth;
    var alto = (this.clientHeight / 4) * 3;
    console.log('ancho:', ancho, 'alto:', alto)

    $(this).find('.info').stop().animate({
        'top': alto + 'px',


    }, 1000)
    $(this).find('.imagen').addClass('rotateScale');
}

function salir(event) {
    var ancho = this.clientWidth;
    var alto = (this.clientHeight / 4) * 3;
    $(this).find('.info').stop().animate({
        'top': alto + 'px'
    })
    $(this).find('.imagen').removeClass('rotateScale');
}