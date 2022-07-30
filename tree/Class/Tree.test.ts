import { NumberNode } from './Node';
import { Tree } from './Tree';

const fnode = new NumberNode(20);
const tree = new Tree(fnode);

beforeAll(() => {
    fnode.leftChild = new NumberNode(2);
    fnode.rightChild = new NumberNode(10);
    fnode.rightChild.leftChild = new NumberNode(2);
    fnode.rightChild.rightChild = new NumberNode(5);
})

describe('Given Tree with Array as a storage', () => {
    it('And call treversPreorder, should match string', () => {
        const values: unknown[] = [];
        tree.treversPreorder(fnode, ({value }) => values.push(value));
        expect(values.join('->')).toBe('20->2->10->2->5');
    });

    it('And call treversInorder, should match', () => {
        const values: unknown[] = [];
        tree.treversInorder(fnode, ({value }) => values.push(value));
        expect(values.join('->')).toBe('2->20->2->10->5');
    });

    it('And call treversPostorder, should match value', () => {
        const values: unknown[] = [];
        tree.treversPostorder(fnode, ({value }) => values.push(value));

        expect(values.join('->')).toBe('2->2->5->10->20');
    });

    it('And call traversDepthFirst, should match string', () => {
        const values: unknown[] = [];
        tree.traversDepthFirst(({value }) => values.push(value));

        expect(values.join('->')).toBe('20->2->10->2->5');
    });
})

