class Animal{
    private nome: string;
    private _move: number;
    constructor(nome: string){
        this.nome = nome;
    }

    mover(): void{
        console.log(`${this.nome} movou-se ${this._move}m.`);
    }

    set Move(valor:number){
        this._move = valor;
    }

    get Nome():string{
        return this.nome;
    }
}

export { Animal };