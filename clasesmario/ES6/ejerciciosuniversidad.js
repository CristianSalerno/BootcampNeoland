//Profesores
class Profesor {
    constructor(pNombre, pApellido, pExperiencia) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Experiencia: ${this.experiencia} `
    }
}
//Creo un profesor
let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)


//Asignaturas
class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }
    mostrarAsignatura(muestraProfesor) {
        let resultado = `Asignatura: ${this.nombre} 
        profesor de la asignatura :
        `
        if (muestraProfesor) {
            resultado += this.profesor.mostrarProfesor();
        }
        return resultado;
    }
}

//Creo las asignaturas
let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

algebra.mostrarAsignatura(true)
electronica.mostrarAsignatura(true)
fisica.mostrarAsignatura(true)



//Estudiante
class Estudiante {
    constructor(pNombre, pApellido) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.asignaturas = [];
    }
    mostrarEstudiante() {
        let resultado = `
         ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellido})
         Estas son las asignaturas que cursa:
         `
        for (let asignatura of this.asignaturas) {
            resultado += asignatura.mostrarAsignatura(true);
        }
        return resultado;
    }

    AgregarAsignatura(pAsignatura) {
        this.asignaturas.push(pAsignatura);
    }
}
//Creo los estudiantes
let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')
estudiante1.AgregarAsignatura(algebra)
estudiante1.AgregarAsignatura(fisica)
estudiante1.AgregarAsignatura(electronica)



//Creo la Universidad.
class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = [];
    }
    agregarAlumno(pEstudiante) {
        this.alumnos.push(pEstudiante);
    }
    mostrarUniversidad() {
        let resultado = `Universidad (nombre: ${this.nombre})`
        for (let alumno of this.alumnos) {
            resultado += alumno.mostrarEstudiante();
        }
        return resultado;
    }
    obtenerAlumnosAsignatura(nombreAsignatura) {
        let contador = 0;
        for (let alumno of this.alumnos) {
            for (let asignatura of alumno.asignaturas) {
                if (asignatura.nombre === nombreAsignatura) contador++;
            }
        }
        return contador;
    }

}


//Creo la universidad

let uni1 = new Universidad('UC3M')

uni1.agregarAlumno(estudiante1)

uni1.agregarAlumno(estudiante2)

uni1.agregarAlumno(estudiante3)

uni1.mostrarUniversidad()
console.log(uni1.mostrarUniversidad())
console.log(uni1.obtenerAlumnosAsignatura('Electrónica'));