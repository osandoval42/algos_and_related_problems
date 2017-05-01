var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;
var Node = require('../../../mastered/data_structures/linked_list').Node;

/*  greater of m + n  + 1 space.  linear time too
set list1 and list2 to their respective nexts
set carriedOver to 0
create result list, in which we always have a pointer to the node before tail, so we can create new nodes when necessary
while at least one pointer is not at its tail or carriedOver is not zero, do the following:
	set currPlaceValue to be list1s currNode's value + list2 currNodes's value + carriedOver
	set carriedOver to currPlaceValue / 10 rounded down
	create a new node with value currPlaceValue % 10
	Increment those pointers if applicable
return the new list
*/

/* FORWARD ORDER

*/

function sumListsForwardOrder(list1, list2){ //FORWARD ORDER IMPLEMENTATION

}



// let addend1 = new LinkedList();
// let addend2 = new LinkedList();

// addend1.addNode(7);
// addend1.addNode(7);
// addend1.addNode(9);

// addend2.addNode(2);
// addend2.addNode(2);
// addend2.addNode(3)

// let res = sumListsForwardOrder(addend1, addend2);
// res.print();



// function sumListsForwardOrder(list1, list2){ //FORWARD ORDER IMPLEMENTATION
// 	let res = new LinkedList();
// 	let additionalPlace = sumListsRecursHelper(list1.head.next, list2.head.next, res);
// 	if (additionalPlace > 0){
// 		addNode(res, additionalPlace);
// 	}
// 	return res;
// }

// function sumListsRecursHelper(list1Ptr, list2Ptr, resList){
// 	if (list1Ptr.val === undefined && list2Ptr.val === undefined){
// 		return 0;
// 	}
// 	let thisPlaceValue = list1Ptr.val || 0;
// 	thisPlaceValue += list2Ptr.val || 0;
// 	let next1 = list1Ptr.val === undefined ? list1Ptr : list1Ptr.next;
// 	let next2 = list2Ptr.val === undefined ? list2Ptr : list2Ptr.next;
// 	thisPlaceValue += sumListsRecursHelper(next1, next2, resList);
// 	let nextPlaceGreater = Math.floor(thisPlaceValue / 10);
// 	let thisPlace = thisPlaceValue % 10;
// 	addNode(resList, thisPlace);
// 	return nextPlaceGreater;
// }

// function addNode(list, nodeValue){
// 	let newNode = new Node(nodeValue);
// 	newNode.next = list.head.next;
// 	list.head.next = newNode;
// }

