def towersOfHanoi(n):
	stacks = [[], [], []]
	for i in range(n, 0, -1):
		stacks[0].append(i)
	solve(stacks)
	return stacks

def solve(stacks):
	

def test():
	stacks = towersOfHanoi(5)
	print stacks

test()
