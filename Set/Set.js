// implement a mathematic Set
class Set {
  constructor() {
    this._set = {};
  }

  add(obj){ // O(1)
    let str = this.hashFunc(obj);
    if (!this.checkDup(str)) {
      this._set[str] = obj;
    }
    return this;
  }

  hashFunc(obj) {
    return `${obj.name}&${obj.id}`;
  }

  delete(obj) { // O(1)
    let str = this.hashFunc(obj);
    if (this.checkDup(str)) {
      delete this._set[str];
      return true;
    } else {
      return false;
    }
  }

  has(obj) { // O(1)
    return !!this._set[this.hashFunc(obj)];
  }

  checkDup(str) { // O(1)
    return this._set[str];
  }

  clear() {
    this._set = {};
  }
}


const set = new Set();
set.add({name:"wangming",id:9874});
console.log(set);
set.delete({name:"wangming",id:9874});
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
