function msdRadix(arr){
	/*
		create charToIdxMapping for all characters + ' '
		create auxillary array
		set d to 0
		recurs (arr, aux, lo, hi, d){
			if (lo >= hi){
				return;
			}
			create charCountArr.  Zero it out
			for each word in the range, observe the dth char.  Increment the count(correspondingIdx + 1) by 1
			move through our count array, summing each element with that to its left
			Move through each word in range, observing the dth character.  Look at its corresponding idx in count to find where we should place it in aux array.  Increment its corresponding idx value
			copy aux array in range to actual array.
			forEach in count (except for last), recurs(arr, aux, currCountVal + lo, nextCountVal - 1 + lo, d + 1)
		}
	*/
}