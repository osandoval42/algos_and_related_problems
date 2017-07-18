class Node(object):
	def __init__(self, val):
		self.left = None
		self.right = None
		self.val = val

def checkSubtree(t1, t2):
	return True if recursCheckSubtree(t1, t2, []) == True else False;

#ret arr of bools
#passing in arr of (nodes to check or None)
def recursCheckSubtree(currNode, t2, currChecking):
	didMatchCurrChecking = []
	if (currNode is None):
		for nodeToCheck in currChecking:
			if nodeToCheck is None:
				didMatchCurrChecking.append(True)
			else:
				didMatchCurrChecking.append(False)
		return didMatchCurrChecking;

	didAppendNodeToCurrChecking = False
	if currNode.val == t2.val:
		didAppendNodeToCurrChecking = True
		currChecking.append(t2)

	leftChildrenToCheck = []
	rightChildrenToCheck = []
	for nodeToCheck in currChecking:
		if (nodeToCheck != False and not nodeToCheck is None and nodeToCheck.val == currNode.val):
			leftChildrenToCheck.append(nodeToCheck.left)
			rightChildrenToCheck.append(nodeToCheck.right)
		else: 
			leftChildrenToCheck.append(False)
			rightChildrenToCheck.append(False)
	leftResults = recursCheckSubtree(currNode.left, t2, leftChildrenToCheck)
	if leftResults == True:
		return leftResults;
	rightResults = recursCheckSubtree(currNode.right, t2, rightChildrenToCheck)
	if rightResults == True:
		return rightResults
	results = []
	for resIdx in range(len(leftResults)):
		results.append(leftResults[resIdx] and rightResults[resIdx]);

	if didAppendNodeToCurrChecking == True:
		currNodeIsHeadOfSubtree = results.pop()
		if (currNodeIsHeadOfSubtree == True):
			return currNodeIsHeadOfSubtree

	return results

def test():
	t2 = Node(1)
	t2.left = Node(2)
	t2.right = Node(3)
	t2.left.left = Node(4)

	t1 = Node(0)
	t1.left = Node(2)
	t1.right = Node(1)
	t1.right.right = Node(3)

	t1.right.right.left = Node(1)

	t1.right.left = Node(2)
	t1.left.left = Node(5)
	t1.left.right = Node(5)

	t1.left.left.left = Node(1)
	t1.left.left.left.left = Node(2)
	t1.left.left.left.right = Node(3)
	t1.left.left.left.left.left = Node(4)

	print checkSubtree(t1, t2)

test()


