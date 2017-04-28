function rotateMatrix(matrix){ //linear time and constant space to matrix size
	let n = matrix.length;

	let startIdx = Math.floor(n / 2);
	let currLayerLength = 1;
	if (n % 2 === 0) {
		startIdx -= 1;
		currLayerLength += 1;
	}

	while (startIdx >= 0){
		rotateLayer(startIdx, matrix);
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
				case 1: posToReplace = {row: startIdx + currLayerLength - 1, col: startIdx + currLayerLength - cellIdx};
				break;
				case 2: posToReplace = {row: startIdx + currLayerLength - cellIdx, col: startIdx};
				break;
				case 3: posToReplace = {row: startIdx), col: startIdx + cellIdx};
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