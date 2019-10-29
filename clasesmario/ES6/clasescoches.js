//Creo una clase de obejeto Coche Generica con: Color, Marca y Modelo.
class Coche {
    //Metodo constructor
    //Parametros con las propiedades del constructor 
    constructor(pColor, pMarca, pModelo) {
        //this 
        this.color = pColor;
        this._marca = pMarca;
        this._modelo = pModelo;
        this.velocidad = 0;
    }

    get marca() {
        return this._marca.toUpperCase();
    }
    set marca(newValue) {
        this._marca = newValue;
    }

    mostrar() {
        return `color: ${this.color} .marca: ${this.marca} .modelo: ${this.modelo}. velocidad: ${this.velocidad}`;
    }

    acelerar(pVelocidad) {
        this.velocidad += pVelocidad;
    }

    frenar(pVelocidad) {
        this.velocidad -= pVelocidad;
    }
}


//Creo un coche1
let coche1 = new Coche('rojo', 'Mercedez', 'cojonudo');
let coche2 = new Coche('azul', 'Seat', 'Ibiza')

coche1.acelerar(120); //Set de la propiedad , modifico el valor
console.log(coche1.mostrar());
//Get de la propidead, muestro
console.log(coche2.marca);