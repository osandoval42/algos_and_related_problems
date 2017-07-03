function quickSort(arr){
	quickSortRecurs(arr, 0, arr.length - 1)
}

function quickSortRecurs(arr, lo, hi){
	if (hi <= lo){
		return;
	}
	let pivot = arr[lo];
	let loP = lo + 1;
	let hiP = hi;
	while (true){
		while (arr[hiP] > pivot){
			hiP--;
		}
		while (loP < hi && arr[loP] < pivot){
			loP++;
		}
		if (loP >= hiP){
			break;
		} else {
			swap(arr, loP, hiP);
			hiP--;
			loP++;
		}
	}
	swap(arr, lo, hiP);
	quickSortRecurs(arr, lo, hiP - 1);
	quickSortRecurs(arr, hiP + 1, hi);
}

function swap(arr, a, b){
	const holder = arr[a];
	arr[a] = arr[b];
	arr[b] = holder;
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