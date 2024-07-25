class Queue{
    constructor(capicity){
        this.items = new Array(capicity)
        this.capicity = capicity
        this.currentLength = 0;
        this.rear = -1
        this.front = -1
    }

    isFull(){   //Check Queue is full or not
        return this.currentLength === this.capicity
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(element){
        if(!this.isEmpty()){
            this.rear = (this.rear + 1) % this.capicity
            this.items[this.rear] = element
            this.currentLength += 1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capicity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(!this.isEmpty()){
            console.log("Queue is empty");
        } else{
            let i
            let str = ''
            for(i = this.front; i!==this.rear; i=(i+1) % this.capicity){
                str = this.items[i] + ""
            }
            str = this.items[i]
            console.log(str);
        }
    }
    
}