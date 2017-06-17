






































function tripleStep(target){
	let countPtr = {count: 0}
	recursHelper(target, countPtr, 0);
	return countPtr.count;
}

function recursHelper(target, ptr, currCount){
	if (currCount > target){
		return;
	}
	if (currCount === target){
		return (ptr.count++);
	}
	for (let i = 1; i <= 3; i++){
		recursHelper(target, ptr, currCount);
	}
}