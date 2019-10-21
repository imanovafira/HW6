const { assert } = require ("chai");
let DoubleLinkedList = require ("../src/DoubleLinkedList");

describe ('DoubleLinkedList', () => {
    it('should be an object', () => {
        const dlist = new DoubleLinkedList();

        assert.isObject(dlist);

    });
});

describe('DoubleLinkedList.clear ()', () =>{
    it('should return size = 0 (undefined)',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);

    }); 

    it('should return size = 0 "[]" ',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    });
    
    it('should return size =0 [apple]',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    });
    
    it('should return size =0 [apple, orange]',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    });   

    it('should return size =0 [apple]',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    });

    it('should return size =0 [apple, orange, grape, lemon, fig, lime]',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    });    
});

describe('DoubleLinkedList.init ()', () =>{
    it('should return size = 0 (undefined)',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    }); 

    it('should return size = [] ',() => {
        const dlist = new DoubleLinkedList();
        const expectedString = "[]";
        const expectedSize = 0;


        dlist.clear();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    }); 

    it('should return size = [1] ',() => {
        const dlist = new DoubleLinkedList();
        const value = [1];
        const expectedString = "[1]";
        const expectedSize = 1;
        const actual = dlist.toString();


        dlist.init(value);

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(actual,expectedString);
    }); 

    it('should return size = [1, 2] ',() => {
        const dlist = new DoubleLinkedList();
        const value = [1, 2];
        const expectedString = "[1, 2]";
        const expectedSize = 2;
        const actual = dlist.toString();


        dlist.init(value);

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(actual,expectedString);
    }); 

    it('should return size = [1, 2, 3, 4, 5, 6] ',() => {
        const dlist = new DoubleLinkedList();
        const value = [1, 2, 3, 4, 5, 6];
        const expectedString = "[1, 2, 3, 4, 5, 6]";
        const expectedSize = 6;
        


        dlist.init(value);

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    }); 
});

describe('DoubleLinkedList.push ()', () =>{
    it('should return size of DoubleLinkedList', () => {
        const dlist = new DoubleLinkedList();
        const expectedString = dlist.toString();
        const expectedSize = 0;


        dlist.push();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);

    }); 
    
    it('should return size of DoubleLinkedList', () => {
        const dlist = new DoubleLinkedList();
        const value = []; 
        const expectedString = dlist.toString();
        const expectedSize = value.length;
        

        dlist.push();

        assert.deepEqual(dlist.getSize(),expectedSize);
        assert.deepEqual(dlist.toString(),expectedString);
    }); 

    it('should expected Array size = 1', () => {
        const dlist = new DoubleLinkedList();
        const value = [1];
        const expectedString = dlist.toString();
        const expectedSize = value.length;
        const actual = dlist.toString();
    
        dlist.push(value);
        
        
        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });

    it('should expected Array size = 2', () => {
        const dlist = new DoubleLinkedList();
        const value = [1,2];
        const expectedString = dlist.toString();
        const expectedSize = value.length;
        const actual = dlist.toString();
    
        dlist.push(value);
        
        
        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });

    it('should expected Array size = 5', () => {
        const dlist = new DoubleLinkedList();
        const value = [1,2,3,4,5];
        const expectedString = dlist.toString();
        const expectedSize = value.length;
        const actual = dlist.toString();
    
        dlist.push(value);
        
        
        assert.deepEqual(dlist.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });
});

describe('DoubleLinkedList.pop()', () => {

    it('delete last element of Array and return it', () => {
        const dlist = new DoubleLinkedList();
        const value = [21, 3, 17];
        const last = value.length - 1;
        const expected = [17];
    
        const actual = dlist.pop(value);
    
        assert.deepEqual(actual, expected);
    });
});

describe('unshift(number) returns new size of DoubleLinkedList', () => {
    it('should returns new size', () => {
        const dlist = new DoubleLinkedList();
        const value = 5;
        const expectedSize = dlist.unshift();

        const actual = dlist.unshift(value);

        assert.deepEqual(actual, expectedSize); 
    });
});

describe('shift() returns the first element of DoubleLinkedList;', () => {
    it('should returns the first element', () => {
        const dlist = new DoubleLinkedList();
        const value = [1, 2, 3];
        const first = value[0];
        const expected = 1;
        dlist.init(value);

        const actual = dlist.shift(value);

        assert.deepEqual(actual, expected);
    });
}); 

describe('DoubleLinkedList splice', () => {
    it('should returns array of deleted elements', () => {
        const dlist = new DoubleLinkedList();
        const value = [2, 4, 6, 5];
        const expected = [2, 4];

        const actual = arList.toSplice(value);

        assert.deepEqual(actual, expected);
    });

    it('should return empty array', () => {
        const arList = new DoubleLinkedList();
        const value = [2, 4];
        const expected = (undefined);

        const actual = arList.toSplice(value);

        assert.deepEqual(actual, expected);
    });
});

describe('DoubleLinkedList slice', () => {
    it('should return copy first two element', () => {
        const dList = new DoubleLinkedList();
        const value = [2, 4, 6, 8];
        const expectedSlice = [2, 4];

        actual = dList.toSlice(value);

        assert.deepEqual(actual, expectedSlice);
    });
});
