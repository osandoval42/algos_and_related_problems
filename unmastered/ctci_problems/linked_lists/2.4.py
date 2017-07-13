

def swap(lead, trail, list):
	if lead.next == trail:
		leadPrev = lead.prev;
		lead.prev = trail;
		trail.prev = leadPrev
		trail.next.prev = lead;

		trailNext = trail.next
		trail.next = lead;
		lead.next = trailNext;
		trail.prev.next = trail;
	else:
		lead.prev.next = trail;
		lead.next.prev = trail;
		trail.prev.next = lead;
		trail.next.prev = lead;

		trailNext = lead.next;
		trailPrev = lead.prev;
		lead.next = trail.next
		lead.prev = trail.prev;
		trail.next = trailNext;
		trail.prev = trailPrev;


def partition(list, val):
	ltp = list.headPtr.next;
	gtoep = list.tailPtr.prev;
	while (True):
		while (ltp != list.tailPtr and ltp.val < val):
			ltp = ltp.next
		while (gtoep != list.headPtr and gtoep.val >= val):
			gtoep = gtoep.prev;
		if (gtoep == list.headPtr or ltp == list.tailPtr or gtoep.next == ltp):
			break;
		swap(ltp, gtoep, list);
		holder = ltp;
		ltp = gtoep;
		gtoep = holder;

def printList(list):
	currPtr = list.headPtr.next;
	while (currPtr != list.tailPtr):
		print currPtr.val;
		currPtr = currPtr.next;


class Node(object):
	def __init__(self, val):
		self.val = val;
		self.next = None;
		self.prev = None;

class LinkedList(object):
	def __init__(self):
		self.headPtr = Node(None);
		self.tailPtr = Node(None);
		self.headPtr.next = self.tailPtr;
		self.tailPtr.prev = self.headPtr;
		self.headPtr.prev = None;
		self.tailPtr.next = None;

	def addNode(self, node):
		self.tailPtr.prev.next = node;
		node.prev = self.tailPtr.prev;
		self.tailPtr.prev = node;
		node.next = self.tailPtr;

def test():
	list = LinkedList();
	list.addNode(Node(3));
	list.addNode(Node(5));
	list.addNode(Node(8));
	list.addNode(Node(5));
	list.addNode(Node(10));
	list.addNode(Node(2));
	list.addNode(Node(1));
	partition(list, 5);
	printList(list);

test();
