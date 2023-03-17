import Persona from "./abstractPersona";

class Doctor extends Persona{
    especialidad : string;

    constructor(nombre: string, apellido: string, edad: number, dni: number, profesion: string, especialidad: string){
        super(nombre, apellido, edad, dni, profesion)
        this.especialidad = especialidad;
    }

    ejecutarProfesion(): void {
        console.log('Curar');
    }
}

let javier = new Doctor('javier', 'lopez', 30, 123456, 'doctor', 'cirujano')
