function checkPermutation(str1, str2){ 

}

///tests

let test = {str1: "appLe",str2: "lapep"};
if (checkPermutation(test.str1, test.str2)){
	throw "Failed test 1";
}

test.str1 = "cabbie"
test.str2 = "ebabci";
if (!checkPermutation(test.str1, test.str2)){
	throw "Failed test 2";
}

console.log("success")























//prior solution

// function checkPermutation(str1, str2){ // (alog(a) + blog(b))
// 	if (str1 === str2){
// 		return true;
// 	}
// 	if (str1.length !== str2.length){
// 		return false;
// 	}

// 	let sortedStr1 = str1.split("").sort().join("");
// 	let sortedStr2 = str2.split("").sort().join("");
// 	return (sortedStr1 === sortedStr2);
// }