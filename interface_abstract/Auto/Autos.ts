import Auto from "./abstractVehiculo";
import {pirelli, RuedaTodoTerreno} from './rueda'
class Sedan extends Auto{
    acelerar(): void {
        this.velocidadActual =+ 50;
        console.log(this.velocidadActual);
    }
    frenar(): void {
        this.velocidadActual =- 50;
        console.log(this.velocidadActual);  
    }
}

class Jeep extends Auto{
    rueda : RuedaTodoTerreno;

    constructor(marca: string, modelo: string, anio: number, cilindrada: string, rueda: RuedaTodoTerreno){
        super(marca, modelo, anio, cilindrada)
        this.rueda = rueda;
    }
    acelerar(): void {
        this.velocidadActual =+ 30;
        console.log(this.velocidadActual);
    }
    frenar(): void {
        this.velocidadActual =- 30;
        console.log(this.velocidadActual);  
    }

}

let hondaCivic = new Sedan('honda', 'civic', 2017, '2000')

let jeepRenegade = new Jeep('Jeep', 'Renegade', 2022, "3000", pirelli)
console.log(jeepRenegade);