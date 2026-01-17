import { BinarySearchTree } from "./Tree/BinarySearchTree";
import { TreeNode } from "./Tree/TreeNode";
import * as fs from 'fs';

const tree = new BinarySearchTree();
async function main() {
  // Construct:
  //     10
  //    /  \
  //   5   20
  //  / \   \
  // 4   8   50
  tree.insert(10);
  tree.insert(5);
  tree.insert(20);
  tree.insert(4);
  tree.insert(8);
  tree.insert(50);
  tree.inOrder(tree.root);
  console.log(tree.search(8));
  tree.rInsert(15);
  tree.inOrder(tree.root);
  console.log(" --- DELETE --- ")
  tree.delete(tree.root, 10);
  tree.inOrder(tree.root);
  console.log(" ============== START NEW TREE ============== ")
  //  Construct:
  //       50
  //      /  
  //     10   
  //      \   
  //       40   
  //      / 
  //     20
  //      \ 
  //      30
  const tree2 = new BinarySearchTree();
  tree2.rInsert(50);
  tree2.rInsert(10);
  tree2.rInsert(40);
  tree2.rInsert(20);
  tree2.rInsert(30);
  tree2.inOrder(tree2.root);
  console.log(" --- DELETE --- ")
  tree2.delete(tree2.root, 50);
  tree2.inOrder(tree2.root);

}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
