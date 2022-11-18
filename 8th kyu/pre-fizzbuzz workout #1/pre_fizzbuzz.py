# Solution

def pre_fizz(n):
    #your code here
    arr = []
    for i in range(1+n):
        arr.append(i)
    arr.pop(0)
    return arr