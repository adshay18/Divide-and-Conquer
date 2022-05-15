function countZeroes(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let zeroIdx;
	let midIdx;

	while (leftIdx <= rightIdx) {
		midIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (arr[midIdx] === 1) {
			if (arr[midIdx + 1] === 1) {
				leftIdx = midIdx++;
			}
			if (arr[midIdx + 1] === 0) {
				zeroIdx = midIdx + 1;
				if (zeroIdx) {
					return arr.length - zeroIdx;
				}
			}
		}
		if (arr[midIdx] === 0) {
			if (arr[midIdx - 1] === 0) {
				rightIdx = midIdx--;
			}
			if (!arr[midIdx - 1]) {
				return arr.length;
			}
			if (arr[midIdx - 1] === 1) {
				zeroIdx = midIdx;
				if (zeroIdx) {
					return arr.length - zeroIdx;
				}
			}
		}
		return 0;
	}
}
module.exports = countZeroes;
