const IList = require('./IList')

// const DoubleLinkedList = function() {
//     this._size = 0;
//     this._array = [];
// }
function DoubleLinkedList() {

    this._length = 0;

    this.head = null;

    this.tail = null;

};

DoubleLinkedList.prototype = Object.create(IList.prototype);
DoubleLinkedList.prototype.constructor = DoubleLinkedList;

const Node = function(data) {

    this.data = data;

    this.next = null;

}


DoubleLinkedList.prototype.clear = function () {
    this._root = null;
    this._tail = null;
    this._size = 0;
};

DoubleLinkedList.prototype.shift = function () {
    let tempNode = null;
    if(this._root === null && this._root !== 0) {
        return undefined;
    } else {
        tempNode = this._root.value;
        this._root.next = this._root;
        this.previous = null;
    }       
    this._size --;

    return tempNode;
}

DoubleLinkedList.prototype.init = function(value) {
    for (let i = 0; i < value.lenght; i++) {
        let node = new Node(value[i]);

        !this._root && (this._root = node);
        node._tail = this._tail;
        this._tail && (this._tail.next = node);
        this._tail = node;
        this._size++;
    }
};

DoubleLinkedList.prototype.getSize = function() {
    return this._size;
};

DoubleLinkedList.prototype.toString = function() {
    let result = '';

    let currentNode = this._root;

result += '[';

while(currentNode) {
    result += currentNode.value;
    if(currentNode.next){
    result += ', ';
}
    currentNode = currentNode.next;
}
result += ']'; 

return result;
};

DoubleLinkedList.prototype.push = function(value) {
    if(!value){
        return;
    } else {
        for(let i = 0; i < value.length; i++){
            let node = new Node(value[i]);

            !this._root && (this._root = node);
            node.previous = this._tail;
            this._tail && (this._tail.next = node);
            this._tail = node;
            this._size++;
        }
    }

    return this._size;
};


module.exports = DoubleLinkedList; 