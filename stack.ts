class Stack<T>{
    private items:T[];
    constructor(){
        this.items = [];
    }
    push = (item:T) => this.items.push(item);
    peek = ():T => this.items[this.items.length - 1];
    size = ():number => this.items.length;
    isEmpty = ():boolean => this.items.length == 0;
    clear = () => this.items = [];
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());