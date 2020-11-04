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