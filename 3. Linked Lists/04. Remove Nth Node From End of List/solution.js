function removeNthFromEnd(head, n) {
    let dummyHead = {next: head};
    let slow = dummyHead;
    let fast = dummyHead;

    // Move Fast N Nodes Ahead Of Slow.
    for (let i = 1; i <= n; i++){
        fast = fast.next
    }
    // Move Slow & Fast Up One Node At a Time Until Fast is Last Node
    while (fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummyHead.next
};
console.log(removeNthFromEnd([1,2,3,4,5],2))