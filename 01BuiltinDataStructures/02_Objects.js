const obj = {
    name: 'Bruce',
    age: 25,
    sayMyName:function(){
        console.log(this.name);
    }
}

console.log(obj);
console.log(obj.sayMyName());