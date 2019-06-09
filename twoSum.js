// https://leetcode.com/problems/two-sum/submissions/

// solution 1

function twoSum(nums, target) {
  const numsObj = {};
  nums.forEach((num, idx) => {
    numsObj[num] = idx;
  });

  for (let i = 0; i < nums.length; i += 1) {
    const curr = nums[i];
    const complement = target - curr;
    const findComplement = numsObj[complement];

    if (findComplement && findComplement !== i) {
      return [i, numsObj[complement]];
    }
  }
}

// solution 2
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const curr1 = nums[i];
    const complement = target - curr1;

    for (let j = 0; j < nums.length; j += 1) {
      const curr2 = nums[j];
      if (curr2 === complement && j !== i) {
        return [i, j];
      }
    }
  }
}
