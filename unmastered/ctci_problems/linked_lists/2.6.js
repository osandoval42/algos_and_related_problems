var LinkedList = require('../../../mastered/data_structures/linked_list').LinkedList;

function isPalindrome(list){

}



let test = new LinkedList();

test.addNode("a");
test.addNode("b");
test.addNode("c");
test.addNode("c");
test.addNode("b");
test.addNode("a");

if (!isPalindrome(test)){
	console.error(`error 1`)
	throw 'ERROR';
}

test.addNode("b");

if (isPalindrome(test)){
	console.error(`error 2`)
	throw 'ERROR';
}

console.log("success")


// function isPalindrome(list){
// 	let secondPtr = list.head.next;
// 	let arr = [];
// 	while(secondPtr !== list.tail){
// 		 arr.push(secondPtr.val); 
// 		 secondPtr = secondPtr.next;
// 	}
// 	return arr.isPalindrome()
// }

// Array.prototype.isPalindrome = function(){
// 	let midIdx = Math.floor(this.length / 2);
// 	for (let i = 0; i < midIdx; i++){
// 		if (this[i] !== this[this.length - 1 - i]){
// 			return false;
// 		}
// 	}
// 	return true;
// }
