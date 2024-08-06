# Solution #1
def summation(num):
    count = 0
    sum = 0
    increase = 1
    while count < num:
        sum = sum + increase
        increase += 1
        count += 1
        print(sum)
    return sum