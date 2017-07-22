 function factorialZeros(nFac){
 	let zeroCount = 0;
 	let divisor = 10;
 	let acc = 1;
 	for (let currIdx = 2; currIdx <= nFac; currIdx++){
 		acc *= currIdx;
 		while (acc % divisor === 0){
 			divisor *= 10;
 			zeroCount++;
 		}
 	}
 	return zeroCount;
 }

 function test(){
 	console.log(factorialZeros(4));
 }

 test()