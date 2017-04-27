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