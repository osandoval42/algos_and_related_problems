function subsets(arr){
	let ret = []
	recursHelper(arr.slice(), ret, []);
	return ret; 
}

function recursHelper(arr, subsets, subsetSoFar){
	if (arr.length === 0){
		return subsets.push(subsetSoFar);
	}
	const currElem = arr.pop();
	recursHelper(arr, subsets, subsetSoFar.slice());
	recursHelper(arr, subsets, subsetSoFar.slice().concat([currElem]));
	arr.push(currElem);
}