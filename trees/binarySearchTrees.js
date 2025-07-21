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

        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // 1. Traversals
    inOrderTraversal(node = this.root) {
        if (!node) return;

        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    preOrderTraversal(node = this.root, result = []) {
        if (!node) return result;

        result.push(node.value);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);

        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (!node) return result;

        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.value);

        return result;
    }

    // 2. Value Exists
    isValueExists(value, node = this.root) {
        if (!node) return false;

        if (value === node.value) return true;

        return value < node.value
            ? this.isValueExists(value, node.left)
            : this.isValueExists(value, node.right);
    }

    // 3. Delete Node
    delete(value, node = this.root) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.delete(value, node.left);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let minRight = this.findMinNode(node.right);
            node.value = minRight.value;
            node.right = this.delete(minRight.value, node.right);
        }

        return node;
    }

    findMinNode(node) {
        while (node.left) node = node.left;
        return node;
    }

    // 4. Find Closest Value
    findClosestValue(target, node = this.root, closest = this.root?.value) {
        if (!node) return closest;

        if (Math.abs(target - node.value) < Math.abs(target - closest)) {
            closest = node.value;
        }

        return target < node.value
            ? this.findClosestValue(target, node.left, closest)
            : this.findClosestValue(target, node.right, closest);
    }

    // 5. Is Valid BST
    isValidBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        
        if (node.value <= min || node.value >= max) return false;

        return this.isValidBST(node.left, min, node.value) &&
               this.isValidBST(node.right, node.value, max);
    }
}

// Example usage
const bst = new BinarySearchTree();

[10, 15, 11, 7, 3, 9, 18].forEach(value => bst.insert(value));

console.log("InOrderTraversal:");
bst.inOrderTraversal();

console.log("PreOrderTraversal:", bst.preOrderTraversal());
console.log("PostOrderTraversal:", bst.postOrderTraversal());

console.log("Does value 7 exist?:", bst.isValueExists(7));

bst.delete(7);
console.log("Tree after deleting 7:");
bst.inOrderTraversal();

console.log("Closest value to 2:", bst.findClosestValue(2));
console.log("Is valid BST:", bst.isValidBST());