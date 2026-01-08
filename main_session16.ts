import { BinaryTree } from "./Tree/BinaryTree";
import MakeConsoleIO from "./util/MakeConsoleIO";
import { TreeNode } from "./Tree/TreeNode";
import * as fs from 'fs';

const tree = new BinaryTree();
async function main() {
  // const io = MakeConsoleIO();
  // const tree = new BinaryTree();
  // await tree.create({ ask: io.ask });
  // io.close();
  // console.log("\nLevel-order traversal:");
  // console.log(tree.levelOrder().join(" "));

  // Construct:
  //      10
  //     /  \
  //    20   30
  //   / \
  //  40  50
  
  tree.root = new TreeNode(10);
  tree.root.lchild = new TreeNode(20);
  tree.root.rchild = new TreeNode(30);
  tree.root.lchild.lchild = new TreeNode(40);
  tree.root.lchild.rchild = new TreeNode(50);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
