//NlogN + MlogM solution

function smallestDiff(x, y){
	x.sort();
	y.sort()
	let lowestXIdxGreaterThanCurrY = 0
	let lowestDiff = Infinity;
	
	for (let yIdx = 0; yIdx++; yIdx < y.length){
		while (x[lowestXIdxGreaterThanCurrY] < y[yIdx]){
			lowestXIdxGreaterThanCurrY++;
		}
		let minDiffForCurrY = Infinity
		if (lowestXIdxGreaterThanCurrY > 0){
			minDiffForCurrY = y[yIdx] - x[lowestXIdxGreaterThanCurrY - 1];
		}
		if (lowestXIdxGreaterThanCurrY < y.length){
			minDiffForCurrY = Math.min(minDiffForCurrY, x[lowestXIdxGreaterThanCurrY] - y[yIdx]);
		}
		lowestDiff = Math.min(minDiffForCurrY, lowestDiff);
		if (lowestDiff === 0){
			return lowestDiff;
		}
	}
	return lowestDiff
}
