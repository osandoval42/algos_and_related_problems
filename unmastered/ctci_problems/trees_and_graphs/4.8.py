class Node(object):
	def __init__(self, val):
		self.parent = None
		self.left = None
		self.right = None
		self.val = val

def firstCommonAncestor(node):
	