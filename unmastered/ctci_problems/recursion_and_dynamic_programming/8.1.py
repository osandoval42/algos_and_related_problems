"""
	naive:
		if (curr > n):
			return
		if curr == n:
			return {count} ++
		for i in 1..3
			tripleStepsRecurs(curr + i, {count})


"""

def tripleSteps(n):
	cache = []
	for i in range(n + 1):
		cache.append(0)

	return tripleStepHelper(n, 0, cache)

def tripleStepHelper(n, target, cache):
	currCacheIdx = -1
	for currTarget in range(1, n + 1):
		for j in range(1, 4):
			if (j == currTarget):
				cache[currTarget] += 1
			currCacheIdx = currTarget - j
			if (currCacheIdx >= 0):
				cache[currTarget] += cache[currCacheIdx]
	return cache[n]


def test():
	print tripleSteps(5)

test()