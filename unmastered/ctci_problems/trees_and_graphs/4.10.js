/* Time: basically N.  Worst case N^2 if its a single line of equal values. Memory worst case N in this case.
call recursHelper with bigTree, smallTree, an empty hash, and 0.  Return === "WINNER"
RecursHelper:
	if bigTreePtr is undefined, return potentialSubtrees
	forEach potentialSubtree, if its node is not equal to currNode then dead it (delete keyword)
	If curr node is equal to small tree, add smallTree to potentialSubtrees with this key  and increment subtreesTried  
	leftDup = potentialSubtrees.dupLeft
	rightDup = potentialSubtrees.dupRight
	leftMatches = (recursHelper(bigTreePtr.left, smallTree, leftDup);
	rightMatches = (recrusHelper(bigTreePtr.right, smallTree, rightDup));
	if (leftMatches || rightMatches = "WINNER") return "WINNER"
	actualMatch = everything in left thats in right
	if subtreesTried - 1 is in actual Match return "WINNER"
	return actualMatch
*/

function checkSubtree(bigTree, smallTree){

}

function recursHelper(bigTreePtr, smallTree, potentialSubtrees, potentialSubtreesTried){

}