def kthLastElement(head, k): #1st last element = last. 
#thus when lead is none, answer is trailing, where trailing trails by k
	trailingPtr = head;
	leadingPtr = head;
	for i in range(k):
		trailingPtr = trailingPtr.next;
	while (not trailingPtr is None):
		trailingPtr = trailingPtr.next
		leadingPtr = leadingPtr.next
	return leadingPtr.val;



class Node(object):
	def __init__(self, val):
		self.val = val;
		self.next = None

def test():
	head = Node(3);
	head.next = Node(2);
	head.next.next = Node(1);
	print(kthLastElement(head, 3));
	print(kthLastElement(head, 2));
	print(kthLastElement(head, 1));

test();