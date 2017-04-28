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



//TESTING

function isUniqueTest(str){
	let test1 = isUnique(str);
	let test2 = isUniqueConstantSpace(str);
	if (test1 !== test2){
		throw "INCONSISTENT RESULTS";
	}
	return test1;
}


let testStr = "abcdll";
if (isUniqueTest(testStr)){
	throw "Failed Test 1"
}

testStr = ""
if (!isUniqueTest(testStr)){
	throw "Failed Test 2"
}

testStr = "AaBbcdEC";
if (!isUniqueTest(testStr)){
	throw "Failed Test 3"
}

console.log("success")