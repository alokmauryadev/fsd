class StackImpl {
    #items
    top = -1;
    constructor(){
        this.#items = []
    }

    push(x) {
        if (this.top === -1) {
            this.top = this.top + 1;
            this.#items[this.top] = x;
        } else {
            this.#items[this.top + 1] = x;
            this.top++;
        }
    }

    pop() {
        if (this.top <= 0) {
            this.top = -1;
            this.#items.length = 0
        } else {
            this.#items.length = this.top
            this.top--
        }

    }

    topValue() {
        if (this.top === -1) {
            return "No value";
        }
        return this.#items[this.top];
    }
}

let s1 = new StackImpl();
s1.push(5);
s1.push(6)
s1.pop()
// s1.topValue()
console.log(s1.topValue());


// in js we really do not need top because we do have length property in js