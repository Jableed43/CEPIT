import Vehiculo from "./vehiculo";
export default abstract class Auto implements Vehiculo {
    velocidadActual: number;
    marca: string;
    modelo: string;
    anio: number;
    cilindrada: string;

    constructor(marca: string, modelo: string, anio: number, cilindrada: string){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
        this.velocidadActual = 0;
    }
    //Todos los autos aceleran y frenan pero lo hacen de manera diferente
    abstract acelerar(): void;
    abstract frenar(): void;
}