// a linked list is a linear data structure where it's element are called nodes, each nodes contain two data (value(the actual paylond) and next(reference to memory address of next node))

// we can get a node 4, until we get node 3, so each in linked list, we link the each node

// In JS, we do not have memory references, so we use object references so what is node, node is a struct (or an object) allocated to heap memory
// it exist independent of other nodes

// IT'S ACCESS IS O(n), not O(1

class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

// pitfall: if we lose the reference to a node(i.e. nothing points to it), the garbage Collector will delete it

// The Head and Tail

// Head: A pointer variable maintained by Linked list instance that refernce to first node object

// Tail: A pointer variable which reference to last node object.

// termination: the list ends when a node's next property is strict null.

// insertion or prepend

let head = new Node(5)
let newNode = new Node(10)
newNode.next = head;
head = newNode

console.log(newNode)


