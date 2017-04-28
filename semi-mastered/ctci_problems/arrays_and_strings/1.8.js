function zeroMatrix(matrix){ 

}



function fillRowAndCol(matrix, rowIdx, colIdx){
	for (var i = 0; i < matrix[0].length; i++){
		matrix[rowIdx][i] = 0;
	}
	for (var i = 0; i < matrix.length; i++){
		matrix[i][colIdx] = 0;
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

let matrix = [[1, 1, 1, 0],[1, 0, 1, 1],[1, 1, 1, 1]];
zeroMatrix(matrix);
printMatrix(matrix);


// function zeroMatrix(matrix){ //N time    N space
// 	let cols = []
// 	if (matrix.length > 0){
// 		cols = new Array(matrix[0].length, false);
// 	}
// 	for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++){
// 		for (let colIdx = 0; colIdx < matrix[0].length; colIdx++){
// 			if (cols[colIdx]){
// 				continue;
// 			}
// 			if (matrix[rowIdx][colIdx] === 0){				
// 				cols[colIdx] = true;
// 				fillRowAndCol(matrix, rowIdx, colIdx);				
// 				colIdx = matrix[0].length - 1;
// 			} 
// 		}
// 	}
// }