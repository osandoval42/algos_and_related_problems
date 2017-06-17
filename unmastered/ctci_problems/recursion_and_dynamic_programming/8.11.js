const DENOMS = [25, 10, 5, 1];

function coins(cents){
	let countPtr = {ways: 0}
	recursHelper(0, cents, 0, countPtr);
	return countPtr.ways;
}

function recursHelper(acc, target, idxJustUsed, countPtr){
	if (acc > target){
		return;
	}
	if (acc === target){
		return (countPtr.ways)++;
	}
	for (let idxToUse = idxJustUsed; idxToUse < 4; idxToUse++){
		recursHelper(acc + DENOMS[idxToUse], target, idxToUse, countPtr);
	}
}