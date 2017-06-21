const charsToIdxs = {0: 0, 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

function lsdRadixSort(arr){
	let aux = new Array(arr.length);
	let d = longestStrLen(arr) - 1;
	let charCounts = new Array(Object.keys(charsToIdxs).length + 1);
	while (d >= 0){		
		zeroOutCharCounts(charCounts)

		arr.forEach((str) => {
			const char = (d < str.length) ? str[d] : 0;
			(charCounts[charsToIdxs[char] + 1])++;
		})
		console.log(`d is ${d}`);
		showCharCounts(charCounts);

		for (let i = 1; i < charCounts.length; i++){
			charCounts[i] += charCounts[i - 1];
		}

		arr.forEach((str) => {
			const char = (d < str.length) ? str[d] : 0;
			const charIdx = charsToIdxs[char];

			aux[charCounts[charIdx]] = str;
			(charCounts[charIdx])++;
		})

		aux.forEach((str, i) => {
			arr[i] = str;
		})

		d--;
	}
}

function zeroOutCharCounts(charCounts){
	for (let i = 0; i < charCounts.length; i++){
		charCounts[i] = 0;
	}
	// charCounts.forEach((_, i) => {
	// 	charCounts[i] = 0;
	// })
}

function showCharCounts(charCounts){
	charCounts.forEach((count, i) => {
		console.log(`${i} : ${count}`);
	})
}

function longestStrLen(arr){
	let longestLen = 0;
	arr.forEach((el) => {
		if (el.length > longestLen){
			longestLen = el.length;
		}
	})
	return longestLen;
}

function test(){
	let strs = ["abcde", "abc", "cabde", "acbde", "acb", "acbed", "cadbe", "cadeb", "cabde", "ccbde"];
	strs = strs.map((str) => {
		return str.split("");
	})
	lsdRadixSort(strs);
	console.log(strs);
}

test();

