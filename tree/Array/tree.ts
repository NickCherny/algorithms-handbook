import { Queue } from '../../queue';
import { getLeftChildIndex, getRightChildIndex } from './tree.utils';

type TreeStore<T> = T[];

type TreversHandler = (value: unknown) => void;

type Tree = {
    store: TreeStore<number>;
    addNode(value: number, index?: number): void;
    find(value, index?: number): number;
    treversPreorder(index: number, handler: TreversHandler): void;
    treversInorder(index: number, handler: TreversHandler): void;
    treversPostorder(index: number, handler: TreversHandler): void;
    traversDepthFirst(handler: TreversHandler): void;
}

export const treeWithNumbers: Tree = {
    store: [20, 2, 10, 0, 0,2, 5],
    
    treversPreorder(index, handler) {
        handler(this.store[index]);

        const lci = getLeftChildIndex(index);
        if (this.store[lci]) this.treversPreorder(lci, handler);

        const rci = getRightChildIndex(index);
        if (this.store[rci]) this.treversPreorder(rci, handler)
    },

    treversInorder(index, handler) {
        const leftChildIndex = getLeftChildIndex(index);
        if (this.store[leftChildIndex]) this.treversInorder(leftChildIndex, handler);
        handler(this.store[index]);
        const rightChildIndex = getRightChildIndex(index);
        if (this.store[rightChildIndex]) this.treversInorder(rightChildIndex, handler)
    },

    treversPostorder(index, handler) {
        const lci = getLeftChildIndex(index);
        if (this.store[lci]) this.treversPostorder(lci, handler);

        const rci = getRightChildIndex(index);
        if (this.store[rci]) this.treversPostorder(rci, handler);

        handler(this.store[index]);
    },

    traversDepthFirst(handler) {
        const children = new Queue<number>();
        
        children.enqueue(0);

        while(!children.isEmpty()) {
            const index = children.dequeue()!;
            handler(this.store[index]);
            const lci = getLeftChildIndex(index);
            if (this.store[lci]) children.enqueue(lci);

            const rci = getRightChildIndex(index);
            if (this.store[rci]) children.enqueue(rci);
        }
    },

    addNode(value, index = 0) {
        if (value < this.store[index]) {
            const leftIndex = getLeftChildIndex(index);
            if (!this.store[leftIndex]) {
                this.store[leftIndex] = value;
            } else {
                this.addNode(value, leftIndex);   
            }
        } else {
            const rightIndex = getRightChildIndex(index);
            if (!this.store[rightIndex]) {
                this.store[rightIndex] = value;
            } else {
                this.addNode(value, rightIndex);
            }
        }
    },

    find(value, index = 0) {
        if (this.store[index] === value) return index;
        
        if (this.store[index] < value) {
            const leftIndex = getLeftChildIndex(index);
            return this.store[leftIndex] ? this.find(value, this.store[leftIndex]) : undefined;
        } else {
            const rightIndex = getRightChildIndex(index); 
            return this.store[rightIndex] ? this.find(value, rightIndex) : undefined;
        }
    }
}
