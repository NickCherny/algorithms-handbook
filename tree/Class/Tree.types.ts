export interface INode<T = unknown> {
    value: T;
    leftChild: INode<T> | null;
    rightChild: INode<T> | null;
    addNode(value: T): void;
    findNode(value: T): INode<T> | undefined;
}

type TreversHandler = (data: INode) => void;

export interface ITree<T = unknown> {
    root: INode;
    find(value: T): T | undefined;
    treversPreorder(node: INode, handler: TreversHandler): void;
    treversInorder(node: INode, handler: TreversHandler): void;
    treversPostorder(node: INode, handler: TreversHandler): void;
    traversDepthFirst(handler: TreversHandler): void;
}
