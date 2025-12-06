class QueueStack{
    constructor(){
        this.s1 = []
        this.s2 = []
    }
    enqueue(x){
        this.s1.push(x)
    }

    dequeue(){
        if(this.s1.length===0 && this.s2.length===0){
            return null
        }
        if(this.s2.length===0){
           while(this.s1.length>0){
            let el = this.s1.pop()
            this.s2.push(el)
           }
        }
        return this.s2.pop()
    }
    peek(){
    if(this.s1.length===0 && this.s2.length===0){
            return null
        }
            if(this.s2.length===0){
           while(this.s1.length>0){
            let el = this.s1.pop()
            this.s2.push(el)
           }
        }
        return this.s2[this.s2.length-1];
    }
    empty(){
    return this.s1.length===0 && this.s2.length===0;
    }
}

let q1 = new QueueStack()
console.log(q1.enqueue(5))
console.log(q1.enqueue(6))
console.log(q1.dequeue())