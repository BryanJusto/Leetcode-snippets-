/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let dict = {};
    let num = [];
    let x = 0;
    for(let i =0; i < nums.length; i++){
        if(dict[nums[i]]){
            dict[nums[i]] = dict[nums[i]] + 1;
        }
        else{
            dict[nums[i]] = 1;
        }
        if(dict[nums[i]] > 1){
            return nums[i];
        }
    }
};