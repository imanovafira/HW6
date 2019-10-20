const IList = require('./IList');

const ArrayList = function() {
    IList.apply(this, arguments);

    this._size = 0;
    this._array = [];
}

ArrayList.prototype = Object.create(IList.prototype);
ArrayList.prototype.constructor = ArrayList;


ArrayList.prototype.clear = function() {
    this._size = 0;
    this._array = [];
} 

ArrayList.prototype.init = function(arr) {
    this.clear();

    if(Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++){
            this._array[i] = arr[i];
            this._size++;
        }
    }

}

ArrayList.prototype.getSize = function() {
    return this._size;
} 

ArrayList.prototype.toString = function(arr) {
    let result = '[';

    for(let i = 0; i < this._array.length; i++){
        result += this._array[i];
        if(i < this._array.length - 1) {
            result += ', ';
        }
    }
    result += ']';

    return result;
}
ArrayList.prototype.push = function(arr) {
    if(Array.isArray(arr)){
for(let i = 0; i < arr.length; i++){
this._array[i] = arr[i];
    this._size++;
    }
    }
}

ArrayList.prototype.pop = function(arr) {
    if(Array.isArray(arr)){
        let last = arr.length -1;
        arr.length = last;
    }
    return value.length;
}
ArrayList.prototype.unshift = function(arr) {
    if(value===undefined) return undefined;
    tempArr = [arr];

    if(Array.isArray(arr)){
        for(let i = 0; i < array.length ; i++){
            tempArr[i + 1] = array[i];
            this._size++;
            
            return tempArr.length;
        }
    }
}

ArrayList.prototype.shift =  function(arr) {
    if(Array.isArray(arr)){
        let first = value[0];
        let tempArr = [];
        for(let i = 1; i < arr.length; i++){
            tempArr[i - 1] = arr[i];
        }
        return first;  
    }
}

module.exports = ArrayList;

