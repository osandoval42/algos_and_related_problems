/*
	create a binary tree

	on insert, do it the normal way, however on each parent we go left on, increment LEFT_CHILD_COUNT
	On search have an acc which is incremented by LEFTCHILDCOUNT + 1 every time it goes right.  When we find a node, the rank is acc + LEFTCHILDCOUNT
*/

function rankFromStream(){

}