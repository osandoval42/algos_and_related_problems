class Graph(object):
	def __init__(self):
		self.nodes = [];

	def addNode(self, node):
		self.nodes.append(node);

class Node(object):
	def __init__(self, key):
		self.requires = [];
		self.permits = [];
		self.key = key;
		self.seen = False;
		self.hasRequirementsBeingSearched = False

	def addRequirement(self, requirement):
		self.requires.append(requirement);
		requirement.permits.append(self);

def buildOrder(graph):
	path = [];
	for node in graph.nodes:
		if (not node.seen):
			addToPath(node, path);
	return path;

def addToPath(node, path):
	if node.seen == False:
		if (node.hasRequirementsBeingSearched == True):
			raise IndexError("CYCLE");
		node.hasRequirementsBeingSearched = True
		for requirement in node.requires:
			addToPath(requirement, path)
		node.seen = True
		node.hasRequirementsBeingSearched = False
		path.append(node.key);

def test():
	a = Node('a')
	b = Node('b')
	c = Node('c')
	d = Node('d')
	e = Node('e')
	f = Node('f')
	d.addRequirement(a)
	b.addRequirement(f)
	d.addRequirement(b)
	a.addRequirement(f)
	c.addRequirement(d)

	# f.addRequirement(d)

	graph = Graph()
	graph.addNode(a)
	graph.addNode(b)
	graph.addNode(c)
	graph.addNode(d)
	graph.addNode(e)
	graph.addNode(f)
	path = buildOrder(graph)
	print path

test()