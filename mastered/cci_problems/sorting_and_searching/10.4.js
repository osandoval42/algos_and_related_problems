/*
	worst case 2log(N)
	Expand out starting at idx 1 and doubling every time.  each time:{ 
		if val we find === target, return idx
		if val we find > target, binary search lo = prevIdx + 1 and hi = idx - 1
		if val === -1, binary search lo = prevIdx + 1 and hi =- idx - 1.  
	}
	IN BINARY SEARCH, if we find - 1, go lower
*/

function ListyFindElem(list, target){
	if (list.atIdx(0) === target){
		return 0;
	}
	let prevIdx = 0;
	let currIdx = 1;
	while (true){
		let elem = list.atidx(currIdx)
		if (elem === target){
			return currIdx;
		}
		if (elem > target || elem === -1){
			return bSearch(list, prevIdx + 1, currIdx - 1, target);
		}

		prevIdx = currIdx
		currIdx *= 2;
	}
}

function bSearch(list, lo, hi, target){
	if (hi < lo){
		return -1;
	}
	let midIdx = lo + Math.floor((hi - lo) / 2);
	const elem = list.atidx(midIdx);
	if (elem === target){
		return midIdx;
	}
	if (elem === -1 || target < elem){
		return bSearch(list, lo, midIdx - 1, target);
	} else {
		return bSearch(list, midIdx + 1, hi, target); 
	}
}