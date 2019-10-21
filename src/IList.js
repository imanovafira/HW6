function IList() {}

IList.prototype.clear = function() {console.log('IList cleat'); }
IList.prototype.toString = function() {console.log('IList toString');}
IList.prototype.getSize = function() {console.log('IList getSize');}
IList.prototype.push = function() {console.log('IList push');}
IList.prototype.pop = function() {console.log('IList pop');}
IList.prototype.shift = function() {console.log('IList shift');}
IList.prototype.unshift = function() {console.log('IList unshift');}
IList.prototype.Splice = function() {console.log('IList splice');}
IList.prototype.Slice = function() {console.log('IList Slice')};
IList.prototype.sort = function() {console.log('Ilist sort')};

module.exports = IList;