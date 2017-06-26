function greatestCommonSubsequence(A, B){
	const lengthMatrix = gcsMatrix(A, B);
	let aIdx = A.length;
	let bIdx = B.length;
	let str = "";
	while (aIdx !== 0 && bIdx !== 0){
		if (A[aIdx - 1] === B[bIdx - 1]){
			str = A[aIdx - 1] + str;
			aIdx--;
			bIdx--;
		} else if (lengthMatrix[aIdx - 1][bIdx] > lengthMatrix[aIdx][bIdx - 1]){
			aIdx--;
		} else {
			bIdx--;
		}
	}
	return str;
}

function gcsMatrix(A, B){
	let aRows = new Array(A.length + 1);
	for (let aIdx = 0; aIdx < aRows.length; aIdx++){
		aRows[aIdx] = new Array(B.length + 1);
	}
	for (let bIdx = 0; bIdx < B.length + 1; bIdx++){
		aRows[0][bIdx] = 0;
	}
	for (let aIdx = 0; aIdx < aRows.length; aIdx++){
		aRows[aIdx][0] = 0;
	}
	for (let aIdx = 1; aIdx < aRows.length; aIdx++){
		for (let bIdx = 1; bIdx< B.length + 1; bIdx++){
			if (B[bIdx - 1] === A[aIdx - 1]){
				aRows[aIdx][bIdx] = aRows[aIdx - 1][bIdx - 1] + 1;
			} else {
				aRows[aIdx][bIdx] = Math.max(aRows[aIdx - 1][bIdx], aRows[aIdx][bIdx - 1]);
			}
		}
	}
	return aRows;
}

function greatestCommonSubsequenceLength(A, B){
	const lengthMatrix = gcsMatrix(A, B);
	return (lengthMatrix[A.length][B.length]);
}

function test(){
	const A = "abcdaf";
	const B = "acbcf";
	const subseq = greatestCommonSubsequence(A, B);
	console.log(`subseq is ${subseq}`);
}
test();