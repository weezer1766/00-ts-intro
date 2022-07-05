/*
    ===== Código de TypeScript =====
*/
//EXTEND: ES AGREGAR A UNA CLASE PROPIEDADES O FUNCIONALIDADES ADICIONALES A UNA CLASE EXISTENTE
class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string
    ) {}    
}

//SEGUNDA FORMA DE DECLARAR LAS PROPIEDADES DE UNA CLASE
class Heroe2 extends PersonaNormal{

    //alterEgo: string;
    //edad: number;
    //nombreReal: string;
    
    //AL DECLARAR LAS PROPIEDADES DENTRO DEL CONSTRUCTOR INDICANDO SU ALCANCE AUTOMATICAMENTE PERMITE QUE IMPLICITAMENTE
    //PERMITA ESTABLECER SUS VALORES A DICHAS PROPIEDADES DE LA SIGUIENTE MANERA.
    constructor(
        nombre: string,
        direccion: string,

        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string) {
        
        //super: función que permite llamar al constructor de la clase a la cual extienden
        //dentro de un constructor o en su defecto super, no es necesario colocar "this", ya que la clase aun no ha sido
        //instaciada, en este caso al no utilizar "this." se esta usando el argumento que se esta recibiendo en el constructor
        //es decir "public nombreReal: string"
        super( 
            nombre,
            direccion
        );
        //this.alterEgo = alterEgo;
        //this.edad = edad;
        //this.nombreReal = nombreReal;
    }    

}

const ironman2 = new Heroe2('Tu madre', 'New York - USA', 'Batman', 36, 'Tu madre!!');
console.log(ironman2);