/*
	binary search for startIdx
	binary search for elemetn in ring buffer fashion

	3 LogN
*/
const DIRECTIONS = {
	RIGHT: "RIGHT",
	LEFT: "LEFT"
}

function searchInSortedArr(arr, elem){
	if (arr.length === 0){
		return;
	} 
	if (arr.length === 1){
		return (elem === arr[0]) ? 0 : -1;
	}
	let startIdx = binaryStartIdxSearch(arr, 0, arr.length - 1);
	return ringBufferBinarySearch(startIdx, arr, 0, arr.length - 1, elem);
}

function ringBufferBinarySearch(actualStartIdx, arr, lo, hi, target){
	if (lo > hi){
		return -1;
	}
	const midIdx = lo + Math.floor((hi - lo) / 2);
	if (arr[externalToInternalIdx(actualStartIdx, midIdx, arr)] === target){
		return externalToInternalIdx(actualStartIdx, midIdx, arr);
	}
	if (arr[externalToInternalIdx(actualStartIdx, midIdx, arr)] > target){
		return ringBufferBinarySearch(actualStartIdx, arr, lo, midIdx - 1, target);
	} else {
		return ringBufferBinarySearch(actualStartIdx, arr, midIdx + 1, hi, target);
	}
}

function externalToInternalIdx(internalStartIdx, externalIdx, arr){
	return (internalStartIdx + externalIdx) % arr.length;
}


/*
	if we go left{
		if I find something less than or equal to previous stack frame, continue left
		else move right
	}
	if we go right{
		if I find something greater than or equal to previous stack frame, continue right
		else move left
	}
*/

function binaryStartIdxSearch(arr, lo, hi, directionTaken){ 
	if (lo > hi){
		return -1;
	}
	const midIdx = lo + Math.floor((hi - lo) / 2);
	let oneIdxLower = midIdx === 0 ? arr.length - 1 : midIdx - 1;
	if (arr[midIdx] < arr[oneIdxLower]){
		return midIdx;
	}
	let prevMid;
	if (directionTaken === DIRECTIONS.LEFT){
		prevMid = arr[hi + 1];
		if (arr[midIdx] <= prevMid){
			return binaryStartIdxSearch(arr, lo, midIdx - 1, DIRECTIONS.LEFT);
		} else {
			return binaryStartIdxSearch(arr, midIdx + 1, hi, DIRECTIONS.RIGHT);
		}
	} else if (directionTaken === DIRECTIONS.RIGHT){
		prevMid = arr[lo - 1];
		if (arr[midIdx] >= prevMid){
			return binaryStartIdxSearch(arr, midIdx + 1, hi, DIRECTIONS.RIGHT);
		} else {
			return binaryStartIdxSearch(arr, lo, midIdx - 1, DIRECTIONS.LEFT);
		}
	} else {
		const leftRet = binaryStartIdxSearch(arr, lo, midIdx - 1, DIRECTIONS.LEFT);
		if (leftRet !== -1){
			return leftRet;
		} else {
			return binaryStartIdxSearch(arr, midIdx + 1, hi, DIRECTIONS.RIGHT);
		}
	}
}



function test(){
	// let testArr = [15, 16, 19, 19, 20, 25, 1, 3, 4, 5, 7, 10, 10, 14];
	let testArr = [4, 5];
	let res = searchInSortedArr(testArr, 5);
	console.log(`idx is ${res}`);
}

test();