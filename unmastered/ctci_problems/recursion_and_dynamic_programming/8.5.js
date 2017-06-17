function multiply(a, b){
	if (a > b){
		return recursHelper(a, b, 0, 0);
	} else {
		return recursHelper(b, a, 0, 0);
	}
}

function recursHelper(constantFactor, decrementingFactor, sum, factorsOf2TakenOut)
{
	if (decrementingFactor === 0){
		while (factorsOf2TakenOut > 0){
			sum << 1;
			factorsOf2TakenOut--;
		}
		return sum;
	}
	if (isEven(decrementingFactor)){
		decrementingFactor >> 1
		factorsOf2TakenOut++;
		return recursHelper(constantFactor, decrementingFactor, sum, factorsOf2TakenOut)
	} else {
		sum += constantFactor;
		decrementingFactor--;
	}
}

function isEven(num){
	const strNum = String(num)
	const lastDigit = strNum.slice(strNum.length - 1)[0];
	return (lastDigit === '0' || lastDigit === '2' || lastDigit === '4' || lastDigit === '6' || lastDigit === '8');
}