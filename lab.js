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

console.log(pairTheSum([5,7,2, 10, 11], 9));