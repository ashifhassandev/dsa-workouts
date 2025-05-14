let array = [
  33, 3, 112, 5, 50, 25, 9, 43, 7, 13, 22, 15, 40, 11, 28, 17, 37, 119, 46,
];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};

const result = selectionSort(array);
console.log(result);