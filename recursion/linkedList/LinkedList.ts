
// // Definition for singly-linked list.
//     function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(list1, list2) {
//     let result = new ListNode(0);
//     let curr = result
//     while(list1 !== null && list2 !== null){
//         if( list1.val < list2.val){
//             curr.next = list1;
//             list1 = list1.next;
//         }else{
//             curr.next = list2;
//             list2 = list2.next;
//         }
//         curr = curr.next;
//     }

//     if(list1 !== null) curr.next = list1;
//     if(list2 !== null) curr.next = list2;
//     return result.next;
// };
// const printList = function(head) {
//     let curr = head;
//     let result = [];
//     while(curr !== null){
//         result.push(curr.val);
//         curr = curr.next;
//     }
//     return result;
// }
// // Example usage: [1,2,4] and [1,3,4]
// let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// let mergedList = mergeTwoLists(list1, list2);
// console.log(printList(mergedList));

// export {printList};