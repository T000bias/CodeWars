def stringy(size):
    # Good Luck!
    string = ""
    for value in range(1, size + 1):
#         print(value)
        if value % 2 == 1:
            string += '1'
        else:
            string += '0'
    return string