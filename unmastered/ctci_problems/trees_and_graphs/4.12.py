class Node(object):
	def __init__(self, val):
		self.left = None
		self.right = None
		self.val = val

class CountWrap(object):
		def __init__(self):
			self.count = 0

def pathsWithSums(root):
	countWrap = CountWrap()
	pathsWithSumsRecurs(root, [], countWrap)
	return countWrap.count

def pathsWithSumsRecurs(node, currNeed, countWrap): # node.val = -7, currNodeNeeds = 7.   node.val = 7, currNodeNeeds -7
	if (node is None):
		return;

	currNodeNeeds = node.val * -1
	currNeed.append(0)
	for needIdx in range(len(currNeed)):
		currNeed[needIdx] += currNodeNeeds
		if (currNeed[needIdx] == 0):
			countWrap.count += 1

	pathsWithSumsRecurs(node.left, currNeed, countWrap)
	pathsWithSumsRecurs(node.right, currNeed, countWrap)

	currNeed.pop()
	for needIdx in range(len(currNeed)):
		currNeed[needIdx] -= currNodeNeeds



def test():
	node = Node(5)
	node.left = Node(15)
	node.right = Node(-7)
	node.left.eft = Node(8)
	node.left.right = Node(-20)
	node.left.right.left = Node(0)
	node.left.right.right = Node(1)
	node.left.right.right.left = Node(-1)
	node.right.right = Node(2)
	node.right.left = Node(0)
	node.right.left.left = Node(0)
	node.right.left.right = Node(3)
	node.right.left.right.left = Node(0)
	node.right.left.right.right = Node(-1)

	count = pathsWithSums(node)
	print count

test()
	

