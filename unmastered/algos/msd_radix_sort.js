const charAt = {0: 0, 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

function msdRadixSort(arr){
	const aux = new Array(arr.length);

	sort(arr, aux, 0, arr.length - 1, 0);
}

function sort(arr, aux, lo, hi, d){
	if (hi <= lo){
		return;
	}
	let charCounts = new Array(Object.keys(charAt).length + 1);
	zeroOutCharCounts(charCounts);
	countChars(arr, lo, hi, d, charCounts);

	for (let i = 1; i < charCounts.length; i++){
		charCounts[i] += charCounts[i - 1];
	}
	
	for (let i = lo; i <= hi; i++){
		let countIdx = ((arr[i].length - 1) >= d) ? (charAt[arr[i][d]]) : (charAt[0]);
		aux[charCounts[countIdx] + lo] = arr[i];
		(charCounts[countIdx])++;
	}
	
	for (let i = lo; i <= hi; i++){
		arr[i] = aux[i];
	}
	
	for (let i = 0; i < charCounts.length - 1; i++){
		sort(arr, aux, charCounts[i] + lo, charCounts[i + 1] + lo - 1, d + 1);
	}
}

function zeroOutCharCounts(arr){
	for (let i = 0; i < arr.length; i++){
		arr[i] = 0;
	}
}

function countChars(arr, lo, hi, d, charCounts){
	for (let i = lo; i <= hi; i++){
		let countIdx = ((arr[i].length - 1) >= d) ? (charAt[arr[i][d]] + 1) : (charAt[0] + 1);
		(charCounts[countIdx])++;
	}
}

function printStrs(strs){
	strs.forEach((str) => {
		console.log(str);
	})
}

function test(){
	let strs = ["abcde", "abc", "cabde", "acbde", "acb", "acbed", "cadbe", "cadeb", "cabde", "ccbde"];
	strs = strs.map((str) => {
		return str.split("");
	})
	msdRadixSort(strs);
	console.log(strs);
}

test();
