function findRotatedIndex(arr, num) {
	let split = findStart(arr);
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	if (arr[leftIdx] <= num && num <= arr[split - 1]) {
		rightIdx = split - 1;
		while (leftIdx <= rightIdx) {
			let midIdx = Math.floor((leftIdx + rightIdx) / 2);
			if (arr[midIdx] < num) {
				leftIdx = midIdx + 1;
			} else if (arr[midIdx] > num) {
				rightIdx = midIdx - 1;
			} else {
				return midIdx;
			}
		}
		return -1;
	} else if (arr[split] <= num && num <= arr[rightIdx]) {
		leftIdx = split;
		while (leftIdx <= rightIdx) {
			let midIdx = Math.floor((leftIdx + rightIdx) / 2);
			if (arr[midIdx] < num) {
				leftIdx = midIdx + 1;
			} else if (arr[midIdx] > num) {
				rightIdx = midIdx - 1;
			} else {
				return midIdx;
			}
		}
		return -1;
	}
	return -1;
}

const findStart = (arr) => {
	let lefIdx = 0;
	let rightIdx = arr.length - 1;
	while (lefIdx <= rightIdx) {
		let midIdx = Math.floor((lefIdx + rightIdx) / 2);
		if (arr[midIdx] > arr[midIdx + 1]) {
			return midIdx + 1;
		}
		arr[lefIdx] <= arr[midIdx] ? (lefIdx = midIdx + 1) : (rightIdx = midIdx - 1);
	}
};

module.exports = findRotatedIndex;
