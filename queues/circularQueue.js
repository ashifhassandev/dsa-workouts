class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.size = size;
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  isFull() {
    return this.count === this.size;
  }

  isEmpty() {
    return this.count === 0;
  }

  getSize() {
    return this.size;
  }

  getItemCount() {
    return this.count;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }

    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }

    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.size;
    this.count--;

    console.log(item);
    return item;
  }

  print() {
    console.log(this.items);
  }
}

const circularQueue = new CircularQueue(5);

console.log(circularQueue.isEmpty());

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

circularQueue.print();

console.log(circularQueue.getItemCount());

circularQueue.enqueue(60);

circularQueue.dequeue();

circularQueue.print();

console.log(circularQueue.getItemCount());

console.log(circularQueue.getSize());

circularQueue.enqueue(60);
circularQueue.enqueue(70);

circularQueue.print();