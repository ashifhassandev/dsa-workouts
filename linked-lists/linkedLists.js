// 1. Create and Traverse a Singly Linked List:

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;            
            while (current.next !== null) {
                current = current.next;
            }
            
            current.next = newNode;
        }
    }
    
    printList() {
        if (this.head === null) {
            console.log('The list is empty.');
        }
        
        let current = this.head;    
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

linkedList.printList();


// 2. Insert a Node at the Beginning of a Singly Linked List:

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;         
            while (current.next !== null) {
                current = current.next;
            }
            
            current.next = newNode;
        }
    }
    
    insertHead(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        newNode.next = current;
        this.head = newNode;
    }
    
    printList() {
        if (this.head === null) {
            console.log('The list is empty.');
        }
        
        let current = this.head;      
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList1 = new LinkedList();

linkedList1.append(10);
linkedList1.append(20);
linkedList1.append(30);
linkedList1.append(40);

linkedList1.insertHead(5);

linkedList1.printList();


// 3. Delete a Node in the Middle of a Singly Linked List:

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;           
            while (current.next !== null) {
                current = current.next;
            }
            
            current.next = newNode;
        }
    }
    
    insertHead(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        newNode.next = current;
        this.head = newNode;
    }
    
    findMiddleElement() {
        if (this.head === null && this.head.next === null) {
            console.log('The list is empty or too short.');
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
        
        while (current !== null && current.value !== middleElement. value) {
            previous = current;
            current = current.next;
        }
        
        previous.next = current.next;
    }
    
    printList() {
        if (this.head === null) {
            console.log('The list is empty.');
        }
        
        let current = this.head;       
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList2 = new LinkedList();

linkedList2.append(10);
linkedList2.append(20);
linkedList2.append(30);
linkedList2.append(40);

linkedList2.insertHead(5);

linkedList2.deleteMiddleElement();

linkedList2.printList();