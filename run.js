"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./class/dao");
var animal_cavalo_1 = require("./class/animal.cavalo");
var dao = new dao_1.Dao();
var cavalo = new animal_cavalo_1.Cavalo("Ismilinguido Cavalo");
cavalo.Move = 50;
cavalo.Tipo = "Quadrupide";
console.log(cavalo.Tipo);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map