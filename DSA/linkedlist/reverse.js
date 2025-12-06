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
      print(){
    const result = []
    let current = this.head;
    while (current!=null){
        result.push(current.value)
        current = current.next
    }
    console.log(result.join(' -> '));
  }

    reverse(){
        let prev = null
        let current = this.head
        let next = null

        this.tail = this.head
        while(current!==null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev;
        return this
        

    }
}

let pList = new LinkedList();
pList.append("Laxman")
pList.append("Nirmala")
pList.append("Satayanjali")
pList.append("Sandeep")
// console.log(pList)
// pList.cycle()
pList.reverse()
// console.log(pList.reverse())
console.log(pList.head)