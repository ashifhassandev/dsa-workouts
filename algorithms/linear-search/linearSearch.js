let arr1 = [
  11, 33, 5, 7, 9, 112, 13, 15, 17, 119, 22, 25, 28, 3, 37, 40, 43, 46, 50,
];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};

const result = linearSearch(arr1, 28);
console.log(result);