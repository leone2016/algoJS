import { Queue } from "./Queue";
import { TreeNode } from "./TreeNode";

export interface PromtIO{
    ask(question: string): Promise<string>;
}

export class BinaryTree {
    root: TreeNode | null = null;

    async create(io: PromtIO){
        const xRoot = Number(await io.ask("Value of the root node: "));
        this.root = new TreeNode(xRoot);

        const q = new Queue<TreeNode>();
        q.enqueue(this.root);

        while(!q.isEmpty()){
            const pointer = q.dequeue();

            if(!pointer){
                break;
            }

            let x = Number(await io.ask(`Value of the left child of ${pointer.data}: (-1 for no child) `));
            if(x !== -1){
                const tempPointer = new TreeNode(x);
                pointer.lchild = tempPointer;
                q.enqueue(tempPointer);
            }

            x = Number(await io.ask(`Value of the right child of ${pointer.data}: (-1 for no child) `));
            if(x !== -1){
                const tempPointer = new TreeNode(x);
                pointer.rchild = tempPointer;
                q.enqueue(tempPointer);
            }

            
        }
        console.log("Binary Tree created successfully");
        return this.root;
    }

    levelOrder(): number[]{
        if(!this.root) return [];
        const out: number[] = [];
        const q: TreeNode[] = [this.root];
        while(q.length > 0){
            const pointer = q.shift();
            if(!pointer) break;
            out.push(pointer.data);
            if(pointer.lchild) q.push(pointer.lchild);
            if(pointer.rchild) q.push(pointer.rchild);
        }
        return out;
    }

}