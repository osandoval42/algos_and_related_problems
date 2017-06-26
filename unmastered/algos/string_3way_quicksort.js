const charToValue = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7};

function threeWayStringQuickSort(strs){
	sort(strs, 0, strs.length - 1, 0);
}

function sort(strs, lo, hi, d){
	if (hi <= lo){
		return;
	}
	let hiPtr = hi;
	let currPtr = lo + 1;
	let bottomPivotPtr = lo;
	let cmpRes;
	while (currPtr <= hiPtr){
		cmpRes = charCmp(strs[bottomPivotPtr], strs[currPtr], d)
		if (cmpRes > 0) {//curr thing is less than pivot
			swap(strs, bottomPivotPtr, currPtr);
			bottomPivotPtr++;
			currPtr++;
		} else if (cmpRes < 0){ //curr thing is greater than pivot
			swap(strs, currPtr, hiPtr);
			hiPtr--;
		} else { //curr thing is equal to pivot
			currPtr++;
		}
	}
	sort(strs, lo, bottomPivotPtr - 1, d);
	if (strs[bottomPivotPtr].length > d){
		sort(strs, bottomPivotPtr, currPtr - 1, d + 1);
	}
	sort(strs, currPtr, hi, d);
}

function swap(arr, idx1, idx2){
	const holder = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = holder;
}

function charCmp(str1, str2, d){
	const strs1Val = (d < str1.length) ? charToValue[str1[d]] : 0;
	const strs2Val = (d < str2.length) ? charToValue[str2[d]] : 0;
	return (strs1Val - strs2Val);
}

function test(){
	let strs = ["abcde", "abc", "cabde", "acbde", "acb", "acbed", "cadbe", "cadeb", "cabde", "ccbde"];
	strs = strs.map((str) => {
		return str.split("");
	})
	threeWayStringQuickSort(strs);
	console.log(strs);
}

test();