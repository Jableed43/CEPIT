import Perro from "./abstract";
export default class PerroManager{
    listado: Perro[];

    constructor(){
        this.listado = [];
    }

getAllDogs(): Perro[]{
    console.log(this.listado);
    return this.listado;
}

addDog(perro: Perro): Perro[]{
    this.listado.push(perro)
    console.log('Se ha añadido correctamente');
    return this.listado;
}

getByname(nombre:string): Perro|undefined {
   let PerroEncontrado : Perro|undefined = this.listado.find(Perro => Perro.nombre === nombre)
   console.log(PerroEncontrado);
 
   return PerroEncontrado;
}
getOlder(edad:number): Perro[]|undefined{
    let PerroEncontrado = this.listado.filter(Perro => Perro.edad >= edad)
    console.log(PerroEncontrado);

    return PerroEncontrado;
}
getYounger(edad:number): Perro[]|undefined{
    let PerroEncontrado = this.listado.filter(Perro => Perro.edad <= edad)
    console.log(PerroEncontrado);

    return PerroEncontrado;
}
getHungry(): Perro[]|undefined{
    let PerroEncontrado = this.listado.filter(Perro => Perro.hambre === true)
    console.log(PerroEncontrado);

    return PerroEncontrado;
}
getThirsty(): Perro[]|undefined{
    let PerroEncontrado = this.listado.filter(Perro => Perro.sed === true)
    console.log(PerroEncontrado);

    return PerroEncontrado;
}


}