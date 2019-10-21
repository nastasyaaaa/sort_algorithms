import {quickSort} from "./4_quick_sort.js";

function bucketSort(array)
{
    if(array.length <= 1) return;

    const min = Math.min(...array);
    const max = Math.max(...array);

    let buckets = [];
    let step = (max - min) > 10 ? (max - min) / 10 : 1;

    let counter = 0;
    for(let i = min; i <= max; i += step){
        buckets[counter] = [];
        counter++;
    }

    for(let k = 0; k < array.length; k++) {
        let bucketIndex = Math.floor((array[k] - min) / step);
        buckets[bucketIndex].push(array[k]);
    }

    let result = [];
    for(let i = 0; i < buckets.length; i++) {
        quickSort(buckets[i]);

        result.push(...buckets[i]);
    }

    return result;
}

console.log(bucketSort([34, 31, 21, 11, 8, 4, 1, 25, 20, 12, 19]));