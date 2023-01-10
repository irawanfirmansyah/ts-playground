class BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinaryTree<T> {
  root: BinaryNode<T> | null;

  constructor(node?: BinaryNode<T>) {
    this.root = node || null;
  }

  preOrderTraversal() {
    const result: number[] = [];
    if (this.root === null) return result;

    const stack: Array<BinaryNode<T>> = [];
    while (stack.length > 0) {
      const curr = stack.pop();
    }
  }

  inOrderTraversal() {}

  postOrderTraversal() {}
}

function main() {
  const tree = new BinaryTree(new BinaryNode(5));
}

main();
