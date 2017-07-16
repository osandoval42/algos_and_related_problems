"""
	Only do forward order list

"""














































def addForwardLists(l1, l2):
	res = LinkedList();
	l1PlaceOut = l1.countPlaces();
	l2PlaceOut = l2.countPlaces();
	l1Ptr = l1.head.next
	l2Ptr = l2.head.next

	while (l1PlaceOut > 0 or l2PlaceOut > 0):
		if l1PlaceOut > l2PlaceOut:

		elif l2PlaceOut > l1PlaceOut:

		else:
			thisSum = l1Ptr.val + l2Ptr.val
			thisPlaceNode = Node(thisSum % 10);

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

	def countPlaces(self):
		currPtr = self.head.next;
		count = 0;
		while (currPtr != self.tail):
			count++;
			currPtr = currPtr.next;
		return count;

def addLists(l1, l2):
	sum = LinkedList();
	l1Ptr = l1.head.next;
	l2Ptr = l2.head.next;
	remainder = 0;
	while (l1Ptr != l1.tail or l2Ptr != l2.tail):
		thisSum = remainder
		if (l1Ptr != l1.tail):
			thisSum += l1Ptr.val
			l1Ptr = l1Ptr.next;
		if (l2Ptr != l2.tail):
			thisSum += l2Ptr.val
			l2Ptr = l2Ptr.next
		thisDigitNode = Node(thisSum % 10)
		remainder = thisSum / 10
		sum.addNode(thisDigitNode);
	if remainder > 0:
		sum.addNode(remainder);
	return sum;

def test():
	l1 = LinkedList();
	l2 = LinkedList();

	l1.addNode(Node(7))
	l1.addNode(Node(1))
	l1.addNode(Node(6))
	l1.addNode(Node(1))

	l2.addNode(Node(5))
	l2.addNode(Node(9))
	l2.addNode(Node(2))

	res = addLists(l1, l2);
	res.prnt()

test();