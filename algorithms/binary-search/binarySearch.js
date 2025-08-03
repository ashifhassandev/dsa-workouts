let sortedArr = [
  3, 5, 7, 9, 11, 13, 15, 17, 22, 25, 28, 33, 37, 40, 43, 46, 50, 112, 119,
];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const result = binarySearch(sortedArr, 15);
console.log(result);