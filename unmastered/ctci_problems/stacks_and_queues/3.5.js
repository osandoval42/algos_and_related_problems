

function sortStack(stack){ //Do it with only 1 additional stack

}





































/* Space linear, time is quadratic
Set stack2ActualLength to 0
set stack2CurrLenght to 0
while stack1 is empty
	1) pop Each item off of stack 1 and push onto stack2, keeping track of the min and incrementing stack2CurrLength each time
	2) while stack2CurrLength is > stack2ActualLength
		pop stack2 off and decrement stack2ActualLength.  If min !== undefined && popped !== min, push onto stack1.
		else if min exists then set toAddBackToStack2 to the popped value and set min to undefined
	3) Push toPushBackToStack2 onto stack2 and increment stack2ActualLength
pop everything off of stack 2 and push onto stack 1.
*/