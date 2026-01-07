
import { BinaryTree } from "./Tree/BinaryTree";
import { TreeNode } from "./Tree/TreeNode";
import * as fs from 'fs';

const tree = new BinaryTree();
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

const results = [
    `Height: ${tree.height()}`,
    `Recursive Pre: ${JSON.stringify(tree.preOrder())}`,
    `Iterative Pre: ${JSON.stringify(tree.iterativePreorder())}`,
    `Recursive In: ${JSON.stringify(tree.inOrder())}`,
    `Iterative In: ${JSON.stringify(tree.iterativeInorder())}`,
    `Recursive Post: ${JSON.stringify(tree.postOrder())}`,
    `Iterative Post: ${JSON.stringify(tree.iterativePostorder())}`,
    `Level Order: ${JSON.stringify(tree.levelOrder())}`
].join('\n');

try {
    fs.writeFileSync('test_output.txt', results);
    console.log('Test finished. Results written to test_output.txt');
} catch (err) {
    console.error("Error writing file:", err);
    console.log(results); // Fallback
}
