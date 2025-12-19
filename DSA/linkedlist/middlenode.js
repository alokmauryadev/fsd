class Node{
    constructor(value) {
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
    append(x){
        let newNode = new Node(x);
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this.length

    }
    prepend(x){
        let newNode = newNode(x)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this.length
    }
    top(){
        return this.tail.value
    }

    print(){
        let result = []
        let current = this.head
        if(!current) return "No  Node Avaialble"
        while(current!==null){
            result.push(current.value)
            current = current.next
        }
    }
    middle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            console.log(slow)
            console.log(fast)
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }
}

let l1 = new LinkedList()
l1.append(1)
l1.append(2)
l1.append(3)
l1.append(4)
l1.append(5)

// console.log(l1.print())
console.log(l1.middle())
