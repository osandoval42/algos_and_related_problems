//given I count spaces one pass through
//additionalSpacesNeeded = spaceCount * 2
//moving from right to left, if char{copy to right additionalSpacedsNeeded} else if space {spacesNeeded -= 2; }

function URLify(str, length){ //N
	let chars = str.split("");
	let additionalSpacesNeeded = 2 * spaceCount(chars, length);
	for (let i = length - 1; i >= 0; i--){
		if (chars[i] === " "){
			additionalSpacesNeeded -= 2;
			addUrlSpace(chars, i, additionalSpacesNeeded)
			if (additionalSpacesNeeded === 0){
				break;
			}
		} else {
			chars[i + additionalSpacesNeeded] = chars[i];
		}			
	}
	return chars.join('').trim();
}

function addUrlSpace(chars, idx, additionalSpacesNeeded){
	const map = ['%', '2', '0']
	for (let i = 0; i < 3; i++){
		chars[idx + additionalSpacesNeeded + i] = map[i]
	}
}

function spaceCount(chars, length){
	let spaceCount = 0;
	for (let i = (length - 1); i >= 0; i--){
		if (chars[i] === " "){
			spaceCount++;
		}
	}
	return spaceCount;
}


//TEST

let test = {str: "Mr John Smith    ", origLen: 13};
let res = URLify(test.str, test.origLen)
if (res !== "Mr%20John%20Smith"){
	console.error(`Failed test 1 with res === ${res}`)
	throw "Failed test 1"
}

test.str = "  Oscar Sandoval      "
test.origLen = 16;
if (URLify(test.str, test.origLen) !== "%20%20Oscar%20Sandoval"){
	throw "Failed test 2"
}

if (URLify("  ", 0) !== ""){
	throw "Failed test 3"
}

console.log("success")

