function mergeSort(arr){
	let aux = new Array(arr.length);
	sort(arr, aux, 0, arr.length - 1)
}

function sort(arr, aux, lo, hi){
	if (lo >= hi)
		return;
	const mid = Math.floor((hi - lo) / 2) + lo;
	sort(arr, aux, lo, mid);
	sort(arr, aux, mid + 1, hi);
	merge(arr, aux, lo, mid, hi);
}

function merge(arr, aux, lo, mid, hi){
	let loPtr = lo;
	let hiPtr = mid + 1;
	for (let i = lo; i <= hi; i++){
		aux[i] = arr[i];
	}
	for (let i = lo; i <= hi; i++){
		if (loPtr > mid){
			arr[i] = aux[hiPtr];
			hiPtr++;
		} else if (hiPtr > hi){
			arr[i] = aux[loPtr]
			loPtr++;
		} else if ((comparator(aux[loPtr], aux[hiPtr]) > 0)){ //
			arr[i] = aux[hiPtr];
			hiPtr++;
		} else {
			arr[i] = aux[loPtr]
			loPtr++;
		}
	}
}






function comparator(a, b){
	return (a - b);
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
	mergeSort(arr);
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