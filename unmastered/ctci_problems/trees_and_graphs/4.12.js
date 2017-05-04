/*TIME:  N * D, worst case N^2. Space: D worse case N
call recursHelper with trees head, target, empty linked list, and {count: }
return object.count

RecursHelper:
	if undefined, return 
	for each of paths here, add currNode.val, and if result is target than object.count++
	push currNode onto linked list, if its === to target then object.count++
	if currNode.left dup list and recursivly call with the list.
	recursively call with the list and currNode.right
*/

function pathsWithSum(tree, target){

}

function recursHelper(node, target, pathsHere, countObj){

}