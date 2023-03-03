/* Crear clase auto, incluir variables internas y funciones */

class Auto{
    /* Variables internas */
    /* Algunas variables internas tienen valor por defecto */

    marca;
    modelo;
    color;
    anio;
    origen;

    /* Variables con valores por defecto */
    km = 0;
    combustible = 0;
    encendido = false;
    velocidad = 0;

    /* Constructor */
    constructor(marca, modelo, color, anio, origen){
        /* this.marca es la variable interna y marca es parametro */
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
        this.origen = origen;
    }

    /* funciones */

    encenderApagar(){
        if(this.encendido === false){
            console.log('El auto se ha encendido');
            return this.encendido = true
        }
        else {
            console.log('El auto se ha apagado');
            return this.encendido = false
        }
    }

    acelerar(arranque){
        /* A la velocidad actual del auto le agregamos la velocidad con la que aceleramos */
        // otra forma de hacerlo -> this.velocidad =+ arranque
        if(this.encendido === true){
            this.velocidad = Number(arranque) + this.velocidad
            console.log(`El auto aumentó su velocidad en ${arranque}km/h, va a ${this.velocidad}km/h`);
        } else {
            /* Primero encendemos el auto y despues aceleramos */
            this.encenderApagar()
            this.velocidad = Number(arranque) + this.velocidad
            console.log(`El auto aumentó su velocidad en ${arranque}km/h, va a ${this.velocidad}km/h`);
        }
    }

    frenar(desacelerar){
        if(this.velocidad === 0){
            console.log('No puede desacelerar más, ha llegado a 0km/h');
        }
        else{
            this.velocidad = this.velocidad - Number(desacelerar)
            console.log(`El auto ha desacelerado ${desacelerar}km/h, su velocidad es ${this.velocidad}km/h`);
            if(this.velocidad === 0){
                console.log('No puede desacelerar más, ha llegado a 0km/h');
            }
        }
    }

    /* Modifica el dato de una variable interna */

    cambiarColor(color){
         this.color = color
         console.log('El auto ha cambiado al color ' + color);
         return this.color;
    }
}
/* Instanciamos un auto chevy */
let chevy = new Auto('Chevrolet', 'serie 2', 'azul', 1964, 'Americano' )


console.log(chevy.cambiarColor('rojo'), 'console.log');
