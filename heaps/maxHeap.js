class MaxHeap {
	constructor() {
		this.heap = [];
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	getLeftChildIndex(i) {
		return 2 * i + 1;
	}

	getRightChildIndex(i) {
		return 2 * i + 2;
	}

	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}

	insert(value) {
		this.heap.push(value);
		this.heapifyUp();
	}

	heapifyUp() {
		let index = this.heap.length - 1;

		while (
			index > 0 &&
			this.heap[this.getParentIndex(index)] < this.heap[index]
		) {
			this.swap(this.getParentIndex(index), index);
			index = this.getParentIndex(index);
		}
	}

	remove() {
		if (this.heap.length === 0) {
			console.log("Heap is empty.");
			return null;
		}

		if (this.heap.length === 1) return this.heap.pop();

		const root = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown();
		return root;
	}

	heapifyDown() {
		let index = 0;

		while (this.getLeftChildIndex(index) < this.heap.length) {
			let largerChildIndex = this.getLeftChildIndex(index);
			let rightChildIndex = this.getRightChildIndex(index);

			if (
				rightChildIndex < this.heap.length &&
				this.heap[rightChildIndex] > this.heap[largerChildIndex]
			) {
				largerChildIndex = rightChildIndex;
			}

			if (this.heap[index] >= this.heap[largerChildIndex]) break;

			this.swap(index, largerChildIndex);
			index = largerChildIndex;
		}
	}

	removeValue(value) {
		const index = this.heap.indexOf(value);

		if (index === -1) return null;

		this.heap[index] = this.heap[this.heap.length - 1];
		this.heap.pop();
		this.heapifyDown();
		this.heapifyUp();
	}

	peek() {
		if (this.heap.length === 0) {
			console.log("Heap is empty.");
			return null;
		}

		return this.heap[0];
	}

	print() {
		console.log(this.heap);
	}
}

const maxHeap = new MaxHeap();

maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(25);
maxHeap.insert(15);

maxHeap.print();

maxHeap.removeValue(25);

maxHeap.print();

maxHeap.remove();

maxHeap.print();

maxHeap.insert(19);

maxHeap.print();