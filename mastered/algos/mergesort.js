function mergeSort(arr){
	let aux = new Array(arr.length);
	sort(arr, aux, 0, arr.length - 1);
}

function merge(arr, aux, lo, middle, hi){
	let loP = lo;
	let hiP = middle + 1;
	for (let auxP = lo; auxP <= hi; auxP++){
		if (loP === middle + 1){
			aux[auxP] = arr[hiP];
			hiP++
		} else if (hiP === hi + 1){
			aux[auxP] = arr[loP];
			loP++;
		} else if (arr[loP] > arr[hiP]){
			aux[auxP] = arr[hiP];
			hiP++
		} else {
			aux[auxP] = arr[loP];
			loP++;
		}
	}
	for (let auxP = lo; auxP <= hi; auxP++){
		arr[auxP] = aux[auxP];
	}
}

function sort(arr, aux, lo, hi){
	if (hi <= lo){
		return;
	}
	let middle = Math.floor((hi - lo) / 2) + lo;
	sort(arr, aux, lo, middle);
	sort(arr, aux, middle + 1, hi);
	merge(arr, aux, lo, middle, hi);
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