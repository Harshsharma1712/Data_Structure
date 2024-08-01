class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return console.log(`Size of the list is: ${this.size}`)
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        } else{
            let curr = this.head
            let listValues = " "
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues);
        }
    }

    prepend(value){       //Inserting element in begning(spell wrong) of the list
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){      //Inserting element in the end of the list.
        const newNode = new Node(value);
  
      if (this.tail === null) {
        // If the list is empty, head and tail will both point to the new node
        this.head = newNode;
        this.tail = newNode;
      } else {
        // The current tail's next pointer will point to the new node
        this.tail.next = newNode;
        // Update the tail to the new node
        this.tail = newNode;
      }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return console.log("List is epmty.");
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return console.log(`Removed value from front is: ${value}`);
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return console.log("List is empty.");
        }
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        } else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return console.log(`Removed value from end is: ${value}`);
    }

}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.prepend(5)

list.print()

list.removeFromEnd()
list.print()

list.removeFromFront()
list.print()