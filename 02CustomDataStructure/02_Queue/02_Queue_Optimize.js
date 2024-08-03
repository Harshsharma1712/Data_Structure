class Queue {
    constructor(){
        this.items = {}
        this.rear = 0;    //Key
        this.front = 0;   //Key
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue

console.log("Is Queue empty: "+queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log("Size of Queue: "+queue.size())
queue.print()

console.log("Front element remove is: "+queue.dequeue())
// console.log("Front element remove is: "+queue.dequeue())

queue.print()
console.log("Front peek value is: "+queue.peek()); 