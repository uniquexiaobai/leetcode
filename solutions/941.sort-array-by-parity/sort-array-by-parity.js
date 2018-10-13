/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	var i = 0, j = A.length - 1, temp;

	while (i < j) {
		if (A[i] & 1) {
			temp = A[j];
			A[j] = A[i];
			A[i] = temp;
			j--;
		} else {
			i++;
		}
	}
	
	return A;
};