# Solution #1
def positive_sum(arr):
    print(arr)
    sum = 0
    for elem in arr:
        if elem > 0:
            sum = sum + elem
    return sum
        
