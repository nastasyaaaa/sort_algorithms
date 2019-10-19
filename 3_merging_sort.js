function mergingSort(array)
{
	if(array.length <= 1) {
		return array;
	}

	let middleIndex = Math.trunc(array.length / 2);
	let firstArray = mergingSort(array.slice(0, middleIndex));
	let secondArray = mergingSort(array.slice(middleIndex, array.length));

	return mergeArrays(firstArray, secondArray);
}

console.log(mergingSort([78, 56, 12, 100, 45, 1, 4, 10, 56, 72, 45678, 3]));


/* MERGE FUNCTION */
function mergeArrays(firstArray, secondArray)
{
	let resultArray = [];
	let fIndex = 0;
	let sIndex = 0;

	while(fIndex <= firstArray.length || sIndex < secondArray.length) {


		if(firstArray[fIndex] === undefined) {
			for(let j = sIndex; j < secondArray.length; j++) {
				resultArray.push(secondArray[j]);
			}

			break;
		}

		if(secondArray[sIndex] === undefined) {
			for(let j = fIndex; j < firstArray.length; j++) {
				resultArray.push( firstArray[j] );
			}

			break;
		}

		if(firstArray[fIndex] < secondArray[sIndex]) {

			resultArray.push(firstArray[fIndex]); 
			fIndex++;
		
		}else if(firstArray[fIndex] > secondArray[sIndex]) {

			resultArray.push(secondArray[sIndex]);
			sIndex++; 

		}else{
			resultArray.push(firstArray[fIndex]);
			resultArray.push(secondArray[sIndex]);
			fIndex++;
			sIndex++;
		}
	}

	return resultArray;
}

