Array.prototype.quickSort = function(){
	this.quickSortMain(0, this.length - 1);
}

Array.prototype.quickSortMain = function(lowerIdx, higherIdx){
	if (higherIdx - lowerIdx <= 0){
		return;
	}
	if (higherIdx - lowerIdx > 4){
		this.makeLowestIdxMedianOfThree(lowerIdx);
	}
	let originalLowerIdx = lowerIdx;
	let originalHigherIdx = higherIdx;
	let pivot = this[lowerIdx];
	lowerIdx++;
	while (true){
		while (lowerIdx < originalHigherIdx && this[lowerIdx] < pivot){
			lowerIdx++;
		}
		while (this[higherIdx] > pivot){
			higherIdx--;
		}

		if (higherIdx <= lowerIdx){
			break;
		}
		this.exchange(lowerIdx, higherIdx);
		higherIdx--;
		lowerIdx++;
	}
	this.exchange(originalLowerIdx, higherIdx);
	this.quickSortMain(originalLowerIdx, higherIdx - 1);
	this.quickSortMain(higherIdx + 1, originalHigherIdx);
}

Array.prototype.makeLowestIdxMedianOfThree = function(idx){
	let min = Math.min(this[idx], this[idx + 1]);
	min = Math.min(this[idx + 2], min);
	let max = Math.max(this[idx], this[idx + 1]);
	max = Math.max(this[idx + 2], max);

	for (let i = 1; i < 3; i++){
		if (this[i] !== min && this[i] !== max){
			return this.exchange(idx, idx + i);
		}
	}
}

Array.prototype.exchange = function(i, j){
	let holder = this[i];
	this[i] = this[j];
	this[j] = holder;
}

function test(){
	let arr = [10, -8, 3, 4, 3, -8, 12, -20, 0];
	arr.quickSort();
	console.log(arr);
}

test();