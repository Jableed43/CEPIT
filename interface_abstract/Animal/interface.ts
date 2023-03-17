export default interface Animal{
    nombre: string;
    edad: number;
    hambre: boolean;
    sed: boolean;

    comer() : void;
    beber() : void;
}