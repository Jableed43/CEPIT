import Auto from './Auto'
import Rueda from './Rueda'
class AutoDeportivo extends Auto{
    public cilindrada: string;
    public turbo: boolean;
    velocidadMax: number = 300;

    constructor(cilindrada: string, patente: string, modelo: string, marca: string, turbo: boolean, rueda: Rueda){
        super(patente, modelo, marca, rueda)
        this.cilindrada = cilindrada;
        this.turbo = turbo;
    }
   
    public acelerar(): void {
        this.velocidadActual = this.velocidadActual + 50;
    }
   }
export default AutoDeportivo;