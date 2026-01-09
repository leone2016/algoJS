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
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
