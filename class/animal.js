"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.mover = function () {
        console.log(this.nome + " movou-se " + this._move + "m.");
    };
    Object.defineProperty(Animal.prototype, "Move", {
        set: function (valor) {
            this._move = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "Nome", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map