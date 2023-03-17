import Perro from "./abstract";

export class Caniche extends Perro{
    correr(): void {
        console.log('El perro corre a 5km/h');
    }
}

export class Boyero extends Perro{
    correr(): void {
        console.log('El perro corre a 15km/h');
    }
}

export class Doberman extends Perro{
    correr(): void {
        console.log('El perro corre a 17km/h');
        }

}

export class Galgo extends Perro{

    medallas : number;

    constructor(nombre: string, edad: number){
        super(nombre, edad)
        this.medallas = 0;
    }
    
    correr(): void {
        console.log('El perro corre a 20km/h');
        }
    
    sumarMedalla() : number{
        let medallasGanadas = this.medallas++;
        console.log(`El perro ${this.nombre}, tiene ${this.medallas}`);
        
        return medallasGanadas;
    }
        
}

//Extienden de la clase perro pero pertenecen a otras clases
let tobi = new Caniche('Tobi', 1)
let sultan = new Doberman('Sultan', 3)
let ayudanteSanta = new Galgo('Ayudante de santa', 2)
console.log(tobi);
console.log(sultan);
console.log(ayudanteSanta);
