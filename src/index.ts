/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[]; //Optional chaining: permite hacer que la propiedad sea integral
}

const pasajero1: Pasajero = {
  nombre: 'Ronald Raico'
}

const pasajero2: Pasajero = {
  nombre: 'Carmin Cabrera',
  hijos: ['Natalia', 'Omar Jr.']
}

function imprimeHijos(pasajero: Pasajero): void{
  //la siguiente expresion se evalua de la siguiente manera: "Si existen hijos entonces se obtiene la 
  //cantidad (length), si el pasajero no tiene hijos entonces devuelve undefine, luego compara 
  //(undefine O 0) entre estos dos gana el 0"

  //En esta posición el ENCADENAMIENTO OPCIONAL permite verificar si el arreglo hijos existe en el objeto
  //instanciado, es decir, que intente ejecutar lo que siga siempre y cuando sea seguro hacerlo (llamado
  //tambien como SECURE OPERATOR)
  const cantidadHijos = pasajero.hijos?.length || 0;
  console.log(cantidadHijos);
}

imprimeHijos(pasajero1);