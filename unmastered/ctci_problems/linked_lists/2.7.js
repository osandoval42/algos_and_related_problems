var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;
var Node = require('../../../mastered/data_structures/linked_list').Node;

function intersection(list1, list2){
	let map = {};
	let ptr1 = list1.head.next;
	while (ptr1 !== list1.tail){
		map[ptr1] = true;
		ptr1 = ptr1.next;
	}
	let ptr2 = list2.head.next;
	while (ptr2 !== list2.tail){
		if (map[ptr2]){
			ptr2;
		}
		ptr2 = ptr2.next;
	}
	return false;
}

let list1 = new LinkedList();
list1.addNode(1);
list1.addNode(2);
list1.addNode(3);

let list2 = new LinkedList();
list2.addNode(1);
list2.addNode(2);
list2.addNode(3);

if (intersection(list1, list2)){
	throw "ERROR 1"
}

let intersection = new Node(10);
intersection.list1.head.next