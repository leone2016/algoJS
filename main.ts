import readline from "readline";
import { BinaryTree } from "./Tree/BinaryTree";

function makeConsoleIO() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q: string) =>
    new Promise<string>((resolve) => rl.question(q, (ans) => resolve(ans)));

  const close = () => rl.close();

  return { ask, close };
}

async function main() {
  const io = makeConsoleIO();

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
