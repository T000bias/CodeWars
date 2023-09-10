def solution(nums):
    print(nums)
    if type(nums) == 'NoneType' or nums == None: 
        return []
    nums.sort()
    return nums
    
    