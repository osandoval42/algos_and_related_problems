function greatestCommonSubsequence(str1, str2){

	/*
		gcs(str1, str2, i, j) = {
			if (str1[i] === str2[j]){
				return 1 + gcs(str1, str2, i - 1, j - 1);
			} else {
				return Math.max(gcs(str1, str2, i - 1, j), gcs(str1, str2, i, j - 1));
			}
		}

		thus: createMatrixGCS(str1, str2){
			1) create a matrix with str2.length cols and str1.length rows.  Set all of col 1 and row 1 to be 0
			2) For each i and j combination.{
				1) if strs chars are equal than set matrix point to equal 1 + (i - 1, j - 1). Else set it to max((i - 1, j), (i, j - 1));

			}
			3) return matrix
		}


		1) Call createMatrix to obtain it.
		2) Call createCommonSubstr(str1, str2, matrix)

		createCommonSubstr(str1, str2, matrix){
			var substr = ""
			set i and j to their last values
			while (i >= 0 && j >= 0){
				if (i - 1, j) is same as (i , j){ (with boundary checks)
					i--
				} else if (i, j 0 1) is same as (i , j){
					j--
				} else {
					substr = (i) + substr
					i--
					j--
				}
			}
			return substr
		}
	*/
}