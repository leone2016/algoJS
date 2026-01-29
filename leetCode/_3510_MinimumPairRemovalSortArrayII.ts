/**
 * 3510. Minimum Pair Removal to Sort Array II
Hard
Topics
Hint
Given an array nums, you can perform the following operation any number of times:

Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
Replace the pair with their sum.
Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

 

Example 1:

Input: nums = [5,2,3,1]

Output: 2

Explanation:

The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
The array nums became non-decreasing in two operations.

Example 2:

Input: nums = [1,2,2]

Output: 0

Explanation:

The array nums is already sorted.

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 * @param nums 
 */
export  function minPairRemovalSortArrayII (nums: number[]) {
       let operations = 0;
       let i = 0;
      
       const isSorted = () => {
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] > nums[i + 1]) {
                return false;
            }
        }
        return true;
       }
       while(!isSorted()){
            let minSum = Number.MAX_SAFE_INTEGER;
            let minIndex = -1;
            for(let i = 0; i < nums.length - 1; i++) {
                if(nums[i] + nums[i + 1] < minSum) {
                    minSum = nums[i] + nums[i + 1];
                    minIndex = i;
                }
            }
            nums.splice(minIndex, 2, minSum);
            operations++;
       }
       return operations;
 }


 class DoublyLinkedListNode{
    private head: Node | null;
    private tail: Node | null;
    private size: number;
    static Node = class{
        value: number;
        next: Node | null;
        prev: Node | null;
        constructor(val: number){
            this.value = val;
            this.next = null;
            this.prev = null;
        }
    }
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
 
    isEmpty(){
        return this.size === 0;
    }
    
 }
// class Node{
//     value: number;
//     left: Node;
//     constructor(val: number, left: Node){
//         this.value = val;
//         this.left = left;
//     }
// }
 export  function minPairRemovalSortArrayII_2(nums: number[]) {

 }