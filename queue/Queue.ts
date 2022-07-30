import { IQueue } from './Queue.types';

export class Queue <T>implements IQueue<T>{
    private store: T[] = [];

    dequeue() {
        return this.store.shift();
    }

    enqueue(value: T) {
        this.store.push(value);
    }

    isEmpty() {
        return this.store.length === 0;
    }
}