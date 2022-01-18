//es mejor si usas javascript REPL

console.log([1, 2, 3].map((n) => n * 2));
//las declaraciones deberian estar en el archivo separado d.ts
//esta declaracion es para salir del paso.
//la correcta seria asi:
/*
declare global{
  interface Array<T>{
    mymap(fn: (i: T) => any): any[];  
  }
}
*/
declare interface Array<T> {
  mymap(fn: (i: T) => any): any[];
}

Array.prototype.mymap = function (callback) {
  let result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }
  return result;
};

console.log([1, 2, 3].mymap((n) => n * 2));
