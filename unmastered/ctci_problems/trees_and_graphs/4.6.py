class Node(object):
	def __init__(self, val):
		self.parent = None
		self.left = None
		self.right = None
		self.val = val

def successor(node):
	if not node.right is None:
		return getLowestChild(node.right);
	else:
		return getFirstParentOfLeftChild(node);

def getFirstParentOfLeftChild(node):
	while (not node.parent is None):
		if node.parent.left == node:
			return node.parent
		else:
			node = node.parent
	return None

def getLowestChild(node):
	currNode = node;
	while (not currNode.left is None):
		currNode = currNode.left
	return currNode;
