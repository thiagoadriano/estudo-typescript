import {Animal} from './animal';
class Cavalo extends Animal{
    private tipo: string;
    constructor(nome: string){
        super(nome);
    }
    set Tipo(opcao: string){
        this.tipo = opcao;
    }
    get Tipo():string{
        return this.tipo;
    }
}

export { Cavalo };