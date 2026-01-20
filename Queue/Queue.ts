import { LinkedList } from "../Tree/LinkedList";

export class Queue<T>{
    private list = new LinkedList<T>();

    isEmpty(): boolean {
        return this.list.isEmpty();
    }
    enqueue(item: T): void {
        this.list.addLast(item);
    }
    dequeue(): T | null {
        return this.list.removeFirst();
    }
    peek(): T | null {
        return this.list.peek();
    }
}