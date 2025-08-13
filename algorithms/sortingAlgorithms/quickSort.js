const arr1 = [
  33, 3, 112, 5, 50, 25, 9, 43, 7, 13, 22, 15, 40, 11, 28, 17, 45, 37, 119, 46,
];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const result = quickSort(arr1);
console.log(result);