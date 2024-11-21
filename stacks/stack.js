// 1. Reverse a Stack:

const stack1 = [1, 2 ,3 ,4, 5];

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


// 2. Balanced Parentheses:

const string = "({[]})()";

const isBalancePair = (str) => {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    
    for (let char of str) {
        if (map[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

console.log(isBalancePair(string));


 // 3. Design a stack that, in addition to push and pop, supports a getMin operation that returns the smallest element in the stack in constant time:

 class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }
    }

    pop() {
        const popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return popped;
    }

    display() {
        console.log('Stack:', this.stack);
    }

    getMin() {
        if (this.stack.length === 0) {
            return 'Stack is empty.';
        }  else {
            return this.minStack[this.minStack.length - 1];
        }
    }
};

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(5);

stack.display();

console.log('Popped:', stack.pop());

console.log('MinStack:', stack.getMin());