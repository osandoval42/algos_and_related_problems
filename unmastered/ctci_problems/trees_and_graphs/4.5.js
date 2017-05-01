class Node{
	constuctor(val){
		this.val = val;
		this.left = undefined;
		this.right = undefined;
	}
}

/*
	DFS a tree, passing down a thisMustBeLessThan and thisMustBeGreaterThan variable
	If this <= thisMustBeGreaterThan || this >= thisMustBeLessThan, return  false. Of course dont check if variable doesnt exist
	before we dfs to the left, thisMustBeLessThan becomes this if this is lower
	before we dfs to the right, thisMustBeGreaterThan becomes this if this is greater

	At each level of recursion we should be returning (dfs1 && dfs2)
*/

function validateBST(treeHead){

}