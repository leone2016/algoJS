import { Queue } from "../Queue";

/**
 * Depth First Search using visited array
 * recursive
 */
export default class DFS {
 
    visited: number[] = [];
    print(A: number[][], start: number, n: number) {
    if(!this.visited[start] || this.visited[start] == 0){
        this.visited[start] = 1;
        console.log(start);
        for (let i = 1; i < n; i++) {
            if (A[start][i] == 1 && (!this.visited[i] || this.visited[i] == 0)) {
                this.print(A, i, n);
            }
        }
    }
}
}