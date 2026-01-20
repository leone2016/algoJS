import { BFS } from "./Graphs/BFS";

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
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
