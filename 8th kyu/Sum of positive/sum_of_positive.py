# Solution

def positive_sum(arr):
    # Your code here
    sum = 0
    for i in arr:
        if i > 0:
            sum = sum + i
    return sum