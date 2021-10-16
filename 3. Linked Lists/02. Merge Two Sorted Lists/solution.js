// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
/*
- Pseudo Code
* Creating a New Linked List 
* Creating a tail and assign it to the newLinkdedList
* When There are L1 & L1
* if l1 value is lesser than l2 value
* We will assign the tail of the newLinkedList To The l1 value
* Otherwise We will assign the tail of the newLinkedList To The l1 value
* When one of the two loops exhausted we assign the tail to l1 or l2
*/

function mergeTwoLists (l1, l2) {
  let newLinkedList = {next : null}; // Creating a New Linked List with One Nude Null
  let tail = newLinkedList; // Crating a tail newLinkedList

  while (l1 && l2) { //When l1 & l2 are found
    if (l1.val < l2.val){ // when l1 < l2
      tail.next = l1; // assign the newnode to l1
      tail = tail.next; // move tail one node
      l1 = l1.next // move l1 to the next val
    } else {
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next
    }
  }
  tail.next = l1 || l2 // After the l1 or l2 is exhausted we will point to the next value in l1 or l2
  return newLinkedList.next // return the newlinkedList .next because the first head is null  
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))