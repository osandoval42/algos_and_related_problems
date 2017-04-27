function isUnique(str){ //N
	let alreadySeen = {};
	for (let i = 0; i < str.length; i++){
		if (alreadySeen[str[i]]){
			return false;
		} else {
			alreadySeen[str[i]] = true;
		}
	}
	return true;
}

function isUniqueConstantSpace(str){ //NLog(N)
	let strArr = str.split("");
	strArr.sort();
	for (let i = 1; i < strArr.length; i++){
		if (strArr[i - 1] === strArr[i]){
			return false;
		}
	}
	return true;
}