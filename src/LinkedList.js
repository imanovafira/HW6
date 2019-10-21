function LinkedList() {
    let root = null;
    let size = 0;
    
    this.clear = () => {
        root = null;
        size = 0;
    }
    
    this.unshift = value => {
        const uzel = new Node(value);
    
        uzel.next = root;
        root = uzel;
        size++;
    }
    
    this.getSize = () => size;
    
    this.toString = () => {
        let result = '';
        let currentNode = root;
    
        result += '[';
    
        while(currentNode.next) {
            result += currentNode.value;
            if(currentNode.next){
                result += ', ';
            }
            currentNode = currentNode.next;
        }
        result += ']';
    
        return result;
    }
    
    this.init = arr => {
        this.clear();
    
        for(let i = arr.length-1; i >= 0; i--){
            const node = new Node(arr[i]);
            node.next = root;
            root = node;
            size++;
        }