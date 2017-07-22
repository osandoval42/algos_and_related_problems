/*
	move through each row, checking if each thing is the same.  On first row set col1, col2, and col3, diag1, and diag2 to corresponding variables
	Ons econd row we compare each col against vars, if they are good, we keep it, else make it something impossible
	On third row, if we find any matches with previous then return.
*/