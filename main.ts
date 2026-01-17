import { MaxHeap } from "./Heap/MaxHeap";
import * as fs from 'fs';

const heap = new MaxHeap();
async function main() {
    let h  = [0,10,20,30,25,5,40,35]
    h.forEach((element:number) => {
        heap.insert(element);
    });


    console.log(heap.getHeap());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
