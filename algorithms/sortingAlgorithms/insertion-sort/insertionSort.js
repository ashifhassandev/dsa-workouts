let array = [
  33, 3, 112, 5, 50, 25, 9, 43, 7, 13, 22, 15, 40, 11, 28, 17, 37, 119, 46,
];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
};

const result = insertionSort(array);
console.log(result);