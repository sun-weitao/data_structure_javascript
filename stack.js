function Stack(){
    let items = [];
    this.push = (element) => {
        items.push(element)
    }
    this.isEmpty = () => {
        return items.length === 0;
    }
    this.peek = () => {
        return items[items.length - 1];
    }
    this.pop = () => {
        return items.pop();
    }
    this.size = () => {
        return items.length;
    }
    this.clear = () => {
        items = [];
    }
    this.print = () => {
        console.log(items.toString());
    }
}

// [111,'+',222+'*'+123]


function evalRPN(input){
    let stack = new Stack();
    let op1,op2;
    for(let item of input){
        switch(item){
            case '+':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 + op2);
                break;
            case '-':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 - op2);
                break;
            case '*':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 * op2);
                break;
            case '/':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 / op2);
                break;
            default:
                stack.push(Number(item));
                break;
        }
    }
    return stack.pop();
}

const arr = ['2','1','+','3','*'];
const arr2 = ["4", "13", "5", "/", "+"];
console.log(evalRPN(arr2));