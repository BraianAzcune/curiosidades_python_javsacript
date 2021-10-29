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