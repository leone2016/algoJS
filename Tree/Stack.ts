import { LinkedList } from "./LinkedList";

export class Stack<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList<T>();
    }

    push(value: T): void {
        this.list.addFirst(value);
    }

    pop(): T | null {
        return this.list.removeFirst();
    }

    peek(): T | null {
        return this.list.peek();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }
}
