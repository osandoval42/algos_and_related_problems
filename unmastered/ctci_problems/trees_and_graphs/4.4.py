

class Node(object):
	def __init__(self, val):
		self.val = val;
		self.left = None;
		self.right = None;



def balancedRecurse(node, currHeight):
	if node is None:
		return currHeight;

	leftHeight = balancedRecurse(node.left, currHeight + 1);
	rightHeight = balancedRecurse(node.right, currHeight + 1);

	if (leftHeight == False or rightHeight == False):
		return False
	if (abs(leftHeight - rightHeight) > 1):
		return False
	else:
		return max(leftHeight, rightHeight);

def isBalanced(patriarch):
	res = balancedRecurse(patriarch, 0);
	return res if res == False else True


def test():
	patriarch = Node(0);
	patriarch.right = Node(1);
	patriarch.right.left = Node(0);
	patriarch.right.right = Node(0);
	patriarch.right.right.right = Node(0);
	patriarch.right.right.right.right = Node(0);
	patriarch.left = Node(0);
	patriarch.left.left = Node(0);
	print isBalanced(patriarch);

test();


