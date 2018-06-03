// implement a mathematic Set
class Set {
  constructor() {
    this._set = {};
  }

  add(obj){ // O(1)
    if (!this.has(obj)) {
      const str = this.hash(obj);
      this._set[str] = obj;
    }
    return this;
  }

  hash(obj) {
    return JSON.stringify(obj);
  }

  delete(obj) { // O(1)
    if (this.has(obj)) {
      const str = this.hash(obj);
      delete this._set[str];
      return true;
    } else {
      return false;
    }
  }

  has(obj) { // O(1)
    return !!this._set[this.hash(obj)];
  }

  clear() {
    this._set = {};
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
console.log(set.has({name:"zhenghao",id:1234}));
console.log(set.has({name:"Ambar",id:2345}));
set.clear();
console.log(set);
set.add('Bob')
   .add('John');
console.log(set.has('Bob'));
console.log(set.has('bob'));
console.log(set.has('John'));
