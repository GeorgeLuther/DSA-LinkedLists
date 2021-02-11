//
class _Node {
    constructor(value, next){
        this.value=value
        this.next=next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    //create a new node as the head with a next pointer that is whatever the previous head was
    //O(1) - constant time will always be a single operation involving two nodes
    insertFirst(value){
        this.head = new _Node(value, this.head)
    }

    insertLast(value){
        //if the list is empty, insert in the first position
        //O(1)
        if (!this.head){
            this.insertFirst(value)
        }
        else {
            let currNode = this.head
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = new _Node(value, null)
        }
    }
    
}