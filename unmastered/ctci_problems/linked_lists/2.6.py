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

	# def countPlaces(self):
	# 	currPtr = self.head.next;
	# 	count = 0;
	# 	while (currPtr != self.tail):
	# 		count++;
	# 		currPtr = currPtr.next;
	# 	return count;

"""

	i increments the whole time
	when we find tail, create {mid: i / 2.0, secondHalf: ""}

	coming up:
		if i > mid then append char to {secondHalf}
		if i < mid then check if char === {secondHalf[i]}.  if so return, else return false
"""

def isPalindrome(list):
	res = palinRecurse(list.head.next, 0)
	return res != False

def palinRecurse(currNode, idx):
	if (currNode.next is None):
		mid =  idx / 2 - 0.5 if idx % 2 == 0 else idx / 2
		return {"mid": mid, "secondHalf": ""}

	data = palinRecurse(currNode.next, idx + 1)
	if data == False:
		return False;
	if (idx > data["mid"]):
		data["secondHalf"] += currNode.val;
	elif (idx < data["mid"]):
		if currNode.val != data["secondHalf"][idx]:
			return False
	return data


def test():
	oddLinkedList = LinkedList()
	oddLinkedList.addNode(Node("a"))
	oddLinkedList.addNode(Node("b"))
	oddLinkedList.addNode(Node("c"))
	oddLinkedList.addNode(Node("c"))
	oddLinkedList.addNode(Node("b"))
	oddLinkedList.addNode(Node("a"))
	if not isPalindrome(oddLinkedList):
		raise IndexError("fail 1")

	evenLinkedList = LinkedList()
	evenLinkedList.addNode(Node("a"))
	evenLinkedList.addNode(Node("b"))
	evenLinkedList.addNode(Node("c"))
	evenLinkedList.addNode(Node("z"))
	evenLinkedList.addNode(Node("c"))
	evenLinkedList.addNode(Node("b"))
	evenLinkedList.addNode(Node("a"))
	if not isPalindrome(evenLinkedList):
		raise IndexError("fail 2")


	fail = LinkedList()
	fail.addNode(Node("a"))
	fail.addNode(Node("b"))
	fail.addNode(Node("c"))
	fail.addNode(Node("z"))
	fail.addNode(Node("c"))
	fail.addNode(Node("b"))
	fail.addNode(Node("q"))
	if isPalindrome(fail):
		raise IndexError("fail 3")
	print "success"
test()

