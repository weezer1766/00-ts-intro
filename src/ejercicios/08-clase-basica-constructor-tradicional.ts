/*
    ===== Código de TypeScript =====
*/

//La diferencia entre CLASES E INTERFACES, es que las interfaces no existen para JavaScript por eso no aparecen en la consola, a
//diferencia de las clases.
//La otra principal diferencia entre CLASES E INTERFACES, es que las clases permiten crear instancias, mientras que las interfaces
//no tienen esta caracteristica.
//Por último otra diferencia es que la CLASES permiten implementar métodos, tiene constructor y los atributos pueden tener propiedades
//GETTERS y SETTERS
class Heroe {
    //private: este alcance permite acceder al atributo solo desde dentro de la clase.
    //public: este alcance permite acceder al atributo desde afuera de la clase, pero al instanciar la clase.
    //static: este alcance permite acceder al atributo sin necesidad de tener que instanciar la clase. Ejemplo: Heroe.nombreReal.
    //SI NO SE ESPECIFICA EL ALCANCE POR DEFECTO ES PUBLIC
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;
    
    //constructor: es una función que se llama cuando se crea una instancia de la clase    
    constructor(alterEgo: string, edad: number, nombreReal: string){
        //this: utiliza la instancia creada de la clase.
        this.alterEgo = alterEgo;
        this.edad = edad;
        Heroe.nombreReal = nombreReal;
    }    

    imprimirNombre(){
        return this.alterEgo + ' ' + this.edad;
    }
}

console.log(Heroe.nombreReal);

const ironman = new Heroe('Batman', 36, 'Tu madre!!');
console.log(ironman);