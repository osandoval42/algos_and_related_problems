//given I count spaces one pass through
//additionalSpacesNeeded = spaceCount * 2
//moving from right to left, if char{copy to right additionalSpacedsNeeded} else if space {spacesNeeded -= 2; }

function URLify(str, capacity){ //N
	let chars = str.split("");
	let additionalSpacedsNeeded = 2 * spaceCount(chars);
	let hasLeftEmptyCapacity = false;
	for (let i = capacity - 1; i >= 0; i--){
		if (hasLeftEmptyCapacity){
			if (chars[i] === " "){
				additionalSpacedsNeeded -= 2;
				addUrlSpace(chars, i, additionalSpacedsNeeded)
			} else {
				chars[i + additionalSpacedsNeeded] = chars[i];
			}			
		} else {
			if (chars[i] !== " "){
				hasLeftEmptyCapacity = true;
				i++;
			}
		}
	}
}

function addUrlSpace(chars, i, additionalSpacedsNeeded){
	const map = ['%', '2', '0']
	for (let i = 0; i < 3; i++){
		chars[i + additionalSpacesNeeded] = map[i]
	}
}

function spaceCount(chars){
	let spaceCount = 0;
	let startedCounting = false;
	for (let i = (chars.length - 1); i >= 0; i--){
		if (startedCounting){
			if (chars[i] === " "){
				spaceCount++;
			}
		} else {
			if (chars[i] !== " "){
				startedCounting = true;
			}
		}
	}
	return spaceCount;
}