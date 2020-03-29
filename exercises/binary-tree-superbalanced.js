class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const isBalanced = node => {
  let minDepth;
  let maxDepth;
  const nodeStack = new Array([node, 0]);

  while(nodeStack.length > 0) {
    const [node, depth] = nodeStack.pop();
    
    if (node.left === null && node.right === null) {
      if (minDepth !== undefined && maxDepth !== undefined) {
        if (Math.abs(depth - maxDepth) > 1 || 
            Math.abs(depth - minDepth) > 1) {
          return false;
        } else {
          if (depth < minDepth) minDepth = depth;
          if (depth > maxDepth) minDepth = depth;
        }
      } else {
        minDepth = depth;
        maxDepth = depth;
      }
    } else {
      if (node.left) {
        nodeStack.push([node.left, depth + 1]);
      }

      if (node.right) {
        nodeStack.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}

module.exports = { BinaryTreeNode, isBalanced }
