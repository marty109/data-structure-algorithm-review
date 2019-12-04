class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    const newNode = new Node(key)
    const insertNode = (node, newNode) => {
      if(newNode.key < node.key) {
        if(node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if(node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
    if(!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(8)
tree.insert(12)
tree.insert(13)