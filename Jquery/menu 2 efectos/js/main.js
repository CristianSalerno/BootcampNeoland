var links = $('ul li a')
links.on('click', efecto)

var marcador = $('#marcador')



function efecto(event) {
    event.preventDefault();
    var ancho = $(this).css('width');
    var position = $(this).offset().left;
    var url = $(this).attr('href')
    //var position = $(this).position().left;

    marcador.animate({
        'width': ancho,
        'left': position,
    }, 500, function () {
        window.location = url;
    })

}