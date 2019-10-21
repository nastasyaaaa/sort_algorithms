function countingSort(array, min, max)
{
	let counterArray = [];
	let sortedArray = [];


	for(let i = min; i <= max; i++) {
		counterArray[i] = 0;
	}

	for(let i = 0; i < array.length; i++) {
		counterArray[array[i]]++;
	}

	for(let i = min; i <= max; i++) {
		for(let k = 0; k < counterArray[i]; k++) {
			sortedArray.push(i);
		}
	}

	return sortedArray;
}

console.log(countingSort([3, 4, 1, 2 , 3, 2, 2, 4,2, 1,2, 1,5, 3], 1, 5));