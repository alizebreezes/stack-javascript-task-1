// Your implementation goes here
module.exports = class Stack {
  constructor(...elements) {
    this.elements = elements;
    this.size = this.elements.length;
    this.top = this.elements[this.size - 1];
  }

  // Adds new element
  push(newElement) {
    this.elements.push(newElement);
    this.size = this.elements.length;
  }

  // Checks if elements is empty
  isEmpty() {
    return this.elements.length == 0;
  }

  // Removes last element
  pop() {
    if (this.elements.length == 0) {
      return null;
    } else {
      return this.elements.pop();
    }
  }

  // Returns last element
  peek() {
    return this.top;
  }

  // Swaps last two elements positions
  swap() {
    if (this.elements.length == 0) {
      return null;
    } else {
      let top = this.elements[this.size - 1];
      let newTop = this.elements[this.size - 2];

      this.elements[this.size - 1] = this.elements[this.size - 2];
      this.elements[this.size - 2] = top;
      this.top = newTop;

      console.log(top);
      console.log(this.elements);
      console.log(this.top);

      return this.top;
    }

    // var temp = this.elements[this.elements.length - 1];
    // this.elements[this.elements.length - 1] = this.elements[
    //   this.elements.length - 2
    // ];
    // this.elements[this.elements.length - 2] = temp;
  }
};
