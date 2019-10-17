//Selectores1

//Selectores en Jquery
var lis = $('.menu li')
//lanzar el evento en Jquery
lis.on('click', () => {
    alert(event.target.innerText);
})
//Muestro por consola
//console.log(lis);

//selector query selector de ES6
var otrosLis = document.querySelectorAll('.menu li')
//Recorro el Array.
for (li of lis) {
    li.addEventListener('click', () => {
        alert(event.target.innerText);
    })
}



//Selectores2 Jquery 
var texto = $('.cuadrado:first-child').text('Carlos')

console.log(texto);
$('.cuadrado:nth-child(2)').html('<strong>Adios</strong>');

//Otra forma de Jquery
//$('.cuadrado').last().html('<strong>Hola</strong>');


//CSS.html

$('.cuadrado').css('background-color', 'tomato'); //Modifico una sola reglar

//Modifico mas estilos dentro de un Json

$('.cuadrado').css({
    'border-radius': '50%',
    'border': '2px solid black'
})