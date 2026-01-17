import { emit } from "cluster";

export class MaxHeap {
    private heap: number[];
    constructor() {
        this.heap = [];
    }
    insert(key: number) {
        let i = this.heap.length;
        this.heap.push(key);
        let temp = this.heap[i] ;
        while (i > 1 && temp > this.heap[Math.floor(i / 2)]) {
            this.heap[i] = this.heap[Math.floor(i / 2)];
            i = Math.floor(i / 2);
        }
        this.heap[i] = temp;
    }

    getHeap() {
        return this.heap;
    }

}