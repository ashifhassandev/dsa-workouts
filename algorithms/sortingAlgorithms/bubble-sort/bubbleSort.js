let arr1 = [
  11, 33, 5, 7, 9, 112, 13, 15, 17, 119, 22, 25, 28, 3, 37, 40, 43, 46, 50,
];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const result = bubbleSort(arr1);
console.log(result);