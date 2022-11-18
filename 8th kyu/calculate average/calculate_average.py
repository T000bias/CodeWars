# Solution
def find_average(numbers):
    # your code here
    sum = 0
    count = 0
    for i in numbers:
        sum += i
        count += 1
    average = sum / count
    return average