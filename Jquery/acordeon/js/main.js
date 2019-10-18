var faq = $('.faq h2') //Lanza el evento
faq.on('click', desplegar); //Evento click


function desplegar(event) {
    //opcion 1 
    //$(this).next().slideToggle(400)
    //opcion 2
    $('.faq p').slideUp(400);
    var contenido = $(this).next();
    $('.faq h2').removeClass('titulo')
    if (contenido.css('display') == 'none') {
        //Despliegue
        $(this).next().slideDown(400);
        $(this).addClass('titulo')
    } else {
        //Repliegue
        $(this).next().slideUp(400);
    }
}