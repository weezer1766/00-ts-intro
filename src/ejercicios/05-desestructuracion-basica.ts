/*
    ===== Código de TypeScript =====
*/

/*Desestructuración de Objetos*/

interface Reproductor{
    volumen: number;
    segundo: number;    
    cancion: Cancion;
}

interface Cancion{
    nombre: string;
    autor: string;
    anho: number;    
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: {
        nombre: 'Yo soy',
        autor: 'Tu madre',
        anho: 1990
    }
}

/*
console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`El segundo actual es: ${reproductor.segundo}`);
console.log(`La cancion actual es: ${reproductor.cancion.nombre}`);
console.log(`El autor de la cancion actual es: ${reproductor.cancion.autor}`);
console.log(`El año de la cancion actual es: ${reproductor.cancion.anho}`);
*/

/*Desestructuración de Objetos*/ 
//SE DESESTRUCTURA CON LLAVES
//Esta consiste en extraer las propiedades o atributos de un objeto en un conjunto de variables
//PRIMERA FORMA: CUANTOS CONJUNTOS DE VARIABLES COMO SEA NECESARIO POR OBJETO (RECOMENDADO POR CUESTION DE ORDEN)
/*
const { volumen, segundo, cancion } = reproductor;
const { nombre, autor, anho } = cancion;
*/

//SEGUNDA FORMA: TODO EN UNA SOLA LINEA (NO RECOMENDADO POR CUESTION DE ORDEN)
//Cuando se quiere asignar una variable con otro nombre diferente a la propiedad que se esta desestructurando se asigna de la
//siguiente manera "autor: autorCancion"
const { volumen, segundo, cancion: {nombre: nombreCancion, autor: autorCancion, anho} } = reproductor;

//Esta variable puede tener el mismo nombre de la propiedad anterior pero dicha propiedad se le asigno a una variable con un
//nombre distinto en este caso "autorCancion", por lo que no existe cruce entre ambas variables
const autor = 'Mengano';

console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La cancion actual es: ${nombreCancion}`);
console.log(`El autor de la cancion actual es: ${autorCancion}`);
console.log(`El año de la cancion actual es: ${anho}`);

console.log(`Variable autor independiente: ${autor}`);

/*Desestructuración de Arreglos*/
//SE DESESTRUCTURA CON CORCHETE
//Esta consiste en extraer los items de un arreglo según su posición en el mismo (indice) en un conjunto de variables

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks', 'Goten', 'Pan'];
//al asignar a las variables el item del arreglo correspondiente este toma en cuenta la posición en la que se encuentra el item
//const [ p1, p2, p3 ] = dbz;

//si en caso no quisieramos crear "N" variables para un arreglo sino por el contrario solo nos interesa un solo item del arreglo
//por ejemplo el de la tercera posición entonces solo colocamos el nombre de la variable para dicho item y el resto lo rellenamos
//con comas
//const [ , , p3 ] = dbz;

//si en caso quisieramos crear variables en las primeras posiciones y el resto no se pueden asignar a una variable el resto 
//de valores usando los tres puntos "..."
const [ p1, , p3, ...rest ] = dbz;

/*
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);
*/

console.log(`Personaje 1: ${p1}`);
//console.log(`Personaje 2: ${p2}`);
console.log(`Personaje 3: ${p3}`);
console.log(`Resto de Personajes: ${rest}`);


