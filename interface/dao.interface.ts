//o 'T' é a implementação de tipo generico
interface DaoInterface<T>{
    tableName: string;
    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number):T;
    find(id: number): T;
    findAll():Array<T>
}

export { DaoInterface };