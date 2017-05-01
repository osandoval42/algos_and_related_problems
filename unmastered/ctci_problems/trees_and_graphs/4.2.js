/*
	given startIdx, length, arr, and node:
	find the midpoint between startIdx and length. Creae a node with it
	Compare to Node from previous call and tack on left right appropriately.
	Pass this new node to 2 recursive calls, each of which takes the remaining left and right side
	(base case is length == 0)
*/

class Node{
	constuctor(val){
		this.val = val;
		this.left = undefined;
		this.right = undefined;
	}
}

function minimalTree(arr){ //Linear time
	return recursHelper(arr, 0, arr.length);
}

function recursHelper(arr, startIdx, length, parentNode){
	if (length === 0){
		return;
	}

	let midIdx = Math.floor(length / 2) + startIdx;
	let newNode = new Node(arr[midIdx]);

	if (parentNode){
		if (parentNode.val < newNode.val){
			parentNode.right = newNode;
		} else {
			parentNode.left = newNode;
		}
	}
	recursHelper(arr, startIdx, midIdx - startIdx, newNode);
	recursHelper(arr, midIdx + 1, length - (midIdx - startIdx + 1)), newNode);

	return parentNode
}
