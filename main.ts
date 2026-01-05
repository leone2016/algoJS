import { BinaryTree } from "./Tree/BinaryTree";
import MakeConsoleIO from "./util/MakeConsoleIO";

async function main() {
  const io = MakeConsoleIO();
  const tree = new BinaryTree();
  await tree.create({ ask: io.ask });
  io.close();
  console.log("\nLevel-order traversal:");
  console.log(tree.levelOrder().join(" "));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
