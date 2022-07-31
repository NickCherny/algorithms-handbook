import { treeWithNumbers } from './tree';

describe('Given Tree with Array as a storage', () => {
    it('And call treversPreorder, should match string', () => {
        const values: unknown[] = [];
        treeWithNumbers.treversPreorder(0, (v) => {
            values.push(v)
        });
        expect(values.join('->')).toBe('20->2->10->2->5');
    });

    it('And call treversInorder, should match', () => {
        const values: unknown[] = [];
        treeWithNumbers.treversInorder(0, (v) => {
            values.push(v);
        });
        expect(values.join('->')).toBe('2->20->2->10->5');
    });

    it('And call treversPostorder, should match value', () => {
        const values: unknown[] = [];
        treeWithNumbers.treversPostorder(0, value => values.push(value));

        expect(values.join('->')).toBe('2->2->5->10->20');
    });

    it('And call traversDepthFirst, should match string', () => {
        const values: unknown[] = [];
        treeWithNumbers.traversDepthFirst(v => values.push(v));

        expect(values.join('->')).toBe('20->2->10->2->5');
    });

    it('And add new value, should match', () => {
        treeWithNumbers.addNode(3, 0);
        const values: unknown[] = [];
        treeWithNumbers.treversPreorder(0, v => values.push(v));
        expect(values.join('->')).toBe('20->2->3->10->2->5');
    });

    it('And find value, should return correct index', () => {
        expect(treeWithNumbers.find(10)).toBe(2);
    });
})

