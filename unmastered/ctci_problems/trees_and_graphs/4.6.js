/*
	given node.  
	If right exists:
		set right to ret
		while left of ret is true set ret to left
	else
		set currNode to node
		set parent to currNode.parent
		while parent exists
			if parent.left is child then return parent
			set currNode to parent 
			set parent to currNode.parent

		return parent

*/

class Node{
	constuctor(val){
		this.val = val;
		this.left = undefined;
		this.right = undefined;
		this.parent = undefined;
	}
}

Node.prototype.addLeft(child){
	this.left = child;
	child.parent = this;
}


Node.prototype.addRight(child){
	this.right = child;
	child.parent = this;
}

function successor(node){
	if (node.right){
		let ret = node.right;
		while(ret.left){
			ret = ret.left;
		}
		return ret;
	} else {
		let currNode = node;
		let parent = currNode.parent;
		while(parent){
			if (parent.left === currNode){
				return parent;
			}
			currNode = parent;
			parent = currNode.parent;
		}
		return parent;
	}
}