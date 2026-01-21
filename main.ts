import { BFS } from "./Graphs/BFS";
import DFS from "./Graphs/DFS";

async function main() {
  // graph 
  // create adjancecy matrix
  //      1
  //     /  \
  //    2   3
  //     \ / 
  //      4
  //     / \
  //    5   6
   //0, 1, 2, 3, 4, 5, 6
  const graph = [
    [0, 0, 0, 0, 0, 0, 0], //0
    [0, 0, 1, 1, 0, 0, 0], //1
    [0, 1, 0, 0, 1, 0, 0], //2
    [0, 1, 0, 0, 1, 0, 0], //3
    [0, 0, 1, 1, 0, 1, 1], //4
    [0, 0, 0, 0, 1, 0, 0], //5
    [0, 0, 0, 0, 1, 0, 0]  //6
  ]
  console.log(graph);
  const bfs = new BFS(1, 7);
  bfs.print(graph);
  console.log("DFS");
  const dfs = new DFS();
  dfs.print(graph, 1, 7); // graph, start vertex, length of the matrix
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
