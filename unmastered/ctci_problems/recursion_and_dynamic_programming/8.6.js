function hanoiSolver(threeStacks){
	recursHelper(threeStacks, 0, 2, threeStacks[0].length)
}

function recursHelper(threeStacks, src, dest, n){
	if (n === 0){
		return;
	}
	if (n === 1){
		return (threeStacks[dest].push(threeStacks[src].pop()));
	}
	const potentialBuffers = [0, 1, 2]
	const buffer = potentialBuffers.reduce((acc, potentialBuffer) => {
		if (potentialBuffer !== src && potentialBuffer !== dest){
			return potentialBuffer;
		}
		return acc;
	}, -1)
	n--;
	recursHelper(threeStacks, src, buffer, n);
	threeStacks[dest].push(threeStacks[src].pop());
	recursHelper(threeStacks, buffer, dest, n);
}

let test = [[6, 5, 4, 3, 2, 1], [], []];

hanoiSolver(test);

console.log(test[2]);