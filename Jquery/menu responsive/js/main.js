var btnMenu = $('.boton');
btnMenu.on('click', slideMenu);


var cerrado = false;

function slideMenu(event) {
    //$('header nav').slideToggle(400)
    if (cerrado == true) {
        $('header nav').slideDown(400);
    } else {
        $('header nav').slideUp(400);
    }
    cerrado = !cerrado;
}