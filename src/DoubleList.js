const IList = require('./IList')

// const DoubleList = function() {
//     this._size = 0;
//     this._array = [];
// }
function DoubleList() {

    this._length = 0;

    this.head = null;

    this.tail = null;

};

DoubleList.prototype = Object.create(IList.prototype);
DoubleList.prototype.constructor = DoubleList;

const Node = function(data) {

    this.data = data;

    this.next = null;

}

DoubleList.prototype.init = function (array) {

    let uzel = new Node(value);
if(

};

DoubleList.prototype.clear = function () {
    this._root = null;
    this._tail = null;
    this._size = 0;
};

DoubleList.prototype.shift = function () {
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


module.exports = DoubleList; 