function Node(key){
	this.val = Infinity;
	this.key = key;
	this.parentKey = undefined;
	this.edges = [];
}

Node.prototype.createPath = function(other, distance){
	const edge = new Edge(distance, other);
	this.edges.push(edge);
	const otherEdge = new Edge(distance, this);
	other.edges.push(otherEdge);
}

Node.prototype.dup = function(){
	let duped = new Node(this.key);
	duped.val = this.val;
	duped.parentKey = undefined;
	duped.edges = this.edges.slice();
	return duped;
}

function Edge(val, node){
	this.val = val;
	this.node = node;
}


function dijkstraShortestPath(srcNode, key){
	const map = dijkstra(srcNode);
	if (map.distanceFromSrc[key] === undefined){
		return undefined;
	} else {
		let path = getPath(map.childrenToParents, key);
		return {distanceFromSrc: map.distanceFromSrc[key], path};
	}
}

function getPath(parentMap, key){
	let currKey = key;
	let path = [];
	while (currKey !== undefined){
		path.unshift(currKey);
		currKey = parentMap[currKey];
	}
	return path;
}

function dijkstra(srcNode){
	srcNode.val = 0;
	let heap = new MinHeap();
	heap.enqueue(srcNode);
	let distanceFromSrc = {};
	let childrenToParents = {};
	dijkstraIteration(heap, distanceFromSrc, childrenToParents);
	return ({distanceFromSrc: distanceFromSrc, childrenToParents});
}

function dijkstraIteration(heap, distanceFromSrc, childrenToParents){
	if (heap.length() === 0){
		return;
	}
	const shortestFromSrc = heap.dequeue();
	if (distanceFromSrc[shortestFromSrc.key] === undefined){
		distanceFromSrc[shortestFromSrc.key] = shortestFromSrc.val;
		childrenToParents[shortestFromSrc.key] = shortestFromSrc.parentKey;
		shortestFromSrc.edges.forEach((edge) => {			
			if (distanceFromSrc[edge.node.key] === undefined){
				let node = edge.node.dup();
				node.parentKey = shortestFromSrc.key;
				node.val = shortestFromSrc.val + edge.val;
				heap.enqueue(node);
			}
		})
	}
	return dijkstraIteration(heap, distanceFromSrc, childrenToParents);
}

// function HeapNode(val){
// 	this.val = val;
// }

function MinHeap(){
	this.arr = [undefined];
}

MinHeap.prototype.length = function(){
	return this.arr.length - 1
}

MinHeap.prototype.enqueue = function(node){
	this.arr.push(node);
	this.swim(this.length());
}

MinHeap.prototype.dequeue = function(node){
	if (this.length() === 0){
		return undefined;
	}
	this.swap(1, this.length());
	const min = this.arr.pop();
	if (this.length() > 1);
	this.sink(1);
	return min;
}

MinHeap.prototype.swim = function(idx){
	while (idx > 1){
		let parentIdx = this.parentIdx(idx);
		if (this.arr[idx].val >= this.arr[parentIdx].val){
			break;
		} else {
			this.swap(parentIdx, idx);
			idx = parentIdx;
		}
	}
}

MinHeap.prototype.swap = function(idx1, idx2){
	const holder = this.arr[idx1];
	this.arr[idx1] = this.arr[idx2];
	this.arr[idx2] = holder;
}

MinHeap.prototype.sink = function(idx){
	let smallerChildIdx = this.firstChildIdx(idx);
	while (smallerChildIdx < this.arr.length){
		if (smallerChildIdx + 1 < this.arr.length && 
			this.arr[smallerChildIdx + 1].val < this.arr[smallerChildIdx].val){
			smallerChildIdx++;
		}
		if (this.arr[idx].val > this.arr[smallerChildIdx].val){
			this.swap(idx, smallerChildIdx);
			idx = smallerChildIdx;
			smallerChildIdx = this.firstChildIdx(idx);
		} else {
			break;
		}
	}
}

MinHeap.prototype.parentIdx = function(idx){
	return Math.floor(idx / 2);
}

MinHeap.prototype.firstChildIdx = function(idx){
	return idx * 2
}

function test(){
	let A = new Node('A');
	let B = new Node('B');
	let C = new Node('C');
	let D = new Node('D');
	let E = new Node('E');
	let F = new Node('F');
	let G = new Node('G');
	let H = new Node('H');

	A.createPath(B, 8);
	A.createPath(C, 2);
	A.createPath(D, 5);
	B.createPath(D, 2);
	B.createPath(F, 13);
	C.createPath(D, 2);
	C.createPath(E, 5);
	D.createPath(E, 1);
	D.createPath(F, 6);
	D.createPath(G, 3);
	E.createPath(G, 1);
	F.createPath(G, 2);
	F.createPath(H, 3);
	G.createPath(H, 6);

	const shortestPath = dijkstraShortestPath(A, "H");
	console.log(`shortest path: ${shortestPath.path}, with length ${shortestPath.distanceFromSrc}`);
}

// setTimeout(test, 8000);
test();
