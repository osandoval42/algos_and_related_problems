function permutationsWithDups(str){
	let ret = [];
	recursHelper(str.split(""), ret, "")
}

function recursHelper(str, permutations, currPerm){
	let alreadySeenAtThisOrdering = {};
	if (str.length === 0){
		return permutations.push(currPerm);
	}
	let chosenChar;
	for (let i = 0; i < str.length; i++){
		chosenChar = str.splice(i, 1);
		if (alreadySeenAtThisOrdering[chosenChar]){
			str.splice(i, 0, chosenChar);
			continue;
		}
		recursHelper(str, permutations, currPerm + chosenChar);
		alreadySeenAtThisOrdering[chosenChar] = true;
		str.splice(i, 0, chosenChar);
	}
}