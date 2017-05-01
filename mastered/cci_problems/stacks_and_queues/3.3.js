/*
	Stack with several stacks inside of it
	push -> checks if lastStackInStacks is full.  If so, creates newStack, moves lastStackInStacks to point to this.  In any case
	lastStackInStacks gets pushed onto
	pop -> pops lastStackInStacks.  If empty, lastStackInStack points to its predecessor.  
	popAtIndex -> goes to relevant stack and performs pop from there.  If empty Afterwards then if i == length - 1 do normal pop action, else, 
	i -1th node points to i + 1.  Length is obviously decremented
*/


function StackOfPlates(threshhold){

}