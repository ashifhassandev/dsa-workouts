// Binary Search Tree implementation

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
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

  preOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);

    return result;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);

    return result;
  }

  postOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);

    return result;
  }

  deleteNode(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteNode(value, node.left);
    } else if (value > node.value) {
      node.right = this.deleteNode(value, node.right);
    } else {
      if (!node.left && !node.right) return null;

      if (!node.right) return node.left;

      if (!node.left) return node.right;

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

  isValueExists(value, node = this.root) {
    if (!node) return false;

    if (value === node.value) return true;

    return value < node.value
      ? this.isValueExists(value, node.left)
      : this.isValueExists(value, node.right);
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

const bst = new BST();

bst.insert(15);
bst.insert(5);
bst.insert(20);
bst.insert(10);
bst.insert(25);

bst.inOrderTraversal();

console.log(bst.preOrderTraversal());

console.log(bst.postOrderTraversal());

console.log(bst.isValueExists(9));

console.log(bst.findClosestValue(17));

bst.deleteNode(20);

bst.inOrderTraversal();