function findRotationCount(arr) {
	let lefIdx = 0;
	let rightIdx = arr.length - 1;
	while (lefIdx <= rightIdx) {
		let midIdx = Math.floor((lefIdx + rightIdx) / 2);
		if (arr[midIdx] > arr[midIdx + 1]) {
			return midIdx + 1;
		}
		arr[lefIdx] <= arr[midIdx] ? (lefIdx = midIdx + 1) : (rightIdx = midIdx - 1);
	}
	return 0;
}
module.exports = findRotationCount;
