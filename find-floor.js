function findFloor(arr, num) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	// quick check if num is too low
	if (num < arr[leftIdx]) {
		return -1;
	}
	// quick check if num is out of range completely
	if (num >= arr[rightIdx]) {
		return arr[rightIdx];
	}
	// Otherwise search for floor
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);

		if (arr[midIdx] > num) {
			rightIdx = midIdx - 1;
		} else if (arr[midIdx] > num) {
			leftIdx = midIdx + 1;
		} else {
			return arr[midIdx];
		}
	}
	return -1;
}
console.log(findFloor([ 1, 2, 8, 10, 10, 12, 19 ], 20));
module.exports = findFloor;
