function Stack(){
    let items = [];
    this.push = (element) => {
        items.push(element)
    }
    this.isEmpty = () => {
        return items.length === 0;
    }
}