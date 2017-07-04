function permutationsWithoutDups(str){
	let ret = [];
	recursHelper(str.split(""), ret, "")
}

function recursHelper(str, permutations, currPerm){
	if (str.length === 0){
		return permutations.push(currPerm);
	}
	let chosenChar;
	for (let i = 0; i < str.length; i++){
		chosenChar = str.splice(i, 1);
		recursHelper(str, permutations, currPerm + chosenChar);
		str.splice(i, 0, chosenChar);
	}
}