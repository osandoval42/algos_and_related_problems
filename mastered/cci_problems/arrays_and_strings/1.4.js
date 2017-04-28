function palindromePermutation(str){ //N time    N space
	str = str.split(" ").join("");
	let characterCountIsOdd = {};

	for (let i = 0; i < str.length; i++){
		let prevCharCountIsOdd = characterCountIsOdd[str[i]];
		if (prevCharCountIsOdd === undefined){
			characterCountIsOdd[str[i]] = true
		} else {
			delete characterCountIsOdd[str[i]];
		}
	}

	return (Object.keys(characterCountIsOdd).length <= 1);
}


//TEST
let test = "tact coa";
if (!palindromePermutation(test)){	
	throw "Failed test 1";
}

test = "Ossc";
if (palindromePermutation(test)){
	throw "Failed test 2";
}

test = "OsscO";
if (!palindromePermutation(test)){
	throw "Failed test 3";
}

console.log("success");