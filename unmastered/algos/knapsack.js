function Good(val, weight){
	this.weight = weight;
	this.val = val;
}

function knapsackProblem(goods, knapsackWeight){ 
	/*
		each row will correspond to goods[row]
		each col will correspond to said weight
		thus goods.length rows.  knapsackWeight + 1 cols
	*/
	const matrix = getKnapsackMatrix(goods, knapsackWeight);
	let goodsUsed = [];
	let currKnapsackWeight = knapsackWeight;
	let currGoodIdx = goods.length - 1;
	while (currGoodIdx > 0 && currKnapsackWeight > 0){
		if (matrix[currGoodIdx - 1][currKnapsackWeight] !== matrix[currGoodIdx][currKnapsackWeight]){
			goodsUsed.push(goods[currGoodIdx]);
			currKnapsackWeight -= goods[currGoodIdx].weight;
		}
		currGoodIdx--;
	}
	if (currKnapsackWeight > 0){
		if (matrix[0][currKnapsackWeight] > 0){
			goodsUsed.push(goods[0]);
		}
	}
	return goodsUsed;
}

function getKnapsackMatrix(goods, knapsackWeight){
	let matrix = new Array(goods.length);
	const knapsackWeights = knapsackWeight + 1;
	let bestValWithoutThisKnapsack;
	let bestValWithThisKnapsack;
	for (let goodIdx = 0; goodIdx < matrix.length; goodIdx++){
		matrix[goodIdx] = new Array(knapsackWeights);
	}
	for (let goodIdx = 0; goodIdx < matrix.length; goodIdx++){
		for (freeWeight = 0; freeWeight < knapsackWeights; freeWeight++){
			if (goods[goodIdx].weight > freeWeight){
				matrix[goodIdx][freeWeight] = (goodIdx > 0) ? matrix[goodIdx - 1][freeWeight] : 0;
			} else {
				bestValWithoutThisKnapsack = (goodIdx > 0) ? matrix[goodIdx - 1][freeWeight] : 0;
				bestValWithThisKnapsack = goods[goodIdx].val
				if (goodIdx > 0){
					bestValWithThisKnapsack += matrix[goodIdx - 1][freeWeight - goods[goodIdx].weight];
				}
				matrix[goodIdx][freeWeight] = Math.max(bestValWithoutThisKnapsack, bestValWithThisKnapsack);
			}
		}
	}
	return matrix;
}

function printGoodsUsed(goodsUsed){
	goodsUsed.forEach((good) => {
		console.log(`weight: ${good.weight}, val: ${good.val}`);
	})
}

function test(){
	const knapsackWeight = 7;
	let goods = [];
	goods.push(new Good(1, 1));
	goods.push(new Good(4, 3));
	goods.push(new Good(5, 4));
	goods.push(new Good(7, 5));
	const goodsUsed = knapsackProblem(goods, knapsackWeight);
	printGoodsUsed(goodsUsed);
}

test()