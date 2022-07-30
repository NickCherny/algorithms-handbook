import { INode, ITree } from './Tree.types';
import { Queue } from '../../queue';

export class Tree implements ITree {
    public root: INode<unknown>;

    constructor(root: INode) {
        this.root = root;
    }

    treversPreorder(node: INode<unknown>, handler: (data: INode<unknown>) => void): void {
        handler(node);
        if(node.leftChild) this.treversPreorder(node.leftChild, handler);
        if(node.rightChild) this.treversPreorder(node.rightChild, handler);
    }

    treversInorder(node: INode<unknown>, handler: (data: INode<unknown>) => void): void {
        if(node.leftChild) this.treversInorder(node.leftChild, handler);
        handler(node);
        if(node.rightChild) this.treversInorder(node.rightChild, handler);
    }
    
    treversPostorder(node: INode<unknown>, handler: (data: INode<unknown>) => void): void {
        if(node.leftChild) this.treversPostorder(node.leftChild, handler);
        if(node.rightChild) this.treversPostorder(node.rightChild, handler);
        handler(node);
    }

    traversDepthFirst(handler): void {
        const children = new Queue<INode>();
        children.enqueue(this.root);

        while(!children.isEmpty()) {
            const node = children.dequeue();
            handler(node);
            if(node?.leftChild) children.enqueue(node.leftChild);
            if(node?.rightChild) children.enqueue(node.rightChild);
        }
    }
}