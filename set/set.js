// implement a mathematic Set
class Set {
  constructor() {
    this._set = {};
  }

  add(val){ // O(1)
    const str = this.hash(val);
    this._set[val] = val;
    return this;
  }

  hash(val) {
    return JSON.stringify(val);
  }

  delete(val) { // O(1)
    if (this.has(val)) {
      const str = this.hash(val);
      delete this._set[val];
      return true;
    } else {
      return false;
    }
  }

  has(val) { // O(1)
    return !!this._set[this.hash(val)];
  }

  clear() {
    this._set = {};
  }

  size() {
    return Object.keys(this._set).length;
  }

  *[Symbol.iterator]() {
    for (let key in this._set) {
      yield this._set[key];
    }
  }

}


const set = new Set();
set.add({name:"wangming",id:9874});
console.log(set);
set.add({name:"wangming",id:9874});
console.log(set);
set.add({name:"zhenghao",id:1234}).add({name:"Ambar",id:2345});
console.log(set);
console.log(set.has({name:"zhenghao",id:1234}));
set.delete({name:"zhenghao",id:1234});
console.log(set);
console.log(set.has({name:"Ambar",id:2345}));
set.add({name:"zhenghao",id:3421}).add({name:"zhenghao",id:3421,foo(){}})


console.log(set.has({name:"Ambar",id:2345}));
console.log(...set);
// set.clear();
// console.log(set);
set.add('Bob')
   .add('John')
   .add({name:"k9999",id:9999})
   .add(NaN)
   .add(NaN)
   .add(NaN)

console.log(...set);

console.log(set.size());

console.log(JSON.stringify({name:"zhenghao",id:3421,foo(){}}));
