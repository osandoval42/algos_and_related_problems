function Node(key, val){
	this.key = key;
	this.val = val;
}

function MinHeap(){
	this.lastIdx = 0;
	this.arr = [undefined];
}

MinHeap.prototype.parentIdx = function(childIdx){
	if (childIdx < 2){
		return undefined;
	}
	return (Math.floor(childIdx / 2));
}

MinHeap.prototype.firstChildIdx = function(parentIdx){
	return (parentIdx * 2);
}

MinHeap.prototype.extractMin = function(){
	if (this.lastIdx < 1){
		return undefined;
	}
	this.swap(this.lastIdx, 1);
	let min = this.arr[this.lastIdx];
	this.arr[this.lastIdx] = undefined;
	this.lastIdx--;
	this.heapifyDown(1);
	return min;
}

MinHeap.prototype.heapifyDown= function(mainIdx){
	let childIdx = this.firstChildIdx(mainIdx);
	while (childIdx <= this.lastIdx){
		if (childIdx + 1 <= this.lastIdx && this.arr[childIdx + 1].key < this.arr[childIdx].key){
			childIdx++;
		}
		if (this.arr[childIdx].key < this.arr[mainIdx].key){
			this.swap(childIdx, mainIdx);
			mainIdx = childIdx;
			childIdx = this.firstChildIdx(mainIdx);
		} else {
			break;
		}
	}
}

MinHeap.prototype.insert = function(key, val){
	const newNode = new Node(key, val);
	this.lastIdx++;
	this.arr[this.lastIdx] = newNode;
	this.heapifyUp(this.lastIdx);
}

MinHeap.prototype.swap = function(a, b){
	const holder = this.arr[a];
	this.arr[a] = this.arr[b];
	this.arr[b] = holder;
}

MinHeap.prototype.heapifyUp = function(mainIdx){
	let parentIdx;
	while (mainIdx > 1){
		parentIdx = this.parentIdx(mainIdx);
		if (this.arr[mainIdx].key < this.arr[parentIdx].key){
			this.swap(mainIdx, parentIdx);
			mainIdx = parentIdx;
		} else {
			break;
		}
	}
}


function test(){
	const heap = new MinHeap();
	let rand;
	for (let i = 0; i < 10; i++){
		rand = Math.floor(Math.random() * 5);
		heap.insert(rand, rand);
	}
	let res = [];
	let tmp;
	for (let i = 0; i < 11; i++){
		tmp = heap.extractMin();
		res.push(tmp ? tmp.val : tmp);
	}
	console.log(res);
	console.log(`length is ${res.length}`);
}
test();


