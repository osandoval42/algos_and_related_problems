

def multiblah(x, y):
	if (x == 0 or y == 0):
		return 0
	times = min(x, y)
	factor = max(x, y)
	return recursMultiply(factor, factor, times, 1, {1: factor})


def recursMultiply(runningSum, factor, times, prevTimesCounted, cache):
	if (prevTimesCounted == times):
		return runningSum

	runningSum *= 2
	newTimesCounted = prevTimesCounted * 2
	cache[newTimesCounted] = runningSum
	if (newTimesCounted > times):
		currDiff = (newTimesCounted - times)
		oldDiff = (times - prevTimesCounted)
		if (currDiff <= oldDiff):
			return runningSum - (recursMultiplyWithCache(factor, factor, currDiff - 1, cache))
		else: 
			runningSum /= 2
			return runningSum + (recursMultiplyWithCache(factor, factor, oldDiff - 1, cache))
	else:
		return recursMultiply(runningSum, factor, times, newTimesCounted, cache)

def recursMultiplyWithCache(runningSum, factor, timesNeeded, cache):
	if timesNeeded == 0:
		return runningSum

	greatestShortTime = 1
	for key in cache:
		if (key == timesNeeded):
			return runningSum + cache[timesNeeded]
		elif (key < timesNeeded and key > greatestShortTime):
			greatestShortTime = key

	return recursMultiplyWithCache(runningSum + cache[greatestShortTime], factor, timesNeeded - greatestShortTime, cache)

def test():
	x = 20
	y = 82
	product = multiblah(x, y)
	print(product)

test()
