import { TreeNode } from "./TreeNode";

export class BinarySearchTree {
    root: TreeNode | null = null;

    insert(key: number) {

        let t = this.root;//temporal pointer    
        let r: TreeNode | null = null;
        let p: TreeNode | null = null;//pointer
        if (!this.root) {
            p = new TreeNode(key);

            this.root = p;
            return;
        }

        while (t != null) {
            r = t;
            if (key < t.data)
                t = t.lchild;
            else if (key > t.data)
                t = t.rchild;
            else
                return;
        }
        p = new TreeNode(key);

        if (r && key < r.data)
            r.lchild = p;
        else if (r && key > r.data)
            r.rchild = p;
    }

    inOrder(p: TreeNode | null) {
        if (p) {
            this.inOrder(p.lchild);
            console.log(p.data);
            this.inOrder(p.rchild);
        }
    }

    /**
     * Iterative search
     * @param key Integer value to search
     * @returns TreeNode if found, null otherwise
     */
    search(key: number) {
        let t = this.root;
        while (t) {
            if (key == t.data)
                return t;
            if (key < t.data)
                t = t.lchild;
            else if (key > t.data)
                t = t.rchild;

        }
        return null;
    }

    /**
     * recursive insert
     */
    insertRecursive(p: TreeNode | null, key: number): TreeNode {
        if (!p) {
            p = new TreeNode(key);
            return p;
        }
        if (key < p.data) {
            p.lchild = this.insertRecursive(p.lchild, key);
        } else if (key > p.data) {
            p.rchild = this.insertRecursive(p.rchild, key);
        }

        return p;
    }

    rInsert(key: number) {
        this.root = this.insertRecursive(this.root, key);
    }

    /**
     * Delete node
     * class 307
     */
    delete(p: TreeNode | null, key: number): TreeNode | null {
        if (!p) {
            return null;
        }
        //leaf node
        if (!p.lchild && !p.rchild) {
            if (p == this.root) {
                this.root = null;
            }
            return null;
        }

        let queue: TreeNode | null = null;
        if (key < p.data) {
            p.lchild = this.delete(p.lchild, key);
        } else if (key > p.data) {
            p.rchild = this.delete(p.rchild, key);
        } else {
            //node found
            if (this.height(p.lchild) > this.height(p.rchild)) {
                queue = this.inPredecessor(p.lchild);
                p.data = queue!.data;
                p.lchild = this.delete(p.lchild, queue!.data);
            } else {
                queue = this.inSuccessor(p.rchild);
                p.data = queue!.data;
                p.rchild = this.delete(p.rchild, queue!.data);
            }
        }
        return p;
    }

    inPredecessor(p: TreeNode | null): TreeNode | null {
        while (p && p.rchild) {
            p = p.rchild;
        }
        return p;
    }

    inSuccessor(rchild: TreeNode | null): TreeNode | null {
        while (rchild && rchild.lchild) {
            rchild = rchild.lchild;
        }
        return rchild;
    }

    height(p: TreeNode | null): number {

        if (!p) {
            return 0;
        }
        let y = this.height(p.lchild);
        let x = this.height(p.rchild);

        return Math.max(y, x) + 1;
    }


}




