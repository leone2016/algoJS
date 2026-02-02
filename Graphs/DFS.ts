import { Queue } from "../Queue";

/**
 * Depth First Search using visited array
 * recursive
 */
export default class DFS {
 
    visited: number[] = [];
    n: number; //size of the matrix
    start: number;
    constructor(start: number, n: number) {
        this.start = start;
        this.n = n;
        for(let i=0; i<n; i++){
            this.visited[i] = 0;
        }
    }
    print(A: number[][], start:number = this.start): void {
    if(this.visited[start] == 0){
        this.visited[start] = 1;
        console.log(start);
        for (let i = 1; i < this.n; i++) {
            if (A[start][i] == 1 && this.visited[i] == 0) {
                this.print(A, i);
            }
        }
    }
}
}