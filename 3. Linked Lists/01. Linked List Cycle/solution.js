// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again 
// by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

/* Pseudocode
- Creating Variables Slow & Fast and Setting Them To The Head.
- As We Iterate Slow Will Move 1 Node , Fast Will Move 2 Nodes.
- LL is Circular if slow === fast Cuz It will Make A Circle.
- LL is Not Circular , Fast Will Traverse To The Last Node of LL.
*/

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next){ // Making Sure That fast && fast.next is valid node
    slow = slow.next // Move 1 Node
    fast = fast.next.next // Move 2 Nodes

    if (slow === next) {
      return true
    }
  }
  return false    
};
console.log(hasCycle([3,2,0,-4],1))