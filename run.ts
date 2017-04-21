import { Dao } from './class/dao';
import { Cavalo } from './class/animal.cavalo';
import { Animal } from './class/animal';

let dao: Dao<Animal> = new Dao<Animal>();
let cavalo: Cavalo = new Cavalo("Ismilinguido Cavalo");

cavalo.Move = 50;
cavalo.Tipo = "Quadrupide";
console.log(cavalo.Tipo);

dao.insert(cavalo); 