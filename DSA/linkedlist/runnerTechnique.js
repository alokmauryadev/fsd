class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    cycle(){
        this.tail.next = this.head
    }
checkCycle() {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return "It's cyclic";
        }
    }
    return "It's not cyclic";
}
}

let pList = new LinkedList();
pList.append("Laxman")
pList.append("Nirmala")
pList.append("Satayanjali")
pList.append("Sandeep")
console.log(pList)
// pList.cycle()
console.log(pList)
console.log(pList.checkCycle())
