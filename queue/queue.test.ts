import { Queue } from './Queue';
import { IQueue } from './Queue.types';

let q: IQueue<number>;

beforeEach(() => {
    q = new Queue();
    q.enqueue(1);
    q.enqueue(4);
    q.enqueue(10);
    q.enqueue(2);
});

describe('Given ASD Queue', () => {
    it('should return value in correct ordering', () => {
        expect(q.isEmpty()).toBeFalsy();
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(4);
        expect(q.dequeue()).toBe(10);
        expect(q.dequeue()).toBe(2);
        expect(q.isEmpty()).toBeTruthy();
    })
})
