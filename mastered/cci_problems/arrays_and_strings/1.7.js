function rotateMatrix(matrix){ //linear time and constant space to matrix size
	let n = matrix.length;

	let startIdx = Math.floor(n / 2);
	let currLayerLength = 1;
	if (n % 2 === 0) {
		startIdx -= 1;
		currLayerLength += 1;
	}

	while (startIdx >= 0){
		rotateLayer(startIdx, currLayerLength, matrix);
		startIdx--;
		currLayerLength += 2;
	}
}

function rotateLayer(startIdx, currLayerLength, matrix){
	for (let cellIdx = 0; cellIdx < currLayerLength - 1; cellIdx++){
		let valueJustReplaced = matrix[startIdx][startIdx + cellIdx];
		for (let j = 0; j < 4; j++){
			let posToReplace;
			switch (j){
				case 0:  posToReplace = {row: startIdx + cellIdx, col: startIdx + currLayerLength - 1};
				break;
				case 1: posToReplace = {row: startIdx + currLayerLength - 1, col: startIdx + currLayerLength - 1 - cellIdx};
				break;
				case 2: posToReplace = {row: startIdx + currLayerLength - 1 - cellIdx, col: startIdx};
				break;
				case 3: posToReplace = {row: startIdx, col: startIdx + cellIdx};
				break;
				default:
				break;
			}

			let toReplace = matrix[posToReplace.row][posToReplace.col];
			matrix[posToReplace.row][posToReplace.col] = valueJustReplaced;
			valueJustReplaced = toReplace;
		}
	}
}

//TEST

function printMatrix(matrix){
	for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++){
		let toPrint = ""
		for (let colIdx = 0; colIdx < matrix[0].length; colIdx++){
			toPrint += ` ${matrix[rowIdx][colIdx]} `;
		}
		console.log(toPrint);
	}
}
console.log("BEFORE");
var testMatrix = [["01", "02", "03", "04", "05" ,"06"], ["07","08","09","10","11","12"], ["13","14","15","16","17","18"], ["19","20","21","22","23","24"], ["25","26","27","28","29","30"], ["31","32","33","34","35","36"]];
printMatrix(testMatrix);
rotateMatrix(testMatrix);
console.log("AFTER");
printMatrix(testMatrix);

