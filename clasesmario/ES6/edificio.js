//Creo la clase persona
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
//Creo dos personas 
let per1 = new Persona('Carlos', 'Iniesta', 40);
let per2 = new Persona('Juan', 'Xavier', 20);
let per3 = new Persona('Roman', 'Juan', 49);

//Creo la clase casa
class Vivienda {
    constructor(pPiso, pLetra) {
        this.piso = pPiso;
        this.letra = pLetra;
        this.habitantes = [];
    }
    mostrar() {
        let resultado = `Casa: .Piso ${this.piso}, Letra ${this.letra}`;
        for (let habitante of this.habitantes) {
            resultado += habitante.mostrar();
        }
        return resultado;
    }
    agregarHabitante(pPersona) {
        this.habitantes.push(pPersona);
    }
}

//Creo dos casas
let vivienda1 = new Vivienda(14, 'B')
let vivienda2 = new Vivienda(3, 'C')
vivienda1.agregarHabitante(per1, per2);
console.log(vivienda1)
//Creo la clase edificio
class Edificio {
    constructor(pCalle, pNumero) {
        this.calle = pCalle;
        this.numero = pNumero;
        this.casas = [];
    }
    mostrar() {
        let resultado = `el edificio ubicado en la calle  ${this.calle} ubicado en el numero ${this.numero} contiene las siguientes casas ${this.casas}`;
        for (let casa of this.casas) {
            resultado += casa.mostrar();
        }
        return resultado;
    }
    agregarCasas(pVivienda) {
        this.casas.push(pVivienda);
    }
}

//Creo un edificio 
let edi1 = new Edificio('gobernador', 5);

edi1.agregarCasas(vivienda1);
console.log(edi1);