"""
	getLeftCombos
	getRightCombos
	Merge them together
	add currNode to beginning of array
"""
def answer(currNode):
	ret =  startingArrays(currNode)
	map(lambda arr: arr.reverse(), ret)
	return ret

def startingArrays(currNode):
	if currNode is None:
		return [];
	if currNode.left is None and currNode.right is None:
		return [[currNode.val]];
		
	leftPossibilities = startingArrays(currNode.left)
	rightPossibilities = startingArrays(currNode.right)

	possibilities = merge(leftPossibilities, rightPossibilities)
	for possibility in possibilities:
		possibility.append(currNode.val);
	return possibilities;



#make sure merge works for [] [data]
def merge(leftPossibilities, rightPossibilities):
	if len(leftPossibilities) == 0:
		return rightPossibilities
	if len(rightPossibilities) == 0:
		return leftPossibilities

	mergedPossibilities = []
	rightIdxToLeftIdxAfter = getRightIdxToLeftIdxAfter(len(rightPossibilities[0]), len(leftPossibilities[0]))
	for leftPoss in leftPossibilities:
		for rightPoss in rightPossibilities:
			for mapp in rightIdxToLeftIdxAfter:
				mergedPossibilities.append(singleMerge(leftPoss, rightPoss, mapp))
	return mergedPossibilities

def singleMerge(a, b, bIdxToAIdxAfter):
	ret = []
	bIdxToAIdxAfterPtr = 0
	for i in range(len(a) + 1):
		while (bIdxToAIdxAfterPtr < len(bIdxToAIdxAfter) and bIdxToAIdxAfter[bIdxToAIdxAfterPtr] == i):
			ret.append(b[bIdxToAIdxAfterPtr])
			bIdxToAIdxAfterPtr += 1
		if i < len(a):
			ret.append(a[i])
	return ret


def getRightIdxToLeftIdxAfter(thingsToPlaceCount, placesToPlaceBefore):
	possibilities = []
	thingsToPlaceBackTrack = []
	for i in range(thingsToPlaceCount):
		thingsToPlaceBackTrack.append(0)

	currIdx = thingsToPlaceCount - 1
	while True:
		if currIdx > 0:
			while thingsToPlaceBackTrack[currIdx] < thingsToPlaceBackTrack[currIdx - 1]:
				thingsToPlaceBackTrack[currIdx] += 1
		if currIdx == thingsToPlaceCount - 1:
			possibilities.append(thingsToPlaceBackTrack[:])
		thingsToPlaceBackTrack[currIdx] += 1
		if thingsToPlaceBackTrack[currIdx] > placesToPlaceBefore:
			thingsToPlaceBackTrack[currIdx] = 0
			if (currIdx > 0):
				currIdx -= 1
			else:
				break
		else:
			if currIdx < thingsToPlaceCount - 1:
				currIdx += 1

	return possibilities







class Node(object):
	def __init__(self, val):
		self.left = None
		self.right = None
		self.val = val

def test():
	node = Node(60);
	node.right = Node(72)
	node.left = Node(50)
	node.left.left = Node(45)
	node.right.right = Node(80)
	# node.right.left = Node(68)
	# node.right.right.left = Node(76)
	# node.right.right.right = Node(82)
	print answer(node);
	# # testArr = getRightIdxToLeftIdxAfter(2, 4)
	# # print testArr
	# testLeft = ['p', 'p', 'p']
	# testRight = ['q', 'q']
	# ret = merge(testLeft, testRight)
	# print ret

test()