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