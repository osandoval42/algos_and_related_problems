/*
	pass in 0 and length - 1 to binary search.
	if value is credible, do typical binary search search pattern
	create leftIdx and rightIdx, each 1 apart from the midpoint.  While true{
		if we find a string with leftIdx{
			if its equal to target return
			if its greater than target{
				bsearch with lo + 1, leftIdx - 1
			} else {
				bsearch with rightIdx, hi - 1
			}
		}
		if we find a string with rightIdx{
			if its equal to target return
			if its greater than target{
				bsearch with lo + 1, leftIdx - 1
			} else {
				bsearch with rightIdx + 1, hi - 1
			}
		}
		leftIdx--
		rightIdx++
	}
*/

function sparseSearch(){

}
