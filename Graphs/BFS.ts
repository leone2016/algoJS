import { Queue } from "../Queue";

/**
 * Binary Search Tree using visited array and queue
 */
export class BFS {

    start: number;
    n: number; //size of the matrix
    visited: number[] = [];


    constructor(start: number, n: number) {
        this.start = start;
        this.n = n;
    }

    print(A: number[][]) {
        let i = this.start;
        let queue = new Queue<number>();

        this.visited[7] = 1;
        console.log(i);
        this.visited[i] = 1;
        queue.enqueue(i);

        while (!queue.isEmpty()) {
            i = queue.dequeue() || 0;
            for (let j = 1; j < this.n; j++) {
                if (A[i][j] == 1 && !this.visited[j]) {
                    console.log(j);
                    this.visited[j] = 1;
                    queue.enqueue(j);
                }
            }
        }

    }

}