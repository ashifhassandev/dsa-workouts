// Find maximum consecutive ones:

const findMaxConsecutiveOnes = (nums) => {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

const binaryArray = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(binaryArray));


// Delete duplicate odd elements in an array without using any inbuilt methods:

const arr = [3, 5, 7, 3, 9, 2, 5, 8, 11, 13, 8, 11, 6, 14, 14];

const deleteOddDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      let j = i + 1;

      while (j < arr.length) {
        if (arr[i] === arr[j]) {
          for (let k = j; k < arr.length - 1; k++) {
            arr[k] = arr[k + 1];
          }

          arr.length--;
        } else {
          j++;
        }
      }
    }
  }

  return arr;
};

const result = deleteOddDuplicates(arr);
console.log(result);