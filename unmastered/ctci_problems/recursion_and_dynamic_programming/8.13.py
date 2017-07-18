class Box(object):
	def __init__(self, h, w, d):
		self.h = h
		self.w. = w
		self.d = d

def stackOfBoxes(boxes):
	boxes.sort(key = lambda box:(-box.d))
	cache = map(lambda x:[-1 -1], boxes)
	return recursHelper(boxes, 0, [], cache)

"""
if can take node and currNode cacheIsBetter than not taking Node
	take node

if can take node and not taking node cache is better:
	check min height and min width of that cache.  If its not a match then we must reiterate the no node call

if cant take node
check min height and min width of that cache.  If its not a match then we must reiterate the no node call
"""




def recursHelper(boxes, boxIdx, boxesUsed, cache):
	if boxIdx == len(boxes):
		return 0

	if cache[boxIdx][0] != -1:
		heightWithoutBox = cache[boxIdx][0]
	else:
		heightWithoutBox = recursHelper(boxes, boxIdx + 1, boxesUsed, cache)
		cache[boxIdx][0] = heightWithoutBox

	if cache[boxIdx][1] != -1:
		boxesUsed.append(boxes[boxIdx])
		heightWithBox = boxes[boxIdx].h + recursHelper(boxes, boxIdx + 1, boxesUsed, cache)
		boxesUsed.pop()
		cache[boxIdx][1] = heightWithBox
	else:
		heightWithBox = cache[boxIdx][1]

	if (heightWithBox > heightWithoutBox and (len(boxesUsed) == 0 or 
		(boxesUsed[len(boxesUsed) - 1].h >= boxes[boxIdx].h and boxesUsed[len(boxesUsed) - 1].w >= boxes[boxIdx].w))):
		return heightWithBox
	else:
		heightWithoutBox = recursHelper(boxes, boxIdx + 1, boxesUsed, cache)
		return max(heightWithBox, heightWithoutBox)





	



