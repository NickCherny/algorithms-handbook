import { INode } from './Tree.types';

export class NumberNode implements INode<number> {
    public value: number;
    public leftChild: INode<number> | null;
    public rightChild: INode<number> | null;
    
    constructor(value: number) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
