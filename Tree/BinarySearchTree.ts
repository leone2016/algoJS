import { TreeNode } from "./TreeNode";

export class BinarySearchTree {
    root: TreeNode | null = null;
    
    insert(key: number){
       
        let t = this.root;//temporal pointer    
        let r:TreeNode | null = null;
        let p:TreeNode | null = null;//pointer
        if(!this.root){
           p = new TreeNode(key);
       
           this.root=p;
           return;
        }

        while(t !=null){
            r=t;
            if(key<t.data)
                t=t.lchild;
            else if(key>t.data)
                t=t.rchild;
            else
                return;
        }
        p = new TreeNode(key);
        
        if(r && key<r.data)
            r.lchild=p;
        else if(r && key>r.data)
            r.rchild=p;
    }

    inOrder(p: TreeNode|null){
        if(p){
            this.inOrder(p.lchild);
            console.log(p.data);
            this.inOrder(p.rchild);
        }
    }
}