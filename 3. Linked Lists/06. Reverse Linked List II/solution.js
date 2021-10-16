var reverseBetween = function(head, left, right) {
    let currPos = 1, currNode = head, start = head;
    
    while (currPos < left){
        start = currNode;
        currNode = currNode.next;
        currPos ++;        
    }
    let newList = null, tail = currNode;
    while (currPos >= left && currPos <= right){
        const next = currNode.next;
        currNode.next = newList;
        newList = currNode;
        currNode = next;
        currPos ++;        
    }
    start.next = newList;
    tail.next = currNode;
    
    if (left > 1){
        return head;
    } else {
        return newList;
    }
};