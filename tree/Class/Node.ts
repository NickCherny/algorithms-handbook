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

    addNode(value: number): void {
        if (value < this.value) {
            if (this.leftChild) this.leftChild.addNode(value);
            else this.leftChild = new NumberNode(value);
        } else {
            if (this.rightChild) this.rightChild.addNode(value);
            else this.rightChild = new NumberNode(value);
        }
    }

    findNode(value: number): INode<number> | undefined {
        if (this.value === value) return this;

        if (this.value < value) {
            return this.leftChild?.findNode(value);
        } else {
            return this.rightChild?.findNode(value);
        }
    }
}
