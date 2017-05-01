var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;

function removeDups(list){
	let seen = {};
	let trailingPtr = list.head;
	let ptr = trailingPtr.next;
	while (ptr !== list.tail){
		if (seen[ptr.val]){
			trailingPtr.next = ptr.next;
			ptr.next.prev = trailingPtr;
		} else {
			seen[ptr.val] = true;
			trailingPtr = ptr;
		}
		ptr = ptr.next;
	}
}

function removeDupsConstantSpaceWithOrderChange(list){
	list.quickSort();
	let ptr = list.head.next;
	while(ptr !== list.tail){
		let prev = ptr.prev;
		let next = ptr.next
		if (prev.val === ptr.val){
			prev.next = next;
			next.prev = prev;
		}
		ptr = next;
	}
}

function removeDupsConstantSpaceNoOrderChange(list){
	let trailingPtr = list.head.next;
	let leadingPtr;
	while (trailingPtr !== list.tail){
		leadingPtr = trailingPtr.next;
		while (leadingPtr !== list.tail){
			let nextRound = leadingPtr.next
			if (trailingPtr.val === leadingPtr.val){				
				list.deleteNode(leadingPtr);
			} 
			leadingPtr = nextRound;
		}
		trailingPtr = trailingPtr.next;
	}
}


//TEST

// function initializeTest(){
// 	let test = new LinkedList();
// 	test.addNode(3);
// 	// test.addNode(5);
// 	test.addNode(3);
// 	// test.addNode(-3);
// 	// test.addNode(10);
// 	// test.addNode(8);
// 	return test;
// }

// let test1 = initializeTest();
// test1.print();
// console.log("before")
// removeDups(test1);
// test1.print();
// console.log("after")

// console.log("next test --------")

// let test2 = initializeTest();
// test2.print();
// console.log("before")
// removeDupsConstantSpaceNoOrderChange(test2);
// test2.print();
// console.log("after")

