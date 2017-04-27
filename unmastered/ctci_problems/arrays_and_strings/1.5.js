function oneAway(str1, str2){ //N time    constant space
	if (str1 === str2){
		return true;
	}

	let bigStr;
	let smallStr;
	if (str1.length > str2.length){
		bigStr = str1;
		smallStr = str2;
	} else {
		bigStr = str2;
		smallStr = str1;
	}

	if (bigStr.length === smallStr.length){
		return oneCharacterIsDifferent(bigStr, smallStr);
	} else if ((bigStr.length - 1) === smallStr.length){
		return oneExtraCharacter(bigStr, smallStr);
	} else {
		return false;
	}
}

function oneExtraCharacter(bigStr, smallStr){
	let bigStrIdxOffset = 0;
	for (let i = 0; i < smallStr.length; i++){
		if (smallStr[i] !== bigStr[i + bigStrIdxOffset]){
			if (bigStrIdxOffset === 0){
				bigStrIdxOffset = 1;
				i--;
			} else {
				return false;
			}
		}
	}
	return true;
}

function oneCharacterIsDifferent(str1, str2){
	let hasDiffered = false;
	for (let i = 0; i < str1.length; i++){
		if (str1[i] !== str2[i]){
			if (hasDiffered){
				return false;
			} else {
				hasDiffered = true;
			}
		}
	}
	return true;
}