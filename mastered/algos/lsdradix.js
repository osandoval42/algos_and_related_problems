function lsdRadix(arr){
	/*
		find greatest length string in array
		set d to length - 1 of this string
		create charToIdx mapping, include a mapping for empty char, mapping to 0.
		Create auxillary array
		create char count arr of length possibleChars + 2 (one for empty char and one extra)
		while (d >= 0){
			set counts to 0
			Move through arr, observing dth character at each time, and incrementing (charToIdx + 1) of the count arr by 1
			move from 1 to length - 1 of count arr, adding the idx to its left of each thing to it.
			for every word observe the dth character.  Lookup the corresponding idx (value of count[charToIdx]) and place word at that idx in aux.  Increment (value of count[charToIdx])
			copy everything from aux array.
		}
	*/
}