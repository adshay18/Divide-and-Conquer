function sortedFrequency(arr, num) {
	let first = findFirst(arr, num);
	if (first === -1) return first;
	let last = findLast(arr, num);
	return last - first + 1;
}
// find first occurence
const findFirst = (arr, num) => {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);

		if ((midIdx === 0 || num > arr[midIdx - 1]) && arr[midIdx] === num) {
			return midIdx;
		}
		if (arr[midIdx] < num) {
			leftIdx = midIdx + 1;
		} else {
			rightIdx = midIdx - 1;
		}
	}
	return -1;
};
// find last, based on first to shorten even more
const findLast = (arr, num) => {
	let leftIdx = findFirst(arr, num);
	let rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);

		if ((midIdx === arr.length - 1 || num < arr[midIdx + 1]) && arr[midIdx] === num) {
			return midIdx;
		}
		if (arr[midIdx] > num) {
			rightIdx = midIdx - 1;
		} else {
			leftIdx = midIdx + 1;
		}
	}
};

module.exports = sortedFrequency;
