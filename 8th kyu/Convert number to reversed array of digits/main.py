# Solution
def digitize(n):
    to_string = list(str(n))
    num = []
    to_string.reverse()
    for value in to_string:
        print(value)
        num.append(int(value))
    return num