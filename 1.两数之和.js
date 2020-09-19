function twoSum(nums,target) {
    return findTraget(0,nums,target);
}

function findTraget(first,nums,target) {
    let len = nums.length - 1;
    if(first > len - 1) return null;
    for(var i = first + 1; i <= len; i++){
        let res = nums[first] + nums[i];
        if(res === target) {
            return [first,i];
        }
    }
    return findTraget(first + 1,nums,target);
}