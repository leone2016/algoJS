import { emit } from "cluster";

export class MaxHeap {
    private heap: number[];
    private n: number;
    constructor() {
        this.heap = [];
        this.n = 0;
    }
    insert(key: number) {
        let i = this.heap.length;
        this.heap.push(key);
        this.n++;
        let temp = this.heap[i] ;
        while (i > 1 && temp > this.heap[Math.floor(i / 2)]) {
            this.heap[i] = this.heap[Math.floor(i / 2)];
            i = Math.floor(i / 2);
          
        }
        this.heap[i] = temp;
    }

    delete() {
        let i,j,x, temp, val;
        this.n--;
        i = 1;
        j = 2*i;
        x = this.heap[this.n];
        val = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = val;
        while(j<this.n-1){
         if(this.heap[j+1] > this.heap[j]){
            j++;
         }
         if(this.heap[i] < this.heap[j]){
            temp = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            i = j;
            j = 2*j; 
         }else{
            break;
         } 
        }
        return val;
    }

    getHeap() {
        return this.heap;
    }

}