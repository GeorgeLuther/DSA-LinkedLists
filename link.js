class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    insertFirst(item){
        this.head = new _Node(item, this.head)
    }
    insertLast(item){
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    insertBefore(key, val){
        //empty list case
        if (!this.head) return null
        //head case
        if (this.head.value === key){
            this.insertFirst(val)
            return
        }
        //move forward until found
        else {
            let prevNode = this.head
            let foundNode = this.head.next
            while (foundNode.value !== key) { 
                prevNode = foundNode       
                foundNode = foundNode.next
            }
            //once found, use found as new node's next and set new node as next for found's previous node 
            if (foundNode.value === key) {
                const newNode = new _Node(val, foundNode)
                prevNode.next = newNode
                return
            } 
            else {
                console.log('Cannot find key')
                return
            }
        }        
    }
    insertAfter(key, val){
        //empty list case
        if (!this.head) return null
        //head case
        if (this.head.value === key) {
            let newNode = new _Node(val, this.head.next)
            this.head.next = newNode
            return
        }
        //move forward until found
        let foundNode = this.head.next
        while (foundNode.value !== key) {
            foundNode = foundNode.next
        }
        //if found, new node becomes found's next, and found's next becomes new node's next
        if (foundNode.value === key) {
            let newNode = new _Node(val, foundNode.next)
            foundNode.next = newNode
        } else {
            console.log('Key node not found')
        }
    }
    insertAt(position, val){
        //empty list case
        if (!this.head) return null
        //head case
        if (position === 0) {
            this.insertFirst(val)
            return
        }
        //main case - find node @ position by incrementing from head
        let count = 0;
        //start at head
        let prevNode = null
        let currNode = this.head
        while (count < position && currNode.next !== null) {
            prevNode = currNode
            currNode = currNode.next
            count++
        }
        if (count === position) {
            let newNode = new _Node(val, currNode)
            prevNode.next = newNode
            console.log('curr', newNode)
            return
        } else {
          console.log('Position out of current range');
          return;
        }
        
    }
    find(item) {
        let currNode = this.head
        if (!this.head) {
            return null
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode
    }
    remove(item){
        if (!this.head){
            return null
        }
        if (this.head.value === item){
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let previousNode = this.head

        while ((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}

module.exports = LinkedList