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

  preOrderTraversal(node = this.root) {
    if (!node) return;

    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  inOrderTraversal(node = this.root) {
    if (!node) return;

    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  postOrderTraversal(node = this.root) {
    if (!node) return;

    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.value);
  }

  levelOrderTraversal() {
    if (!this.root) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
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

    let queue = [this.root];
    let nodeTodelete = null;
    let lastNode = null;
    let parentOfLastNode = null;

    while (queue.length > 0) {
      let node = queue.shift();

      if (node.value === value) {
        nodeTodelete = node;
      }

      if (node.left) {
        parentOfLastNode = node;
        queue.push(node.left);
      }

      if (node.right) {
        parentOfLastNode = node;
        queue.push(node.right);
      }

      lastNode = node;
    }

    if (nodeTodelete && lastNode) {
      nodeTodelete.value = lastNode.value;

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

binaryTree.preOrderTraversal();

binaryTree.levelOrderTraversal();

console.log(binaryTree.searchValue(20));
console.log(binaryTree.searchValue(40));

console.log(binaryTree.getHeight());

console.log(binaryTree.countNodes());

console.log(binaryTree.countLeafNodes());

binaryTree.deleteNode(25);

binaryTree.levelOrderTraversal();