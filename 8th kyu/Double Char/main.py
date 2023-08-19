def double_char(s):
    emptyString = []
    print(s)
    sep = list(s)
    print(sep)
    for i in sep:
        emptyString.append(i*2)
    return ''.join(emptyString)
        