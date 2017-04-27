function checkPermutation(str1, str2){ // (alog(a) + blog(b))
	if (str1 === str2){
		return true;
	}

	let sortedStr1 = str1.split("").sort().join("");
	let sortedStr2 = str2.split("").sort().join("");
	return (sortedStr1 === sortedStr2);
}