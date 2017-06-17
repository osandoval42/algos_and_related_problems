function quickSelect(arr, n){
	if (n > arr.length || n < 1){
		return undefined
	}
	//shuffle arr
	return (select(arr, n - 1, 0, arr.length - 1))
}

function swap(arr, a, b){
	let holder = arr[a];
	arr[a] = arr[b];
	arr[b] = holder;
}

function select(arr, n, lo, hi){
	let loPtr = lo + 1;
	let hiPtr = hi;
	if (lo === hi){
		return arr[lo];
	}
	while (true){
		while (loPtr <= hi && arr[loPtr] < arr[lo]){
			loPtr++;
		}
		while (arr[hiPtr] > arr[lo]){
			hiPtr--;
		}

		if (hiPtr <= loPtr){
			break;
		}
		swap(arr, loPtr, hiPtr);
		loPtr++;
		hiPtr--;
	}

	swap(arr, lo, hiPtr);
	if (hiPtr < n){
		return select(arr, n, hiPtr + 1, hi);
	} else if (hiPtr > n){
		return select(arr, n, lo, hiPtr - 1);
	} else {
		return arr[hiPtr];
	}
}

function test(){
	const arr = [15,12,10,17,11,18,13,16,14];
	console.log(quickSelect(arr, 5));
}

test();