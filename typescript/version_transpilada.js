var Particule = /** @class */ (function () {
    function Particule() {
        var _this = this;
        //caso 2
        this.getY = function () {
            console.log(_this);
            return _this.y;
        };
        this.x = 100;
        this.y = 200;
    }
    //caso 1
    Particule.prototype.getX = function () {
        return this.x;
    };
    return Particule;
}());
function recibe(callback) {
    console.log(callback());
}
var p = new Particule();
//caso 1
recibe(p.getX.bind(p));
recibe(function () { return p.getX(); });
//caso 2
recibe(p.getY);
console.log(p);

//se puede notar el hecho de que en el caso 1, se comparte la funcion y que en el caso 2 no.
// al crear una nueva funcion, y ver que la referencia es distinta.
var p2 = new Particule();
console.log("GetX, iguales?")
console.log(p.getX == p2.getX);
console.log("GetY, iguales?")
console.log(p.getY == p2.getY);