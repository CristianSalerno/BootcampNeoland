class Persona {
    constructor(pNombre, pApellido, pEdad) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    mostrar() {
        return `Mi nombre es : ${this.nombre} , me apellido ${this.apellido} y tengo ${this.edad}`;
    }

}

//extends => Hereda todas las propiedades y metodos de la clase Persona.
class Adulto extends Persona {
    //constructor => paso los paramentros del constructor
    constructor(pNombre, pApellidos, pEdad, pCoche) {
        //super (traigo los 3 paramentros del constructor persona , Clase padre)
        super(pNombre, pApellidos, pEdad)
        this.coche = pCoche;
    }
};

//Clase Niño
class Ninio extends Persona {
    constructor(pNombre, pApellido, pEdad, pColegio) {
        super(pNombre, pApellido, pEdad)
        this.colegio = pColegio;
    }
};