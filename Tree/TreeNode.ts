export class TreeNode {
    data: number;
    lchild: TreeNode | null = null;
    rchild: TreeNode | null = null;

    constructor(data: number) {
        this.data = data;
    }
}