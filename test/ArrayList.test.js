const { assert } = require("chai");
const ArrayList = require("../src/ArrayList");

describe ('ArrayList', () => {
    it('should be an object', () => {
        const alist = new ArrayList();

        assert.isObject(alist);

    });
});

describe('ArrayList.clear ()', () =>{
    it('should return size = 0 (undefined)',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.clear();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);

    }); 

    it('should return size =0 "[]" ',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.clear();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    });
    
    it('should return size =0 [apple]',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.clear();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    });
    
    it('should return size =0 [apple, orange]',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.clear();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    });   

    it('should return size =0 [apple]',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.clear();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    });

    it('should return size =0 [apple, orange, grape, lemon, fig, lime]',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.clear();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    });    
});

describe('ArrayList.init ()', () =>{
    it('should return size = 0 (undefined)',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.init();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    }); 

    it('should return size = [] ',() => {
        const alist = new ArrayList();
        const expectedString = "[]";
        const expectedSize = 0;


        alist.init();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    }); 

    it('should return size = [1] ',() => {
        const alist = new ArrayList();
        const value = [1];
        const expectedString = "[1]";
        const expectedSize = 1;
        const actual = alist.toString();


        alist.init(value);

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    }); 

    it('should return size = [1, 2] ',() => {
        const alist = new ArrayList();
        const value = [1, 2];
        const expectedString = "[1, 2]";
        const expectedSize = 2;
        const actual = alist.toString();


        alist.init(value);

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    }); 

    it('should return size = [1, 2, 3, 4, 5, 6] ',() => {
        const alist = new ArrayList();
        const value = [1, 2, 3, 4, 5, 6];
        const expectedString = "[1, 2, 3, 4, 5, 6]";
        const expectedSize = 6;
        


        alist.init(value);

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    }); 
});

describe('ArrayList.push ()', () =>{
    it('should return size of ArrayList', () => {
        const alist = new ArrayList();
        const expectedString = alist.toString();
        const expectedSize = 0;


        alist.push();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);

    }); 
    
    it('should return size of ArrayList', () => {
        const alist = new ArrayList();
        const value = []; 
        const expectedString = alist.toString();
        const expectedSize = value.length;
        

        alist.push();

        assert.deepEqual(alist.getSize(),expectedSize);
        assert.deepEqual(alist.toString(),expectedString);
    }); 

    it('should expected Array size = 1', () => {
        const alist = new ArrayList();
        const value = [1];
        const expectedString = alist.toString();
        const expectedSize = value.length;
        const actual = alist.toString();
    
        alist.push(value);
        
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });

    it('should expected Array size = 2', () => {
        const alist = new ArrayList();
        const value = [1,2];
        const expectedString = alist.toString();
        const expectedSize = value.length;
        const actual = alist.toString();
    
        alist.push(value);
        
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });

    it('should expected Array size = 5', () => {
        const alist = new ArrayList();
        const value = [1,2,3,4,5];
        const expectedString = alist.toString();
        const expectedSize = value.length;
        const actual = alist.toString();
    
        alist.push(value);
        
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(actual, expectedString);
    });
});

describe('ArrayList.pop()', () => {
    
    it('delete last element of Array and return it', () => {
        const alist = new ArrayList();
        const value = [21, 3, 17];
        const last = value.length - 1;
        const expected = last;
    
        const actual = alist.pop(value);
    
        assert.deepEqual(actual, expected);
    });   
});

describe('unshift(number) returns new size of ArrayList', () => {
    it('should returns new size', () => {
        const aList = new ArrayList();
        const value = 5;
        const expectedSize = aList.unshift();

        const actual = aList.unshift(value);

        assert.deepEqual(actual, expectedSize); 
    });
});

describe('shift() returns the first element of ArrayList;', () => {
    it('should returns the first element', () => {
        const aList = new ArrayList();
        const value = [1, 2, 3];
        const first = value[0];
        const expected = first;

        const actual = aList.shift(value);

        assert.deepEqual(actual, expected);
    });
}); 

describe('ArrayList splice', () => {
    it('should return array of deleted elements', () => {
        const aList = new ArrayList();
        const value = [2, 4, 6, 5];
        const expected = [2, 4];

        const actual = aList.toSplice(value);

        assert.deepEqual(actual, expected);
    });

    it('should return empty array', () => {
        const aList = new ArrayList();
        const value = [2, 4];
        const expected = (undefined);

        const actual = aList.toSplice(value);

        assert.deepEqual(actual, expected);
    });
});


describe('ArrayList slice', () => {
    it('should return copy first two element', () => {
        const aList = new ArrayList();
        const value = [2, 4, 6, 8];
        const expectedSlice = [2, 4];

        actual = aList.toSlice(value);

        assert.deepEqual(actual, expectedSlice);
    });
});


describe('ArrayList splice', () => {
    it('should returns array of deleted elements', () => {
        const aList = new ArrayList();
        const value = [2, 4, 6, 4];
        const expected = (2, 4);

        const actual = aList.toSplice(value);

        assert.deepEqual(actual, expected);
    });

    it('should return empty array', () => {
        const aList = new ArrayList();
        const value = [2, 1];
        const expected = undefined;

        const actual = aList.toSplice(value);

        assert.deepEqual(actual, expected);
    });
});

describe('sort(function(first, seconod)', () => {
    it('should sorts the array in place', () => {
        const aList = new ArrayList();
        const value = [3, 1, 5, 2];
        const expected = [1, 2, 3, 5];

        const actual = aList.toSort(value);

        assert.deepEqual(actual, expected); 
    });
});