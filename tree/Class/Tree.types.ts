export interface INode<T = unknown> {
    value: T;
    leftChild: INode<T> | null;
    rightChild: INode<T> | null;
}

type TreversHandler = (data: INode) => void;

export interface ITree {
    root: INode;
    treversPreorder(node: INode, handler: TreversHandler): void;
    treversInorder(node: INode, handler: TreversHandler): void;
    treversPostorder(node: INode, handler: TreversHandler): void;
    traversDepthFirst(handler: TreversHandler): void;
}
