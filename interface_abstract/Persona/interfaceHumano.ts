//Interface es un contrato
export default interface Humano{
    //variables y funciones no tienen restriccion de acceso
    //Por defecto poseen public
    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
    hambre: boolean;
    sed: boolean;
//Las funciones no están implementadas
//implemantado = escribir funcionalidad
    saludar(): void;
    comer(): void;
    beber(): void;
}