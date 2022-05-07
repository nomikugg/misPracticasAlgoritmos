function Stack() {
  this._size = 0;
  this.storage = [];
}

Stack.prototype.push = function (data) {
  this.storage[this._size] = data;
  this._size++;
  return this._size;
};

Stack.prototype.pop = function () {
  this._size--;
  let elDeleted = this.storage[this._size];
  delete this.storage[this._size];
  return elDeleted;
};
class Pila {
  constructor() {
    this._sizze = 0;
    this.storage = [];
  }
}

//Test
newStack = new Stack();
nuevaPila = new Pila();
newStack.push(5);
newStack.push(4);
newStack.push(3);
newStack.push(8);
newStack.push(8);
newStack.push(10);

console.log(newStack);
console.log(typeof newStack); //object
console.log(typeof nuevaPila);
console.log(newStack.storage[0]); //5
console.log(newStack._size);
console.log(newStack.storage);

const pushData = newStack.push(7);
console.log(newStack.storage);
console.log(newStack._size);
console.log(pushData);
//console.log del metodo pop
console.log("AAAAAAAAAAAAAAAAAAA");
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack._size);
console.log(newStack._size);
console.log(newStack.storage);

newStack.push(45);
console.log(newStack.storage);
