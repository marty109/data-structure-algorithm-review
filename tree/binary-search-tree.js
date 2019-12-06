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

  inorderTraversal(callback) {
    const inorderTraversalNode = (node, callback) => {
      if (node !== null) {
        inorderTraversalNode(node.left, callback)
        callback(node.key)
        inorderTraversalNode(node.right, callback)
      }
    }
    inorderTraversalNode(this.root, callback)
  }

  preorderTraversal(callback) {
    const preorderTraversalNode = (node, callback) => {
      if (node !== null) {
        callback(node.key)
        preorderTraversalNode(node.left, callback)
        preorderTraversalNode(node.right, callback)
      }
    }
    preorderTraversalNode(this.root, callback)
  }

  postorderTraversal(callback) {
    const postorderTraversalNode = (node, callback) => {
      if (node !== null) {
        postorderTraversalNode(node.left, callback)
        postorderTraversalNode(node.right, callback)
        callback(node.key)
      }
    }
    postorderTraversalNode(this.root, callback)

  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(8)
tree.insert(12)
tree.insert(13)
console.log('inoder traversal :')
tree.inorderTraversal(value => { console.log(value) })
console.log('pre traversal :')
tree.preorderTraversal(value => { console.log(value) })
console.log('post traversal :')
tree.postorderTraversal(value => { console.log(value) })