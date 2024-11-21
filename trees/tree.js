// 1. Height Calculation:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.value < newNode.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (this.root === null) {
            return console.log("Tree is empty.");
        }

        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    calculateheight(node = this.root) {
        if (!node) return 0;

        const leftHeight = this.calculateheight(node.left);
        const rightHeight = this.calculateheight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(10);
binaryTree.insert(3);
binaryTree.insert(21);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);
binaryTree.insert(6);

console.log(`Height of the Tree: ${binaryTree.calculateheight()}`);


// 2. Finding Leaf Nodes:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.value < newNode.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (this.root === null) {
            return console.log("Tree is empty.");
        }

        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    findLeaves(node = this.root, leaves = []) {
        if (!node) return leaves;

        if (!node.left && !node.right) {
            leaves.push(node.value);
        }

        this.findLeaves(node.left, leaves);
        this.findLeaves(node.right, leaves);

        return leaves;
    }
}

const binaryTree1 = new BinaryTree();

binaryTree1.insert(5);
binaryTree1.insert(10);
binaryTree1.insert(3);
binaryTree1.insert(21);
binaryTree1.insert(4);
binaryTree1.insert(7);
binaryTree1.insert(12);
binaryTree1.insert(18);
binaryTree1.insert(6);

console.log(`Leaves of the Tree: ${binaryTree1.findLeaves()}`);


// 3. Preorder Traversal:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.value < newNode.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (this.root === null) {
            return console.log("Tree is empty.");
        }

        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    preOrderReversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderReversal(node.left, result);
            this.preOrderReversal(node.right, result);
        }

        return result;
    }
}

const binaryTree2 = new BinaryTree();

binaryTree2.insert(5);
binaryTree2.insert(10);
binaryTree2.insert(3);
binaryTree2.insert(21);
binaryTree2.insert(4);
binaryTree2.insert(7);
binaryTree2.insert(12);
binaryTree2.insert(18);
binaryTree2.insert(6);

console.log(`Leaves of the Tree: ${binaryTree2.preOrderReversal()}`);