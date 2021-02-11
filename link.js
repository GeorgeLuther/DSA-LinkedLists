

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
    insertBefore(value, key){
        //empty list case
        if (!this.head) return null
        //head case
        if (this.head.value === key){
            this.insertFirst(value)
            return
        }
        //move forward until found
        else {
            let prevNode
            let foundNode = this.head.next
        while (foundNode.value !== key) {
            prevNode = foundNode       
            foundNode = foundNode.next
        }
        if (foundNode === key) {
            const newNode = new _Node(val, foundNode)
            prevNode.next = newNode
            return
        } 
        else {
            console.log('Cannot find key')
            return
        }
        
        //Find the node with the value and the node before it
        
        //create a new node with the found node as it's next
        //insert it as the next of the node before the found node

        //head case
        //end case
        //not found case

    }
    insertAfter(value){
        if (this.head.value === fuckeri)
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