class BinaryTree {
	constructor(tree = []) {
		this.root = null;// 树根
		this.Node = key => {
			// 生成一个新的子树
			const _obj = Object.create(null, {});
			_obj.key = key;
			_obj.left = null;
			_obj.right = null;
			return _obj;
		};
		// 初始化二叉树
		if (typeof tree === 'number') {
			this.insert(tree);
		} else if (Array.isArray(tree)) {
			this.bulkInsert(tree);
		} else {
			console.error('请输入Number类型或者Array类型的参数');
		}
	}
	insert(key) {
		// 添加一个新子树
		const newNode = this.Node(key);
		const _insertNode = (node, newNode) => {
			// 判断新二叉树的值和原有节点的值
			if (newNode.key < node.key) {
				if (node.left === null) {
					// 判断左节点是否为空
					node.left = newNode;
				} else {
					_insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					// 判断右节点是否为空
					node.right = newNode;
				} else {
					_insertNode(node.right, newNode);
				}
			}
		};
		if (this.root === null) {
			// 如果没有根节点，那么把传入的值当根节点
			this.root = newNode;
		} else {
			// 如果有根节点，那么把传入的值插到二叉树上
			_insertNode(this.root, newNode);
		}
	}
	bulkInsert(nodes) {
		nodes.forEach(key => {
			// 遍历数组，插入子树
			this.insert(key);
		});
	}
	showTree() {
		// 返回二叉树对象
		return this.root;
	}

	inOrderTraverse(fn) {
		const inOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				inOrderTraverseNode(node.left, callback);
				callback(node.key);
				inOrderTraverseNode(node.right, callback);
			}
		};
		inOrderTraverseNode(this.root, fn);
	}

	preOrderTraverse(fn) {
		const preOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				callback(node.key);
				preOrderTraverseNode(node.left, callback);
				preOrderTraverseNode(node.right, callback);
			}
		};
		preOrderTraverseNode(this.root, fn);
	}

	postOrderTraverse(fn) {
		const postOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				postOrderTraverseNode(node.left, callback);
				postOrderTraverseNode(node.right, callback);
				callback(node.key);
			}
		};
		postOrderTraverseNode(this.root, fn);
	}

	min() {
		let node = this.root;
		if (node) {
			while (node && node.left !== null) {
				node = node.left;
			}
			return node.key;
		}
	}

	max() {
		let node = this.root;
		if (node) {
			while (node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
	}


	search(key) {
		const searchNode = (node, key) => {
			if (node === null) {
				return false;
			}
			if (key < node.key) {
				return searchNode(node.left, key);
			} else if (key > node.key) {
				return searchNode(node.right, key);
			}
			return true;

		};
		return searchNode(this.root, key);
	}

	remove(key) {
		const findMinNode = (node, key) => {
			node = node || this.root;
			if (node) {
				while (node && node.left !== null) {
					node = node.left;
				}
				return node;
			}
			return null;
		};
		const removeNode = (node, key) => {
			if (node === null) {
				return null;
			}

			if (key < node.key) {
				node.left = removeNode(node.left, key);
				return node;
			} else if (key > node.key) {
				node.right = removeNode(node.right, key);
				return node;
			}
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			if (node.left !== null && node.right !== null) {
				const aux = findMinNode(node.right);
				node.key = aux;
				node.right = removeNode(node.right, aux.key);
				return node;
			}

		};
		this.root = removeNode(this.root, key);
	}
}

const nodes = [ 8, 3, 6, 4, 9, 11, 2, 5, 7 ];
const binaryTree = new BinaryTree(nodes);
console.log(binaryTree);
