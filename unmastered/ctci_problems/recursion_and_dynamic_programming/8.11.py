def coins(n):
	sortedDenoms = [1, 5, 10, 25]
	cache = [{1: 1, 5: 1, 10: 1, 25: 1}]
	for i in range(1, n + 1):
		cache.append({1: 0, 5: 0, 10: 0, 25: 0})
	return makeChange(n, sortedDenoms, cache)

def makeChange(n, sortedDenoms, cache):
	if n < 0:
		return 0
	biggestDenom = sortedDenoms[len(sortedDenoms) - 1]
	if (cache[n][biggestDenom] > 0):
		return cache[n][biggestDenom]

	ways = 0
	for denomIdx in range(len(sortedDenoms) - 1, -1, -1):
		currDenom = sortedDenoms[denomIdx]
		ways += makeChange(n - currDenom, sortedDenoms[0:denomIdx + 1], cache)
	cache[n][biggestDenom] = ways
	return ways


def test():
	print coins(100)

test();
