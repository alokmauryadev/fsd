class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value){
    const newNode = new Node(value)
    if(!this.head) {
        this.head = newNode
        this.tail = newNode
    }
    else{
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++
    return this;
  }

  append(value){
    const newNode = new Node(value);
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }
    else{
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
    return
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

  // delete by value - 1st occurence
  delete(value){
    let current = this.head
    if(value===current.value){
        this.head = this.head.next
        this.length--
        if(this.length===0) this.tail = null
        return;
    }
    while(current.next !== null && current.next.value !== value){
        current = current.next
    }

    if(current.next !==null){
      current.next = current.next.next
      if(current.next === null){
        this.tail = current
      }
      this.length--
    }
  }
}

let data = new LinkedList()
data.append(3)
data.append(4)
data.append(5)
data.print()
data.delete(4)
data.print()