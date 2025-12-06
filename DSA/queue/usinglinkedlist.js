class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedQueue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    enqueue(val){
        const newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null;
        let temp = this.first
        if(this.first == this.last){
            this.last = null;
        }
            this.first = this.first.next
            this.size--;
            return temp.value
    }
}

let q1 = new LinkedQueue();

console.log(q1.enqueue(56))
console.log(q1.enqueue(23))
console.log(q1.dequeue())
console.log(q1)