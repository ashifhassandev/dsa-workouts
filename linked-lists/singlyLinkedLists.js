class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let current = this.head;

      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  insertNode(value, index) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.prepend();
    } else {
      const newNode = new Node(value);
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  }

  removeFromIndex(index) {
    if (index < 0 || index > this.size) return;

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      removedNode = current.next;
      current.next = removedNode.next;
    }

    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let current = this.head;

      while (current.next && current.next.value !== value) {
        current = current.next;
      }

      if (current.next) {
        let removedNode = current.next;
        current.next = removedNode.next;
        this.size--;
      }

      return;
    }
  }

  findMiddleElement() {
    if (this.head === null && this.head.next === null) {
      console.log("The list is empty or too short.");
      return;
    }

    let fast = this.head;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

  deleteMiddleElement() {
    const middleElement = linkedList.findMiddleElement();

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== middleElement.value) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    this.size--;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.isEmpty());

linkedList.append(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.append(25);

linkedList.printList();

linkedList.insertNode(9, 3);

linkedList.printList();

linkedList.removeFromIndex(4);

linkedList.printList();

linkedList.removeValue(30);

linkedList.printList();

console.log("Middle Element:", linkedList.findMiddleElement());