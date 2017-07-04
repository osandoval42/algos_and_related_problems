/*
	recursHelper takes in Idx of who we are trying to move in this round.
	Prints out the parenth set coming in.
	Count from left to right excess left parenth (lefts - rights up to one we are trying to move)
	determine nextMovingParent (next right parenth after the one we start with)
	Attempts to move what we are allowed to as many times to the left as possible, each time calling the function with the changed set, and
		moving parenth set to be the nextMoving parenth
*/

function Parens(n){
	if (n === 0){
		return;
	}
	let parenthSet = new Array(n * 2);
	let i = 0;
	while (i < n)
	{
		parenthSet[i] = '(';
		i++;
	}
	n *= 2;
	while (i < n){
		parenthSet[i] = ')';
		i++;
	}
	recursHelper(parenthSet, n / 2);
}

function recursHelper(parenthSet, movingIdx){
	console.log(parenthSet.join(''));
	if (movingIdx === undefined){
		return;
	}

	let leftParenthsToMatchMoving = 0;
	for (let i = 0; i < movingIdx; i++){
		if (parenthSet[i] === '('){
			leftParenthsToMatchMoving++;
		} else {
			leftParenthsToMatchMoving--;
		}
	}

	let nextMovingParent = undefined;
	for (let i = movingIdx + 1; i < parenthSet.length; i++){
		if (parenthSet[i] === ')'){
			nextMovingParent = i;
			break;
		}
	}

	let toMoveToIdx;
	while (true){
		toMoveToIdx = movingIdx - 1;
		if (parenthSet[toMoveToIdx] === ')'){
			break;
		}
		if (leftParenthsToMatchMoving === 1){
			break;
		} else {
			leftParenthsToMatchMoving--;
			swap(parenthSet, movingIdx, toMoveToIdx);
			movingIdx = toMoveToIdx;
			recursHelper(parenthSet.slice(), nextMovingParent)
		}
	}
}

function swap(parenthSet, idx1, idx2)
{
	const holder = parenthSet[idx1];
	parenthSet[idx1] = parenthSet[idx2];
	parenthSet[idx2] = holder;
}

Parens(3);