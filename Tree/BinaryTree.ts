import { Queue } from "./Queue";
import { Stack } from "./Stack";
import { TreeNode } from "./TreeNode";

export interface PromtIO {
    ask(question: string): Promise<string>;
}

export class BinaryTree {
    root: TreeNode | null = null;

    async create(io: PromtIO) {
        const rootVal = Number(await io.ask("Enter root data: "));
        if (isNaN(rootVal)) return null;

        this.root = new TreeNode(rootVal);
        const q = new Queue<TreeNode>();
        q.enqueue(this.root);

        while (!q.isEmpty()) {
            const p = q.dequeue();
            if (!p) continue;

            // Left Child
            const leftVal = Number(await io.ask(`Enter left child data of ${p.data}: `));
            if (leftVal !== -1 && !isNaN(leftVal)) {
                const t = new TreeNode(leftVal);
                p.lchild = t;
                q.enqueue(t);
            }

            // Right Child
            const rightVal = Number(await io.ask(`Enter right child data of ${p.data}: `));
            if (rightVal !== -1 && !isNaN(rightVal)) {
                const t = new TreeNode(rightVal);
                p.rchild = t;
                q.enqueue(t);
            }
        }
        console.log("Binary Tree created successfully");
        return this.root;
    }

    // Recursive Preorder
    preOrder(p: TreeNode | null = this.root): number[] {
        let out: number[] = [];
        if (p) {
            out.push(p.data);
            out = out.concat(this.preOrder(p.lchild));
            out = out.concat(this.preOrder(p.rchild));
        }
        return out;
    }

    // Recursive Inorder
    inOrder(p: TreeNode | null = this.root): number[] {
        let out: number[] = [];
        if (p) {
            out = out.concat(this.inOrder(p.lchild));
            out.push(p.data);
            out = out.concat(this.inOrder(p.rchild));
        }
        return out;
    }

    // Recursive Postorder
    postOrder(p: TreeNode | null = this.root): number[] {
        let out: number[] = [];
        if (p) {
            out = out.concat(this.postOrder(p.lchild));
            out = out.concat(this.postOrder(p.rchild));
            out.push(p.data);
        }
        return out;
    }

    // Level Order
    levelOrder(p: TreeNode | null = this.root): number[] {
        const out: number[] = [];
        if (!p) return out;

        const q = new Queue<TreeNode>();
        out.push(p.data);
        q.enqueue(p);

        while (!q.isEmpty()) {
            const curr = q.dequeue();
            if (curr) {
                if (curr.lchild) {
                    out.push(curr.lchild.data);
                    q.enqueue(curr.lchild);
                }
                if (curr.rchild) {
                    out.push(curr.rchild.data);
                    q.enqueue(curr.rchild);
                }
            }
        }
        return out;
    }

    // Height
    height(p: TreeNode | null = this.root): number {
        if (!p) return 0;
        const x = this.height(p.lchild);
        const y = this.height(p.rchild);
        return (x > y ? x : y) + 1;
    }

    // Iterative Preorder
    iterativePreorder(): number[] {
        const out: number[] = [];
        let p = this.root;
        const stk = new Stack<TreeNode>();

        while (p !== null || !stk.isEmpty()) {
            if (p !== null) {
                out.push(p.data);
                stk.push(p);
                p = p.lchild;
            } else {
                const node = stk.pop();
                if (node) p = node.rchild;
            }
        }
        return out;
    }

    // Iterative Inorder
    iterativeInorder(): number[] {
        const out: number[] = [];
        let p = this.root;
        const stk = new Stack<TreeNode>();

        while (p !== null || !stk.isEmpty()) {
            if (p !== null) {
                stk.push(p);
                p = p.lchild;
            } else {
                const node = stk.pop();
                if (node) {
                    out.push(node.data);
                    p = node.rchild;
                }
            }
        }
        return out;
    }

    // Iterative Postorder
    // Mimics C++: stack<long int> with sign bit for visitedRight
    iterativePostorder(): number[] {
        const out: number[] = [];
        let p = this.root;
        // wrapper to simulate the "long int" sign hack
        // v: false means > 0 (first visit)
        // v: true means < 0 (second visit)
        const stk = new Stack<{ node: TreeNode, v: boolean }>();

        while (p !== null || !stk.isEmpty()) {
            if (p !== null) {
                stk.push({ node: p, v: false }); 
                p = p.lchild;
            } else {
                const temp = stk.pop(); 
                if (temp) {
                    if (!temp.v) { 
                        stk.push({ node: temp.node, v: true }); 
                        p = temp.node.rchild;
                    } else { 
                        out.push(temp.node.data); 
                        p = null;
                    }
                }
            }
        }
        return out;
    }
}