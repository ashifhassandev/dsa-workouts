// 1. Three types of traversals:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
        if (newNode.value < node.value) {
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
        if (!this.root) return console.log("The BST is empty.");

        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    preOrderTraversal(node = this.root, result = []) {
        if (!this.root) return console.log("The BST is empty.");

        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }

        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (!this.root) return console.log("The BST is empty.");

        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }

        return result;
    }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(10);
binarySearchTree.insert(15);
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(18);

console.log(`InOrderTraversal:`);
binarySearchTree.inOrderTraversal();
console.log(`PreOrderTraversal: ${binarySearchTree.preOrderTraversal()}`);
console.log(`PostOrderTraversal: ${binarySearchTree.postOrderTraversal()}`);


// 2. Finding if specific values exist:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
        if (newNode.value < node.value) {
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

    isValueExists(value, node = this.root) {
        if (!node) return false;
        if (value === node.value) return true;

        return value < node.value
            ? this.isValueExists(value, node.left)
            : this.isValueExists(value, node.right);
    }
}

const binarySearchTree1 = new BinarySearchTree();

binarySearchTree1.insert(10);
binarySearchTree1.insert(15);
binarySearchTree1.insert(11);
binarySearchTree1.insert(7);
binarySearchTree1.insert(3);
binarySearchTree1.insert(9);
binarySearchTree1.insert(18);

console.log(`The given value exists: ${binarySearchTree1.isValueExists(7)}`);


// 3. Deleting nodes from a BST:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
        if (newNode.value < node.value) {
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

    deleteNode(value, node = this.root) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteNode(value, node.left);
        } else if (value > node.value) {
            node.right = this.deleteNode(value, node.right);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let minRight = this.findMinNode(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(minRight.value, node.right);
        }

        return node;
    }

    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binarySearchTree2 = new BinarySearchTree();

binarySearchTree2.insert(10);
binarySearchTree2.insert(15);
binarySearchTree2.insert(11);
binarySearchTree2.insert(7);
binarySearchTree2.insert(3);
binarySearchTree2.insert(9);
binarySearchTree2.insert(18);

binarySearchTree2.deleteNode(7)

console.log(`Tree after deleting the specified value:`);
binarySearchTree2.inOrderTraversal();


// 4. Find Closest Value:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
        if (newNode.value < node.value) {
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

    findClosestValue(target, node = this.root, closest = this.root?.value) {
        if (!node) return closest;

        if (Math.abs(target - node.value) < Math.abs(target - closest)) {
            closest = node.value;
        }

        return target < node.value
            ? this.findClosestValue(target, node.left, closest)
            : this.findClosestValue(target, node.right, closest);
    }
}

const binarySearchTree3 = new BinarySearchTree();

binarySearchTree3.insert(10);
binarySearchTree3.insert(15);
binarySearchTree3.insert(11);
binarySearchTree3.insert(7);
binarySearchTree3.insert(3);
binarySearchTree3.insert(9);
binarySearchTree3.insert(18);

console.log(`Closest value to the target: ${binarySearchTree3.findClosestValue(2)}`);


// 5. Check if a binary tree is a valid Binary Search Tree:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
        if (newNode.value < node.value) {
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

    isValidBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) return false;

        return this.isValidBST(node.left, min, node.value) && this.isValidBST(node.right, node.value, max);
    }
}

const binarySearchTree4 = new BinarySearchTree();

binarySearchTree4.insert(10);
binarySearchTree4.insert(15);
binarySearchTree4.insert(11);
binarySearchTree4.insert(7);
binarySearchTree4.insert(3);
binarySearchTree4.insert(9);
binarySearchTree4.insert(18);

console.log(`The binary tree is a valid Binary Search Tree: ${binarySearchTree4.isValidBST()}`);