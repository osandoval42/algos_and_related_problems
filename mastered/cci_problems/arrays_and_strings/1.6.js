function stringCompression(str){ //N time //N space
	let result = "";

	let ltrCount = 0;
	for (let i = 0; i < str.length; i++){
		if (ltrCount === 0){
			ltrCount++;
		} else {
			if (str[i] === str[i - 1]){
				ltrCount++;
			} else {
				result += (str[i - 1] + ltrCount);
				ltrCount = 1;
			}
		}
	}

	if (ltrCount >= 1){
		result += (str[str.length - 1] + ltrCount);
	}

	return ((str.length <= result) ? str : result);
}

let test1 = "aabcccccaaa";

let res = stringCompression(test1)
if (res !== "a2b1c5a3"){
	console.error(`${res} !== a2b1c5a3`);
	console.error(`a2b1c5a3 !== ${res}`);
	throw "faild test 1";
}

console.log("success");