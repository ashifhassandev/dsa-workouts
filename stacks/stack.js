// Reverse a stack (recursion)

const stack1 = [1, 2, 3, 4, 5];

const insertAtBottom = (stack, element) => {
  if (stack.length === 0) {
    stack.push(element);
  } else {
    const top = stack.pop();
    insertAtBottom(stack, element);
    stack.push(top);
  }
};

const reverseStack = (stack) => {
  if (stack.length > 0) {
    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
  }

  return stack;
};

console.log(reverseStack(stack1));


// Balanced Parentheses

const string = "({[]})()";

const checkBalancedPair = (str) => {
  const stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of str) {
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || map[stack.pop()] !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(checkBalancedPair(string));

// Stack implementation

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return "Cannot pop from an empty stack.";

    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty.";

    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

console.log(stack.pop());

stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);

stack.print();

console.log(stack.peek());

console.log(stack.getSize());

console.log(stack.pop());

stack.print();

console.log(stack.peek());