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

  insertLevelOrder(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
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

  levelOrderTraversal() {
    if (!this.root) return;

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  searchValue(value) {
    if (!this.root) return false;

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.value === value) return true;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return false;
  }

  getHeight(node = this.root) {
    if (!node) return 0;

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  countNodes(node = this.root) {
    if (!node) return 0;

    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  countLeafNodes(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
  }

  deleteNode(value) {
    if (!this.root) return null;

    const queue = [this.root];
    let nodeToDelete = null;
    let lastNode = null;
    let parentOfLastNode = null;

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.value === value) {
        nodeToDelete = current;
      }

      if (current.left) {
        parentOfLastNode = current;
        queue.push(current.left);
      }

      if (current.right) {
        parentOfLastNode = current;
        queue.push(current.right);
      }

      lastNode = current;
    }

    if (nodeToDelete && lastNode) {
      nodeToDelete.value = lastNode.value;

      if (!parentOfLastNode) {
        this.root = null;
        return;
      }

      if (parentOfLastNode.left === lastNode) {
        parentOfLastNode.left = null;
      }

      if (parentOfLastNode.right === lastNode) {
        parentOfLastNode.right = null;
      }
    }
  }
}

const binaryTree = new BinaryTree();

binaryTree.insertLevelOrder(15);
binaryTree.insertLevelOrder(5);
binaryTree.insertLevelOrder(20);
binaryTree.insertLevelOrder(25);
binaryTree.insertLevelOrder(10);

console.log(binaryTree.preOrderTraversal());

console.log(binaryTree.levelOrderTraversal());

console.log(binaryTree.searchValue(20));
console.log(binaryTree.searchValue(40));

console.log(binaryTree.getHeight());

console.log(binaryTree.countNodes());

console.log(binaryTree.countLeafNodes());

binaryTree.deleteNode(25);

console.log(binaryTree.levelOrderTraversal());