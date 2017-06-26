function MinHeapNode(key, val = Infinity){
		this.key = key;
		this.val = val;
		this.idx = -1;
		this.parent = null;
		this.neighborsTo = [];
		this.distancesToNeighbors = [];
}

MinHeapNode.prototype.addNeighborTo = function(neighbor, distance){
	this.neighborsTo.push(neighbor);
	this.distancesToNeighbors.push(distance);
}

function MinHeapHash(){
	this.map = {};
	this.arr = [undefined];
}

MinHeapHash.prototype.insert = function(node){
	this.arr.push(node);
	node.idx = this.arr.length - 1;
	this.heapifyUp(this.arr.length - 1);
	this.map[node.key] = node;
}

MinHeapHash.prototype.extractMin = function(){
	if (this.arr.length < 2){
		return;
	}
	const min = this.arr[1];
	if (this.arr.length > 2){
		this.swap(1, this.arr.length - 1);
		this.arr.pop();
		this.heapifyDown(1);
	}
	this.map[min.key] = undefined;
	return min;
}

MinHeapHash.prototype.changeVal = function(key, newVal){
	let node = this.map[key];
	if (!node){
		throw `key ${key} doesnt exist`;
	}
	let oldVal = node.val;
	node.val = newVal;
	if (node.val > oldVal){
		heapifyDown(node.idx);
	} else {
		heapifyUp(node.idx);
	}
}

MinHeapHash.prototype.childIdx = function(parentIdx){
	return (parentIdx * 2);
}

MinHeapHash.prototype.parentIdx = function(childIdx){
	return (Math.floor(childIdx / 2));
}

MinHeapHash.prototype.heapifyUp = function(idx){
	let parentIdx;
	while (idx > 2){
		parentIdx = this.parentIdx(idx);
		if (this.arr[idx].val < this.arr[parentIdx].val){
			this.swap(idx, parentIdx);
			idx = parentIdx;
		} else {
			break;
		}
	}
}

MinHeapHash.prototype.heapifyDown = function(idx){
	let childIdx;
	while (true){
		childIdx = this.childIdx(idx);
		if (childIdx >= this.arr.length){
			break;
		}
		if (childIdx + 1 < this.arr.length && 
			this.arr[childIdx + 1].val < this.arr[childIdx].val){
			childIdx++;
		}
		if (this.arr[childIdx].val < this.arr[idx].val){
			this.swap(childIdx, idx)
			idx = childIdx;
		} else {
			break;
		}
	}
}

MinHeapHash.prototype.swap = function(idx1, idx2){
	let holder = this.arr[idx1];
	this.arr[idx1] = this.arr[idx2];
	this.arr[idx2] = holder;
	this.arr[idx2].idx = idx1;
	this.arr[idx1].idx = idx2;
}

MinHeapHash.prototype.isEmpty = function(){
	return (this.arr.length === 1);
}

MinHeapHash.prototype.forEach = function(cb){
	for (let i = 1; i < this.arr.length; i++){
		cb(this.arr[i]);
	}
}
const NO_PATH = "NO_PATH";
function dijkstraShortestPaths(minHeapHash){//assumes we receive minHeap with all values set to infinity except src
	let parents = {};
	let distances = {};
	minHeapHash.forEach((node) => {
		distances[node.key] = node.val;
	})
	let min;
	let thisPathsDistance
	while (!minHeapHash.isEmpty()){
		min = minHeapHash.extractMin();
		parents[min.key] = (min.val === Infinity) ? NO_PATH : min.parent;
		distances[min.key] = min.val;
		let neighbor;
		let distanceToNeighbor
		for (let i = 0; i < min.neighborsTo.length; i++){
			neighbor = min.neighborsTo[i];
			distanceToNeighbor = min.distancesToNeighbors[i];
			if (minHeapHash.map[neighbor.key]){
				thisPathsDistance = min.val + distanceToNeighbor;
				if (thisPathsDistance < neighbor.val){
					minHeapHash.changeVal(neighbor.key, thisPathsDistance);
					neighbor.parent = min.key;
				}
			}
		}
	}
	return {parents: parents, distances: distances};
}

function shortestPath(minHeapHash, dstKey){//assumes we receive minHeap with all values set to infinity except src
	const shortestPaths = dijkstraShortestPaths(minHeapHash);
	const distance = shortestPaths.distances[dstKey];
	let path = [];
	while (dstKey !== null){
		path.push(dstKey);
		dstKey = shortestPaths.parents[dstKey];
		if (dstKey === NO_PATH){
			return console.log(NO_PATH);
		}
	}
	console.log(`path is ${path.reverse()}, distance is ${distance}`);
}