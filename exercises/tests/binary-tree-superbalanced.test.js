const {
  BinaryTreeNode,
  isBalanced 
} = require('../binary-tree-superbalanced.js');

test('full tree', () => {
  let treeRoot = new BinaryTreeNode(5);
  let leftNode = treeRoot.insertLeft(8);
  leftNode.insertLeft(1);
  leftNode.insertRight(2);
  let rightNode = treeRoot.insertRight(6);
  rightNode.insertLeft(3);
  rightNode.insertRight(4);
  expect(isBalanced(treeRoot)).toBe(true);
});

test('unbalanced tree', () => {
  let treeRoot = new BinaryTreeNode(7);
  let leftNode = treeRoot.insertLeft(18);
  let leftNode2 = leftNode.insertLeft(11);
  leftNode2.insertLeft(1);
  leftNode.insertRight(20);
  treeRoot.insertRight(6);
  expect(isBalanced(treeRoot)).toBe(false);
});
