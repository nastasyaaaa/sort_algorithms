export function quickSort(array, leftBorder = 0, rightBorder = array.length - 1)
{
	if(leftBorder >= rightBorder) return;

	let right = rightBorder;
	let left = leftBorder;
	let middle = Math.trunc((right + left) / 2);


	while(left < right) {
		
		while(array[left] <= array[middle] && left < middle) {
			left++;
		}

		while(array[right] >= array[middle] && right > middle) {
			right--;
		}

		if(left < right) {
			swap(array, left, right);
		}

		if(left === middle) middle = right;
		else if(right === middle) middle = left;
	}


	quickSort(array, leftBorder, middle - 1);
	quickSort(array, middle + 1, rightBorder);
}

function swap(array, fIndex, sIndex)
{
	let tmp = array[fIndex];
	array[fIndex] = array[sIndex];
	array[sIndex] = tmp;
}

let arr = [4, 0, 1, 4, 0, 6, 4, 10, 6, 8, 4];

quickSort(arr);
console.log(arr);

