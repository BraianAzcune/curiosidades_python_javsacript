/***
 * Un type donde haya opciones auto explicativas y con ayuda del IntelliSense
 * es crear un type como opciones de string.
 */
type opcionesPago = 'efectivo' | 'debito' | 'credito';
/***
 * al declarar una funcion que utilice esto, el IntelliSense te ayudara a escribir las opciones.
 */
function cobrar(metodoPago: opcionesPago) {
  console.log('paga con=' + metodoPago);
}
//IntelliSense te ayuda a escribir, y te marca error de que vacio no es valido.
cobrar('');
/**
 * ! aunque esto funciona, en tiempo de ejecucion todo esto desaparecerá.
 * si se necesitara que estas opciones esten disponibles para javascript, para recorrerlas,
 * quiza mostrar un selector con las opciones de este tipo no se podria.
 * * hay una forma de aprovechar ambas situaciones
 * * hay que crear un array con las opciones y de ahi crear el tipo.
 */

export const opcionesPagoArr = ['efectivo', 'debito', 'credito'] as const;
export type opcionesPago2 = typeof opcionesPagoArr[number];

function cobrar2(metodoPago: opcionesPago2) {
  console.log('paga con= ' + metodoPago);
}
// funciona exactamente igual.
cobrar2('');
// * pero esta el plus de que se puede utilizar opcionesPagoArr para recorrer las opciones.
