function Graph(){
	this.nodes = [];
}
Graph.prototype.addNode = function(node){
	this.nodes.push(node);
}
function Node(key){
	this.key = key;
	this.edges = [];
}
Node.prototype.addEdge = function(edge){
	this.edges.push(edge);
}
function Edge(src, to, distance){
	this.distance = distance;
	this.to = to;
	src.addEdge(this);
}

function bellmanFordShortestPath(graph, srcNode, dstNode){
	// return {keyToParentKey, keyToDistanceTo};
	let maps = bellmanFord(graph, srcNode);
	printKeyToDist(maps.keyToDistanceTo);
	let pathDistance = maps.keyToDistanceTo[dstNode.key];
	let path = [];

	let currKey = dstNode.key;
	while (currKey !== undefined){
		path.unshift(currKey);
		currKey = maps.keyToParentKey[currKey];
	}
	return {pathDistance, path};
}

function printKeyToDist(keyToDist){
	let keys = Object.keys(keyToDist);
	keys.forEach((key) => {
		console.log(`${key} : ${keyToDist[key]}`);
	})
}

function bellmanFord(graph, srcNode){
	/*
		return map of key:parentKey
		return map of key:distanceTo
	*/
	let onQueue = {};
	let keyToParentKey = {};
	let keyToDistanceTo = {};
	let queue = [];
	graph.nodes.forEach((node) => {
		onQueue[node.key] = true;
		queue.push(node);
		keyToParentKey[node.key] = undefined;
		keyToDistanceTo[node.key] = Infinity;
	})
	keyToDistanceTo[srcNode.key] = 0;

	for (let passIdx = 0; passIdx < graph.nodes.length; passIdx++){
		let startingQueueLength = queue.length;
		for (let queueIdx = 0; queueIdx < startingQueueLength; queueIdx++){
			let currNode = queue.shift();
			onQueue[currNode.key] = false;

			currNode.edges.forEach((edge) => {
				let nodeTo = edge.to;
				let potentialNewDistance = keyToDistanceTo[currNode.key] + edge.distance;
				if (potentialNewDistance < keyToDistanceTo[nodeTo.key]){
					keyToDistanceTo[nodeTo.key] = potentialNewDistance;
					keyToParentKey[nodeTo.key] = currNode.key;
					if (!onQueue[nodeTo.key]){
						queue.push(nodeTo);
						onQueue[nodeTo.key] = true;
					}
				}
			})
		}
	}
	if (queue.length > 0){
		throw "Graph Contains Cycle";
	} else {
		return {keyToParentKey, keyToDistanceTo};
	}
}

function test(){
	let graph = new Graph();
	let node0 = new Node(0);
	let node1 = new Node(1);
	let node2 = new Node(2);
	let node3 = new Node(3);
	let node4 = new Node(4);
	let node5 = new Node(5);
	let node6 = new Node(6);
	let node7 = new Node(7);
	graph.addNode(node0);
	graph.addNode(node1);
	graph.addNode(node2);
	graph.addNode(node3);
	graph.addNode(node4);
	graph.addNode(node5);
	graph.addNode(node6);
	graph.addNode(node7);
	// new Edge(src, to, dst)
	new Edge(node0, node1, 5)
	new Edge(node0, node4, 9)
	new Edge(node0, node7, 8)
	new Edge(node1, node2, 12)
	new Edge(node1, node2, 12)
	new Edge(node1, node3, 15)
	new Edge(node1, node7, 4)
	new Edge(node2, node3, 3)
	new Edge(node2, node6, 11)
	new Edge(node3, node6, 9)
	new Edge(node4, node5, 4)
	new Edge(node4, node6, 20)
	new Edge(node4, node7, 5)
	new Edge(node5, node2, 1)
	new Edge(node5, node6, 13)
	new Edge(node7, node2, 7)
	new Edge(node7, node5, 6)

	// new Edge(node3, node1, -100);

	console.log(bellmanFordShortestPath(graph, node0, node6));

}

test();