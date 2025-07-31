// Given an array nums and a sliding window size k, find the maximum value in each sliding window of size k:

const nums = [1, 3, -1, -3, 5, 3, 6, 7];

const findMaximumValue = (arr, k) => {
	const result = [];
	const dequeue = [];

	for (let i = 0; i < arr.length; i++) {
		if (dequeue.length > 0 && dequeue[0] <= i - k) {
			dequeue.shift();
		}

		while (dequeue.length > 0 && arr[dequeue[dequeue.length - 1]] <= arr[i]) {
			dequeue.pop();
		}

		dequeue.push(i);

		if (i >= k - 1) {
			result.push(arr[dequeue[0]]);
		}
	}

	return result;
};

console.log(findMaximumValue(nums, 3));


// Implementation of Queue

class Queue {
	constructor() {
		this.items = {};
		this.front = 0;
		this.rear = 0;
	}

	enqueue(item) {
		this.items[this.rear] = item;
		this.rear++;
	}

	dequeue() {
		if (this.isEmpty()) return null;

		const item = this.items[this.front];
		delete this.items[this.front];
		this.front++;

		return item;
	}

	peek() {
		return this.isEmpty() ? null : this.items[this.front];
	}

	isEmpty() {
		return this.front === this.rear;
	}

	getSize() {
		return this.rear - this.front;
	}

	print() {
		const result = [];

		for (let i = this.front; i < this.rear; i++) {
			result.push(this.items[i]);
		}

		console.log(result.join(" <- "));
	}
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(25);
queue.enqueue(20);

queue.print();

console.log(queue.getSize());

console.log(queue.peek());

console.log(queue.dequeue());

queue.print();

console.log(queue.getSize());

console.log(queue.isEmpty());