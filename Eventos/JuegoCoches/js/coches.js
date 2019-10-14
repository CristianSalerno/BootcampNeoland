var ferrari = document.getElementById('ferrari')
var mercedes = document.getElementById('mercedes')
var redbull = document.getElementById('redbull')

//setInterval
var mercedesInterval = setInterval(acelerarMercedes, 100);
var redBullInterval = setInterval(acelerarRedBull, 100);

//Eventos de teclado, los lanza el documento.
document.addEventListener('keypress', acelerarFerrari)

var avanceFerrari = 0;
var avanceRedBull = 0;
var avanceMercedes = 0;
var nitro = 3;
var posicionFinal = 670;



function acelerarFerrari(e) {
    //Que tecla estoy tocando - console.log(e.keyCode);
    switch (e.keyCode) {
        case 32:
            //Acelerar o avanzar
            avanceFerrari += 15; //avanceFerrari = avanceFerrari +15;   
            break;
        case 78:
            if (nitro > 0) {
                avanceFerrari += 40;
                nitro--;
            }
            break;
    }

    if (avanceFerrari <= posicionFinal) {
        ferrari.style.marginLeft = avanceFerrari + 'px';
    } else {
        document.getElementById('mensaje').innerText = "GANO LA FERRA"
        detenerEventos()
    }
    /*  console.log(ferrari.offsetLeft) Para ver el final de la meta*/
}

function acelerarMercedes() {
    avanceMercedes += 10;
    if (avanceMercedes <= posicionFinal) {
        mercedes.style.marginLeft = avanceMercedes + 'px';
    } else {
        detenerEventos();
        document.getElementById('mensaje').innerText = "GANO EL MERCHO PAPA!"
    }
}

function acelerarRedBull() {
    avanceRedBull += Math.random() * 20;
    if (avanceRedBull <= posicionFinal) {
        redbull.style.marginLeft = avanceRedBull + 'px';
    } else {
        detenerEventos()
        document.getElementById('mensaje').innerText = "gano red bull";
    }
}
//detiene los eventos
function detenerEventos() {
    document.removeEventListener('keydown', acelerarFerrari);
    clearInterval(mercedesInterval);
    clearInterval(redBullInterval);
}