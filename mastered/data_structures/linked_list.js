class LinkedList{
	constructor(){
		this.head = new Node(undefined);
		this.tail = new Node(undefined);
		this.head.prev = undefined;
		this.head.next = this.tail;
		this.tail.prev = this.head;
		this.tail.next = undefined;
	}
}

class Node{
	constructor(val){
		this.prev = undefined;
		this.next = undefined;
		this.val = val;
	}
}


LinkedList.prototype.quickSort = function(){
	this.actualQuickSort(this.head.next, this.tail.prev, this.length());
}

LinkedList.prototype.length = function(){
	let count = 0;
	let ptr = this.head.next
	while (ptr !== this.tail){
		count++;
		ptr = ptr.next;
	}
	return count;
}

//if i is greater stop
//if j is lesser or equal stop


LinkedList.prototype.actualQuickSort = function(lowerBound, upperBound, length){

  let higherPtr = upperBound;
  let staticHigherPtr = higherPtr;
  let pivotPtr = lowerBound;
  if (length <= 1){
	return;
  }

  let lowerPtr = lowerBound.next;
  let lowerPtrIdx = 1;
  let higherPtrIdx = length - 1;
  let pivotIdx;
  let holder;
  while (true){
  	while (lowerPtrIdx < length && lowerPtr.val <= pivotPtr.val){
  		lowerPtr = lowerPtr.next
  		lowerPtrIdx++;  		
  	}
  	while (higherPtr.val > pivotPtr.val){
  		higherPtr = higherPtr.prev;
  		higherPtrIdx--;
  	}
  	if (higherPtrIdx <= lowerPtrIdx){
  		this.swapNodes(higherPtr, pivotPtr);
  		pivotIdx = higherPtrIdx;
  		if (pivotIdx === length - 1){
  			staticHigherPtr = pivotPtr;
  		}
  		break;
  	}  else {
  		this.swapNodes(higherPtr, lowerPtr);
  		holder = higherPtr;
  		higherPtr = lowerPtr;
  		lowerPtr = holder;
  		if (higherPtrIdx === length - 1){
  			staticHigherPtr = higherPtr;
  		}
  	}
  }

  if (pivotIdx === 0){
  	pivotPtr = pivotPtr.next;
  	pivotIdx++;
  }

  this.actualQuickSort(pivotPtr, staticHigherPtr, length - pivotIdx);
  this.actualQuickSort(higherPtr, pivotPtr.prev, pivotIdx);
  //swap higherPtrIdx with pivot
}

LinkedList.prototype.addNode = function(val){
	let node = new Node(val);
	let formerLast = this.tail.prev;
	formerLast.next = node;
	node.prev = formerLast;
	node.next = this.tail;
	this.tail.prev = node;
}

LinkedList.prototype.deleteNode = function(node){
	node.prev.next = node.next;
	node.next.prev = node.prev;
}

LinkedList.prototype.swapNodes = function(node1, node2){
	if (node1.next === node2){
		this.swapNeighbors(node1, node2)
	} else if (node2.next === node1){
		this.swapNeighbors(node2, node1)
	} else {
		let formerNode1Prev = node1.prev;
		let formerNode1Next = node1.next;
		let formerNode2Prev = node2.prev;
		let formerNode2Next = node2.next;

		formerNode1Prev.next = node2;
		formerNode1Next.prev = node2;
		node2.prev = formerNode1Prev;
		node2.next = formerNode1Next;

		formerNode2Prev.next = node1;
		formerNode2Next.prev = node1;
		node1.prev = formerNode2Prev;
		node1.next = formerNode2Next;
	}
}

LinkedList.prototype.swapNeighbors = function(first, second){
	first.prev.next = second;
	second.prev = first.prev;
	let formerSecondNext = second.next;
	second.next = first;
	first.prev = second;
	first.next = formerSecondNext;
	formerSecondNext.prev = first;
}

LinkedList.prototype.print = function(){
	let ptr = this.head.next;
	while (ptr !== this.tail){
		console.log(ptr.val);		
		ptr = ptr.next;
	}
}

LinkedList.prototype.printBackwards = function(){
	let ptr = this.tail.prev
	while (ptr !== this.head){
		ptr = ptr.prev;
		console.log(ptr.val);
	}
}


module.exports.LinkedList = LinkedList;
module.exports.Node = Node;

const runTest = function(){
	let test = new LinkedList();
	test.addNode(3);
	test.addNode(1);
	test.addNode(7);
	test.addNode(6);
	test.addNode(2);
	test.addNode(4);
	test.addNode(5);
	test.addNode(7);
	test.print();
	console.log("after");
	test.quickSort();
	console.log("finished quicksorting");
	test.print();
	console.log("Done");
	process.exit();
}

// runTest();




