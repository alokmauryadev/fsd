var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (hash.hasOwnProperty(compliment)) {
            return [hash[compliment], i];
        }
        hash[nums[i]] = i;
    }
};

let nums = [2,7,11,15];
console.log(twoSum(nums,9))