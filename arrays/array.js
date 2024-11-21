// 1. Find maximum consecutive ones:

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
}

const binaryArray = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(binaryArray));