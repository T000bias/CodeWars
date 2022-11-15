# Solution
def find_difference(a, b):
    # Your code here!
    sum = 1
    sum2 = 1
    for i in a:
        sum = sum * i
    for j in b:
        sum2 = sum2 * j
    total = sum - sum2
    if total < 0:
        total *= -1
    return total