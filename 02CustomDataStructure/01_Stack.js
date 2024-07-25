class Stack {
    constructor(){
        this.items = [];
    }
    // push function
push(element)
{
    // push element into the items
    this.items.push(element);
}

// pop function
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return 'Underflow'
    return this.items.pop();
}

// peek function
peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}

// isEmpty function
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}

// printStack function
printStack()
{
    let str = "";
    for (let i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}

// create obj of class stack
let stack = new Stack();

console.log("Is Stack Empty: "+stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)


stack.printStack()