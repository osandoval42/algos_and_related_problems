function stackOfBoxes(arr){
	arr.sort((box1, box2) => {
		return (box1.height - box2.height);
	})
	return recursHelper(arr, 0, undefined, 0)
}
/*
	Need arr of boxes left ordered by height
	Need height accumulator
	Need highestHeightBoxSeen
	Idx On
*/

function recursHelper(boxes, boxIdx, largestBoxSeen, heightSum){
	if (boxIdx === boxes.length){
		return (heightSum);
	}
	const currBox = boxes[boxIdx];
	boxIdx++;
	let includingThisBoxHeightSum = -1;
	let excludingThisBoxHeightSum = recursHelper(boxes, boxIdx, largestBoxSeen, heightSum);
	if (newBoxIsBiggerInEveryWay(currBox, largestBoxSeen))
	{
		includingThisBoxHeightSum = recursHelper(boxes, boxIdx, currBox, heightSum + currBox.height);
	}
	return (Math.max(excludingThisBoxHeightSum, includingThisBoxHeightSum));
}

function newBoxIsBiggerInEveryWay(newBox, formerLargestBox){
	if (!formerLargestBox){
		return true;
	}
	return (newBox.height >= formerLargestBox.height && newBox.width >= formerLargestBox.width && 
		newBox.depth >= formerLargestBox.depth);
}