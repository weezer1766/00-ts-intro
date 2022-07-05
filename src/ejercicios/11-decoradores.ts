/*
    ===== Código de TypeScript =====
*/
/*Decoradores*/
//Sirven para extender internamenta una clase y transformarla cuando se compila
//Los decoradores se compilan incluso antes de que se instancie una clase por esta razón las propiedades
//definidas dentro de la función no se ven, normalmente se utilizan para definir de que tipo es una clase
//puede ser un componente, servicio, un pipe, un guard, etc, esto con la finalidad de establecer como va 
//a funcionar la clase

//Esta función usa un generico "T" que extiende los argumentos que vienen del constructor "{ new (...args: any[]): {} }"
//y retorna un nuevo constructor "return class extends constructor" que extiende o agrega nuevas propiedades
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";

      newProperty = "new property";
      hello = "override";
    };
  }
   
//@miDecorador
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

let miSuperClase: MiSuperClase = new MiSuperClase();

console.log(miSuperClase);
//console.log(miSuperClase.hello);