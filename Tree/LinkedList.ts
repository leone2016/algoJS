export class ListNode<T>{
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList<T>{
    head: ListNode<T> | null;
    tail: ListNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpty(): boolean {
        return this.head === null;
    }

    addLast(value: T){
        const newNode = new ListNode<T>(value);
       if(!this.tail){ // lista vacia
        this.head = this.tail = newNode;
        return;
       }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    addFirst(value: T){
        const newNode = new ListNode<T>(value);
        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    removeFirst(): T | null{
        if(!this.head){
            return null;
        }
        const removed = this.head;
        this.head = this.head.next;
        if(!this.head){
            this.tail = null;
        }
        return removed.value;
    }

    peek(): T | null{
        return this.head?.value || null;
    }
}
