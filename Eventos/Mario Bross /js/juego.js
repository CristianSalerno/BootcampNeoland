var escenario = document.getElementById('escenario');
var mario = document.querySelector('#runner img');

var posicionMario = 0;
var posicionEscenario = 0;
var posicionMalo = 0;
setInterval(moverEscenario, 30);
var tiempoIntervalo = Math.random() * 5000;
var tiempoIntervalo2 = Math.random() * 500;
var seta = setInterval(agregarMalo, tiempoIntervalo);
var malo2 = setInterval(agregarMalo2, tiempoIntervalo);


document.addEventListener('keydown', jump)
document.addEventListener('keyup', down)


function moverEscenario() {
    posicionEscenario -= 10;
    escenario.style.backgroundPosition = posicionEscenario + 'px 0px'
}

function jump(e) {
    switch (e.keyCode) {
        case 38:
            //SALTAR
            mario.src = 'images/salto.gif';
            mario.style.display = 'inline-block'
            mario.style.paddingBottom = "100px"
            break;
    }
}

function down(e) {

    switch (e.keyCode) {
        case 38:
            mario.src = 'images/mario.gif'
            mario.style.paddingBottom = "0px"
            break;
    }
}

function agregarMalo() {
    var malo = document.createElement('div');
    var avanceMalo = 0;
    malo.className = 'malo';
    escenario.appendChild(malo)

    var intervaloBicho = setInterval(() => {
        if (avanceMalo < 850) {
            avanceMalo += 15;
            malo.style.marginRight = avanceMalo + 'px'
        } else {
            escenario.removeChild(malo);
            clearInterval(intervaloBicho);
        }

    }, 30)
    tiempoIntervalo = Math.random() * 5000;
}

function agregarMalo2() {
    var malo2 = document.createElement('div');
    var avanceMalo2 = 0;
    malo2.className = 'malo2';
    escenario.appendChild(malo2)

    var intervaloBicho2 = setInterval(() => {
        if (avanceMalo2 < 850) {
            avanceMalo2 += 15;
            malo2.style.marginRight = avanceMalo2 + 'px'
        } else {
            escenario.removeChild(malo2);
            clearInterval(intervaloBicho2);
        }

    }, 40)
    tiempoIntervalo2 = Math.random() * 5000;
}