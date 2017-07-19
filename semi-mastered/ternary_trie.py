class Node(object):
	def __init__(self, key):
		self.left = None
		self.mid = None
		self.right = None
		self.key = key
		self.val = None

class Trie(object):
	def __init__(self):
		self.head = None

	def get(self, key):
		return self.getRecurs(self.head, key, 0)

	def getRecurs(self, currNode, key, keyIdx):
		if currNode is None:	
			return None
		currChar = key[keyIdx]
		if ord(currNode.key) < ord(currChar):
			return self.getRecurs(currNode.left, key, keyIdx)
		elif ord(currNode.key) > ord(currChar):
			return self.getRecurs(currNode.right, key, keyIdx)
		elif keyIdx < len(key) - 1:
			return self.getRecurs(currNode.mid, key, keyIdx + 1)
		else:	
			return currNode.val

	def set(self, key, val):
		self.head = self.setRecurs(self.head, key, 0, val)

	def setRecurs(self, currNode, key, keyIdx, val):
		currChar = key[keyIdx]
		if currNode is None:
			currNode = Node(currChar)

		if ord(currNode.key) < ord(currChar):
			currNode.left = self.setRecurs(currNode.left, key, keyIdx, val)
		elif ord(currNode.key) > ord(currChar):
			currNode.right = self.setRecurs(currNode.right, key, keyIdx, val)
		else:
			keyIdx += 1
			if (keyIdx == len(key)):
				currNode.val = val
			else:
				currNode.mid = self.setRecurs(currNode.mid, key, keyIdx, val)
		return currNode

def test():
	trie = Trie()
	trie.set("abc", 1)
	trie.set("abd", 2)
	trie.set("abe", 3)
	trie.set("abcde", 4)
	trie.set("zba", 5)
	trie.set("zcd", 6)
	trie.set("abc", 0)
	trie.set("abd", 0)

	print trie.get("abc") == 0
	print trie.get("abd") == 0
	print trie.get("abe") == 3
	print trie.get("abcde") == 4
	print trie.get("zba") == 5
	print trie.get("zcd") == 6
	print trie.get("zbad") is None

test()
