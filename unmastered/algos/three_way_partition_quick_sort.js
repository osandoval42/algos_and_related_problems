function quickSort(arr){
	//shuffle arr
	sort(arr, 0, arr.length - 1);
}

function swap(arr, a, b){
	let holder = arr[a];
	arr[a] = arr[b];
	arr[b] = holder;
}

function sort(arr, lo, hi){
	let ltp = lo;
	let gtp = hi;
	let i = lo;
	const pivotVal = arr[lo];

	if (lo >= hi){
		return;
	}
	while (i <= gtp){
		if (arr[i] < pivotVal){
			swap(arr, i, ltp);
			ltp++;
			i++;
		} else if (arr[i] > pivotVal){
			swap(arr, i, gtp);
			gtp--;
		} else {
			i++;
		}
	}
	sort(arr, lo, ltp - 1);
	sort(arr, i, hi)
}


function isSorted(arr){
	for (let i = 0; i < arr.length - 1; i++){
		if (arr[i] > arr[i + 1])
			return (false);
	}
	return true;
}

function singleTest(){
	const size = 8;
	let arr = new Array(size);
	let currInt;
	for (let i = 0; i < size; i++){
		currInt = Math.floor(Math.random() * size);
		arr[i] = currInt;
	}
	const copy = arr.slice();
	quickSort(arr);
	const res = isSorted(arr);
	if (!res){
		console.log(`failed with original: ${copy}, result: ${arr}`);
		throw ('ERROR');
	}
	console.log(`success with ${arr}`);
}

function test(){
	for (let i = 0; i < 100; i++){
		singleTest();
	}
	console.log("SUCCESS");
}
test();