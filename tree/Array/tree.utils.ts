export const getParentIndex = (i: number): number => Math.floor((i - 2) / 2);
export const getLeftChildIndex = (i: number): number => i * 2 + 1;
export const getRightChildIndex = (i: number): number => i * 2 + 2;
