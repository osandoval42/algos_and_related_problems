var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;

function partition(list, pivot){ //ASSUMING SINGLY LINKED

}

let test = new LinkedList();
test.addNode(3);
test.addNode(5);
test.addNode(3);
test.addNode(-3);
test.addNode(10);
test.addNode(8);
let pivot = 6;
console.log("before");
test.print();
partition(test, pivot);
console.log("after")
test.print();

// function partition(list, pivot){ //ASSUMING SINGLY LINKED
// 	let lessThanPivot = [];
// 	let pivotOrGreater = [];
// 	let ptr = list.head.next;
// 	while (ptr !== list.tail){
// 		if (ptr.val < pivot){
// 			lessThanPivot.push(ptr);
// 		} else {
// 			pivotOrGreater.push(ptr);
// 		}
// 		ptr = ptr.next;
// 	}
// 	let stackTop = list.head;
// 	const growList = function(node){
// 		stackTop.next = node;
// 		stackTop = stackTop.next;
// 	}
// 	lessThanPivot.forEach(growList);
// 	pivotOrGreater.forEach(growList);
// }