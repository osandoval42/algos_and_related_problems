var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;
var LinkedListNode = require('../../../mastered/data_structures/linked_list').Node;


/*
	pass depth level down at each level of recursion, along with arr of linked lists and curr node.
	if node is undefined return;
	if level exists in array, append curr node to that linked list.  Pass left and right down with new lvl
	else create a new linked list for that depth and append the node.
*/

class Node{
	constuctor(val){
		this.val = val;
		this.left = undefined;
		this.right = undefined;
	}
}

function listOfDepths(AncestorNode){
	return recursHelper(AncestorNode, [], 0);
}

function recursHelper(treeNode, depths, nodeDepth){
	if (!treeNode){return ;}

	if (depths.length <= nodeDepth){
		depths.push(new LinkedList());
	}
	let newNode = new Node(treeNode.val);
	depths[nodeDepth].addNode(newNode)

	recursHelper(treeNode.left, depths, nodeDepth + 1);
	recursHelper(treeNode.right, depths, nodeDepth + 1);

	return depths;
}