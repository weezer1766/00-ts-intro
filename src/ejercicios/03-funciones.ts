/*
    ===== Código de TypeScript =====
*/

//FUNCIONES TYPESCRIPT - JAVASCRIPT
function sumar(a: number, b: number): number{
    //return (a + b).toString();
    return a + b;
}

const sumarFlecha = (a :number, b :number) :number => {
    return a + b;
}

//EN LAS FUNCIONES EL ORDEN DE LOS PARAMETROS O ARGUMENTOS DE ENTRADA SON:
//1. OBLIGATORIOS
//2. OPCIONALES
//3. LOS QUE TIENEN ALGUN VALOR POR DEFECTO (EJEM: base: number = 2, sino se envia valor para "base"
//su valor será igual a "2")
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

/*
let resultado1 = sumar('Ronald', ' Raico');
console.log(resultado1);
*/

let resultado = sumar(10, 20);
console.log(resultado);

console.log(sumarFlecha(2, 5));

let resultadoMultiplicar = multiplicar(5);
console.log(resultadoMultiplicar);

resultadoMultiplicar = multiplicar(5, 0 , 10);
console.log(resultadoMultiplicar);

interface Personaje {
    nombre: string;
    pv: number;
    mostrar: (textoInicial: string) => void;
}

function curar(personaje: Personaje, curarX: number): void {
    personaje.pv += curarX;
    //console.log(personaje);
}

const personaje: Personaje = {
    nombre: 'Erassmus',
    pv: 50,
    mostrar(textoInicial: string): void{
        console.log(textoInicial, this.pv);
    }
}

curar(personaje, 20);
personaje.mostrar('Puntos de vida: ');