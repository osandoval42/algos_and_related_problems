"""
	If I cant get to end, its wrong
	If i get to end, check if value up to that start idx that found the end is a substring 
"""

def stringRotation(s1, s2):
	if not len(s1) == len(s2):
		return False;

	firstHalfStartIdx = None;
	currS2Idx = None;
	for s1Idx in range(len(s1)):
		if firstHalfStartIdx is None:
			firstHalfStartIdx = s1Idx if s1[s1Idx] == s2[0] else None
		else:
			currS2Idx = s1Idx - firstHalfStartIdx
			firstHalfStartIdx = firstHalfStartIdx if s1[s1Idx] == s2[currS2Idx] else None

	if firstHalfStartIdx is None:
		return False;
	else: 
		secondHalf = s1[0:firstHalfStartIdx];
		return isSubstring(secondHalf, s2);


def isSubstring(sub, sup):
	if sub == "":
		return True;

	for supIdx in range(len(sup) - (len(sub) - 1)):
		if sup[supIdx] == sub[0]:
			if sup[supIdx:len(sub) + supIdx] == sub:
				return True;
	return False;



def test():
	sub = "def";
	sup = "abcdefg";
	if not isSubstring(sub, sup):
		raise IndexError("FAILED 1")
	sub = "def";
	sup = "abcdef"
	if not isSubstring(sub, sup):
		raise IndexError("FAILED 2")
	sub = "dhf";
	sup = "abcdefg"
	if isSubstring(sub, sup):
		raise IndexError("FAILED 3")
	sub = "";
	sup = "abcdefg"
	if not isSubstring(sub, sup):
		raise IndexError("FAILED 4")
	print "{}".format("success");

def test1():
	s1 = "waterbottle"
	s2 = "erbottlewat"
	if not (stringRotation(s1, s2)):
		raise IndexError("FAILURE")
	s1 = "penis"
	s2 = "enistp"
	if stringRotation(s1, s2):
		raise IndexError("FAILURE")
	print "Success"

# test();

test1();
