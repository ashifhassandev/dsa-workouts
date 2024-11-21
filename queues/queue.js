// 1. First Non-repeating Character in a Stream:

const firstNonRepeatingCharacter = (stream) => {
    const queue = [];
    const charCount = {};

    for (let char of stream) {
        charCount[char] = (charCount[char] || 0) + 1;
        queue.push(char);
    }

    while (queue.length > 0 && charCount[queue[0]] > 1) {
        queue.shift();
    }

    if (queue.length > 0) {
        return queue[0];
    } else {
        return 'No non repeating characters found.';
    }
};

console.log(firstNonRepeatingCharacter('aabbccdeef'));


// 2. Circular Queue Implementation:

class CircularQueue {
    constructor(size) {
        this.queue = new Array(size).fill(null);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log('Queue is full.');
            return;
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    dequeue() {
        if (this.front === -1) {
            console.log('Queue is empty.');
            return;
        }

        const dequeuedValue = this.queue[this.front];
        this.queue[this.front] = null;

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return dequeuedValue;
    }

    isEmpty() {
        return this.front === -1;
    }

    peek() {
        if (this.front === -1) {
            console.log('Queue is empty.');
            return;
        } else {
            return this.queue[this.front];
        }
    }

    display() {
        console.log('Queue:', this.queue);
    }
};

const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log('Element removed from the front:', circularQueue.dequeue());

console.log('Is the queue empty:', circularQueue.isEmpty());

circularQueue.display();


// 3. Given an array nums and a sliding window size k, find the maximum value in each sliding window of size k:

const array = [1, 3, -1, -3, 5, 3, 6, 7];

const findMaximumValue = (nums, k) => {
    const result = [];
    const dequeue = [];

    for (let i = 0; i < nums.length; i++) {
        if (dequeue.length > 0 && dequeue[0] <= i - k) {
            dequeue.shift();
        }

        while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
            dequeue.pop();
        }

        dequeue.push(i);

        if (i >= k - 1) {
            result.push(nums[dequeue[0]]);
        }
    }

    return result;
};

console.log(findMaximumValue(array, 3));