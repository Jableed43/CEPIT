import Animal from "./interface";
export default abstract class Perro implements Animal {
    nombre: string;
    edad: number;
    hambre: boolean;
    sed: boolean;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.hambre = true;
        this.sed = true;
    }

    comer(): void {
        console.log('El perro come, sacia su hambre');
        this.hambre = false;
    }
    beber(): void {
        console.log('El perro bebe agua, sacia su sed');
        this.sed = false;
    }
    
    //Esta función ladrar es propia de la clase perro
    ladrar(): void{
        console.log('Perro ladra: guau, guau');
    }

    abstract correr(): void;
}
