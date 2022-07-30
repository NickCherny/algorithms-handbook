export type IQueue<T> = {
    dequeue(): T | undefined;
    enqueue(value: T): void;
    isEmpty(): boolean;
}