const commmaSuffixes = ["", " thousand", " million", " billion"];

function englishInt(int){
	if (int === 0){
		return "Zero";
	}
	let englishNum = undefined;
	const negativePrefix = int < 0 ? "Negative " : ""
	int = Math.abs(int);
	let commaSuffixIdx = 0;
	while (int !== 0){
		let englishNumArr = [];
		let hundredsRemainder = int % 1000;
		if (hundredsRemainder !== 0){
			englishNumArr.push(englishHundreds(hundredsRemainder) + commmaSuffixes[commaSuffixIdx])
			if (englishNum !== undefined){
				englishNumArr.push(englishNum);
			}
			englishNum = englishNumArr.join(" ");
		}
		int = Math.floor(int / 1000);
		commaSuffixIdx++;
	}
	return negativePrefix + englishNum;
}

const oneThroughTeens = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
"fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function englishHundreds(hundredsNum){
	if (hundredsNum < oneThroughTeens.length){
		return oneThroughTeens[hundredsNum];
	}
	let hundredsEnglishArr = [];

	let hundredsPlaceNum = Math.floor(hundredsNum / 100);
	if (hundredsPlaceNum !== 0){
		hundredsEnglishArr.push(oneThroughTeens[hundredsPlaceNum] + " hundred")
	} 

	let twoDigitsNum = hundredsNum % 100;
	if (twoDigitsNum < oneThroughTeens.length && twoDigitsNum > 0){
		hundredsEnglishArr.push(oneThroughTeens[twoDigitsNum])
	} else {
		let twoDigitsEnglishArr = [];
		let tensVal = Math.floor(twoDigitsNum / 10);
		let onesVal = twoDigitsNum % 10;
		if (tensVal !== 0){
			twoDigitsEnglishArr.push(tens[tensVal]);
		}
		if (onesVal !== 0){
			twoDigitsEnglishArr.push(oneThroughTeens[onesVal]);
		}
		hundredsEnglishArr.push(twoDigitsEnglishArr.join(" "));
	}

	return hundredsEnglishArr.join(" ");
}

function test(){
	// let currNum = -4000000000;
	// while (currNum < 4000000000){
	// 	currNum += Math.floor(Math.random() * 1000000);
	// 	try {
	// 		console.log(`trying with ${currNum}`);
	// 		console.log(englishInt(currNum))
	// 	} catch(e){
	// 		console.log(`failed with currNum: ${currNum}`);
	// 		throw e;
	// 	}
	// }
	console.log(englishInt(-4000003010));
}
test()