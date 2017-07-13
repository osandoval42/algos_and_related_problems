def removeDups(head):
	currOriginal = head
	while ((not currOriginal is None) and (not currOriginal.next is None)):
		parent = currOriginal;
		currNode = parent.next;
		while (not currNode is None):
			if (currNode.val == currOriginal.val):
				parent.next = currNode.next;
			else:
				parent = currNode;

			currNode = currNode.next

		currOriginal = currOriginal.next;



class Node(object):
	def __init__(self, val):
		self.val = val;
		self.next = None


def printList(head):
	currNode = head;
	while (not currNode is None):
		print currNode.val;
		currNode = currNode.next


def test():
	head = Node(1);
	head.next = Node(1);
	head.next.next = Node(2);
	head.next.next.next = Node(3);
	head.next.next.next.next = Node(2);
	removeDups(head);
	printList(head);
	#expect 123

#test()


# def faketest():
# 	x = Node(1);
# 	y = Node(2);
# 	x.next = y;
# 	print (x.next == y)

# faketest()