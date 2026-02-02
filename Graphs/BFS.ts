import { Queue } from "../Queue";

/**
 * Binary Search Tree using visited array and queue
 */
export class BFS {

    start: number;
    n: number; //size of the matrix
    visited: number[] = [];

    /**
     * start: starting vertex
     * n: size of the matrix
     * @param start
     * @param n
     */
    constructor(start: number, n: number) {
        this.start = start;
        this.n = n;
        for(let i=0; i<n; i++){
            this.visited[i] = 0;
        }
    }

    print(A: number[][]) {
        let i = this.start;
        let queue = new Queue<number>();

        this.visited[7] = 0;//
        console.log(i);
        this.visited[i] = 1;//mark visited
        queue.enqueue(i);

        while (!queue.isEmpty()) {
            i = queue.dequeue() || 0;
            for (let j = 1; j < this.n; j++) {
                if (A[i][j] == 1 && this.visited[j] == 0) {
                    console.log(j);
                    this.visited[j] = 1;
                    queue.enqueue(j);
                }
            }
        }

    }

}