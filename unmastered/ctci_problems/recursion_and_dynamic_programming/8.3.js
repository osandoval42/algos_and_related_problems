function magicIndex(arr){
	recursHelper(arr, 0, arr.length - 1)
}

function recursHelper(arr, lbIdx, ubIdx){
	let ret;
	if (lbIdx > ubIdx || ubIdx >= arr.length || lbIdx < 0){
		return;
	}
	const midIdx = Math.floor((ubIdx - lbIdx) / 2) + lbIdx;
	if (arr[midIdx] === midIdx){
		return midIdx;
	}
	if (arr[midIdx] > midIdx){
		ret = recursHelper(arr, lbIdx, midIdx - 1) !== undefined
		if (ret){
			return ret;
		} else {
			return recursHelper(arr, arr[midIdx], ubIdx)
		}
	} else {
		ret = recursHelper(arr, midIdx + 1,ubIdx);
		if (ret){
			return ret;
		} else {
			return recursHelper(arr, lbIdx, arr[midIdx]);
		}
	}
}