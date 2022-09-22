/* *Instructions* 

    You will receive two arguments, the first one will be an array with a series of numbers and the second will be just a number
    this number will be called the target as you need to form that target number with the integers provided by the array.

    In summary you need to return true if the target number can be formed by the integers or false if it is impossible 
    taking into account that you cannot repeat integers.

    Good luck!

*/

// pairTheSum
// description: find a pair of a sum that be equal to a target
// input: arr, number.
// output: boolean

/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {
    let res = false;
    /* Only make changes below this comment */
	let min = Math.min(...numbers);
	if (min > target) {
		return false;
	};

	for (num in numbers) {
		if (numbers[num] > target) {
			continue;
		};
		
		for (pair in numbers) {
			if (num == pair) {
				continue;
			}
			if (numbers[pair] + numbers[num] == target) {
				return true;
			};
		};
	};
    /* Only make changes below this comment */
    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;