var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;

function kthToLast(list, k){ 

}

// let test = new LinkedList();
// test.addNode(3);
// test.addNode(5);
// test.addNode(3);
// test.addNode(-3);
// test.addNode(10);
// test.addNode(8);

// let res1 = kthToLast(test, 3);
// let res2 = kthToLast(test, 6);
// let res3 = kthToLast(test, 5);

// if (res1.val !== -3){
// 	console.error("FAILED TEST 1")
// 	throw "ERROR";
// }

// if (res2.val !== 3){
// 	console.error("FAILED TEST 2")
// 	throw "ERROR";
// }

// if (res3.val !== 5){
// 	console.error("FAILED TEST 2")
// 	throw "ERROR";
// }

// console.log("success")


// function kthToLast(list, k){ //N time   constant space.
// 	let startPtr = list.head;
// 	let endPtr = startPtr.next;
// 	let length = 0;
// 	while (endPtr !== list.tail){
// 		length++;
// 		endPtr = endPtr.next;
// 	}
// 	if (k > length){
// 		return null;
// 	}
// 	const kFromFront = length - k + 1;
// 	let currKFromFront = 0;
// 	while (currKFromFront !== kFromFront){
// 		currKFromFront++;
// 		startPtr = startPtr.next;
// 	}
// 	return startPtr;
// }