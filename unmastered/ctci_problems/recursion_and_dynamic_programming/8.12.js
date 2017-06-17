/*
	an array of ints corresponds to the rows a queen takes place on the board.  They can have values of 0-7.

	we go from left to right.  Before each increment of the last guy, we check if the current positions are valid.  
	Element we are on increments.  If its 8 then we set it back to 0 and go to idx before the current.  
	Algo is done when first guy goes back to 0. 
*/

function eightQueens(){
	let rowsToCols = [0, 0, 0, 0, 0, 0, 0 ,0];
	let countPtr = {count: 0};
	recursHelper(rowsToCols, 0, countPtr);
	return countPtr.count;
}

function recursHelper(queens, currRow, ptr){
	if (currRow === 8){
		if (queensDontIntersect(queens)){
			ptr.count++;
		}
		return;
	}
	while (queens[currRow] < 8){
		if (precedingRowsDontHaveSameColumn(queens, currRow)){
			recursHelper(queens, currRow + 1, ptr);
		}
		queens[currRow]++;
	}
	queens[currRow] = 0;
}

function precedingRowsDontHaveSameColumn(queens, currRow)
{
	for (let i = 0; i < currRow - 1; i++){
		if (queens[i] === queens[currRow]){
			return false;
		}
	}
	return true;
}

function queensDontIntersect(queens){
	let cols = {};
	for (let i = 0; i < queens.length; i++){
		if (cols[queens[i]] === true){
			return false
		}
		cols[queens[i]] = true;
	}
	for (let rowIdx = 0; rowIdx < 8; rowIdx++){
		if (populateDiags([rowIdx, queens[rowIdx]], queens)){
			return false;
		}
	}
	return true;
}

function populateDiags(dimension, queens){
	const DELTAS = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
	let currDimension;
	for (let deltaIdx = 0; deltaIdx < DELTAS.length; deltaIdx++){
		currDimension = dimension.slice();
		while (true){
			currDimension[0] += DELTAS[deltaIdx][0];
			currDimension[1] += DELTAS[deltaIdx][1];
			if (currDimension[0] > 7 || currDimension[0] < 0 || currDimension[1] > 7 || currDimension[1] < 0){
				break;
			}
			if (queens[currDimension[0]] === currDimension[1]){					
				return true;
			}		
		}
	}
	return false;
}

console.log(eightQueens());