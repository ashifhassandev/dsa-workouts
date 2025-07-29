class MinHeap {
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
      this.heap[this.getParentIndex(index)] > this.heap[index]
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

  removeValue(value) {
    const index = this.heap.indexOf(value);

    if (index === -1) return null;

    this.heap[index] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    this.heapifyUp();
  }

  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
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

const minHeap = new MinHeap();

minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(30);
minHeap.insert(25);
minHeap.insert(15);

minHeap.print();

minHeap.removeValue(25);

minHeap.print();

minHeap.remove();

minHeap.print();

minHeap.insert(19);

minHeap.print();