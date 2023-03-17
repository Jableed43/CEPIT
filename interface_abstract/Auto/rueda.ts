interface Rueda{
    tamanio: number;
    marca: string;
    modelo: string;
    tipo: string;
    presionActual: number;

    inflar(): void;
    getPresionActual(): number;
}


export class RuedaTodoTerreno implements Rueda{
    tamanio: number;
    marca: string;
    modelo: string;
    tipo: string;
    presionActual: number;

    constructor(tamanio: number, marca: string, modelo: string, tipo: string, presionActual: number){
        this.tamanio = tamanio;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.presionActual = presionActual
    }

    inflar(): void {
        this.presionActual =+ 10
    }
    getPresionActual(): number {
        return this.presionActual
    }

}

export let pirelli = new RuedaTodoTerreno(20, 'pirelli', '4*4', 'todo terreno', 0)