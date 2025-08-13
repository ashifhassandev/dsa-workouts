const arr1 = [
  33, 3, 112, 5, 50, 25, 9, 43, 7, 13, 22, 15, 40, 11, 28, 17, 45, 37, 119, 46,
];

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

const result = mergeSort(arr1);
console.log(result);