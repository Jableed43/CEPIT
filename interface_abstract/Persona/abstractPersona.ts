import Humano from "./interfaceHumano";
export default abstract class Persona implements Humano{
    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
    hambre: boolean;
    sed: boolean;
    profesion: string;

    constructor(nombre: string, apellido: string, edad: number, dni: number, profesion: string){
        this.hambre = true;
        this.sed = true;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.profesion = profesion;
    }
    
   
    saludar(): void {
        console.log(`Hola ${this.nombre}`);
    }
    comer(): void {
        this.hambre = false;
    }
    beber(): void {
        this.sed = false;
    }

    //Abstract permite una implementacion diferente segun la instancia de la clase abstracta
    abstract ejecutarProfesion() : void;
}