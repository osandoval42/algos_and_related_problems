class Trie(object):
	def __init__(self):
		self.head = Node()

	def get(self, key):
		return self.getRecurs(self.head, key, 0)

	def getRecurs(self, currNode, key, nextCharIdx):
		if currNode is None:
			return None
		if nextCharIdx == len(key):
			return currNode.val
		nextChar = key[nextCharIdx]
		return self.getRecurs(currNode.children[ord(nextChar)], key, nextCharIdx + 1)

	def set(self, key, val):
		self.head = self.setRecurs(self.head, key, 0, val)

	def setRecurs(self, currNode, key, nextCharIdx, val):
		if currNode is None:
			currNode = Node()
		if nextCharIdx == len(key):
			currNode.val = val
		else:
			nextChar = key[nextCharIdx]
			currNode.children[ord(nextChar)] = self.setRecurs(currNode.children[ord(nextChar)], key, nextCharIdx + 1, val)
		return currNode

class Node():
	def __init__(self):
		self.children = []
		for i in range(256):
			self.children.append(None)
		self.val = None

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
