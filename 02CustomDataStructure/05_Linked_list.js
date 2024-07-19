class Node{
    constructor(value){
        this.value = value
        this.next = null    //Pointer that pointing toward next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

// Time complecity of prepend is O(1)

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
// Time complecity of append is O(n)

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
        } else {
            let prev = this.head
            while(prev.next){      //Jab tak truthy value ho 
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return console.log("Invalid Indnex !")
        }
        if(index === 0){
            this.prepend(value)
        } else{
            const node = new Node(value)
            let prev = this.head
            
            for(let i = 0; i<index-1; i++){
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node 
            this.size++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        } else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList()

// console.log(`Is list empty: ${list.isEmpty()}`);
// console.log(`List Size: ${list.getSize()}`);
// list.print()

// list.prepend(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.print()

// list.append(10)
// list.print()


// list.prepend(20)
// list.prepend(30)

// list.append(20)
// list.append(30)

// list.print()

list.insert(10,0)
list.print()

list.insert(20,0)
list.print()

list.insert(30,1)
list.print()

list.insert(40,2)
list.print()
console.log(list.getSize());

list.insert(50,6)
