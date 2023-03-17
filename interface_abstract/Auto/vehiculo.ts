export default interface Vehiculo{
    marca: string;
    modelo: string;
    anio: number;
    cilindrada: string;
    velocidadActual: number;

    acelerar() : void;
    frenar(): void;
}