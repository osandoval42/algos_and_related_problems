class Node(object):
	def __init__(self, val):
		self.val = val;
		self.next = None;
		self.prev = None;

class LinkedList(object):
	def __init__(self):
		self.head = Node(None);
		self.tail = Node(None);
		self.head.next = self.tail;
		self.tail.prev = self.head;
		self.head.prev = None;
		self.tail.next = None;

	def addNode(self, node):
		self.tail.prev.next = node;
		node.prev = self.tail.prev;
		self.tail.prev = node;
		node.next = self.tail;

	def prnt(self):
		currPtr = self.head.next
		while (currPtr != self.tail):
			print currPtr.val;
			currPtr = currPtr.next;

"""
	get length A.  Get Length B.  In the process of doing so check if last nodes are equal, if they arnt then just return None
	  Whichever one is bigger, move head ptr down by the difference between 2 lengths.  
	now move each ptr until they are equal, and return it.
"""
def intersection(listA, listB):

