//FORMAS DE EVITAR QUE EL THIS CAMBIE A UNDIFINE, O WINDOW 
class Particule {
  x: number;
  y: number;
  constructor() {
    this.x = 100;
    this.y = 200;
  }
  //caso 1
  //funcion que se crea dentro del prototipo de la clase. no duplica codigo.
  //hacer var p = new Particule();, y luego mostrar p. y veras que no esta este metodo dentro de p.
  getX(){
    return this.x;
  }
  //caso 2
  //funcion flecha, el this toma el contexto cuando se crea.
  //hacer var p = new Particule();, y luego mostrar p. y veras que el metodo esta dentro de p.
  getY= ():number => {
    console.log(this);
    return this.y;
  };
}

function recibe(callback: () => number) {
  console.log(callback());
}

var p = new Particule();
//caso 1
//como la funcion existe ene l protitpo de la clase, si se pasa la referencia de la funcion
//el this cambiara, por eso se debe usar bind, o llamarlo con una funcion flecha.
recibe(p.getX.bind(p));
recibe(()=>{return p.getX()});
//caso 2
//como la funcion flecha define su contexto al momento de crearse, no es necesario hacer
//ninguna de las cosas anteriores, llamarlo directamente andara.
recibe(p.getY);
