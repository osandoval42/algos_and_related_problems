"""
naive:
keep track of min and max 
"""

def sortStack(stackA):
	stackB = [];
	pushBackToACount = 0;

	while (len(stackA) > 0):
		pushToB = stackA.pop()
		while (len(stackB) > 0 and stackB[len(stackB) - 1] > pushToB):
			stackA.append(stackB.pop());
			pushBackToACount += 1;
		stackB.append(pushToB);
		while (pushBackToACount > 0):
			stackB.append(stackA.pop());
			pushBackToACount -= 1;

	while (len(stackB) > 0):
		stackA.append(stackB.pop());

def printStack(stack):
	print(stack);

def test():
	stackA = [5, 10, 7, 16, 0, 18];
	sortStack(stackA);
	printStack(stackA);

test();


