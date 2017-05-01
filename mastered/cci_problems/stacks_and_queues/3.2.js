/*
	keep stack of mins with actual stack.  Each time something comes in, compare to previous top of min stack.  If its smaller than
	add new min to top of min stack.  else leave min stack un touched.  Min stack holds pointers to same nodes in actual to save memory.
	On pop, do the obvious with actual stack, and if actual stacks top is what top of min stack points to, pop min stack as well
	Min is obviously always the top of min stack
*/

function stackMin(){

}