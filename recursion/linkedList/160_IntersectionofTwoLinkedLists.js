import {printList} from "./LinkedList.js";

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const getInterSectionNode = (headA, headB)=>{
    if(headA === null || headB === null) return null;

    let pointerA = headA;
    let pointerB = headB;
    while(pointerA !== pointerB){
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }
    return pointerA;
}

// Example usage:
//List A: 4 → 1 → 8 → 4 → 5
//List B: 5 → 6 → 1 → 8 → 4 → 5
let intersectingNode = new ListNode(8);
intersectingNode.next = new ListNode(4);
intersectingNode.next.next = new ListNode(5);
let listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = intersectingNode;
//List B: 5 → 6 → 1 → 8 → 4 → 5

let listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = new ListNode(1);
listB.next.next.next = intersectingNode; //skipping to intersecting node

console.log(printList(getInterSectionNode(listA, listB))); // Output: Node with value 8