class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(value){
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
    pop(){
        if(!this.top) return null;
        const poppedElement = this.top
        this.top = this.top.next
        this.size--
        return poppedElement.value
    }
    peek(){
        return this.top ? this.top.value :null;
    }
}

let ls = new LinkedListStack()
let results = [ls.push(1),ls.push(2),ls.peek(),ls.pop(),ls.push(3),ls.pop(),ls.peek()]
for (const element of results) {
    console.log(element)
}
console.log