def neutralise(s1, s2):
    s1_split = []
    s2_split = []
    arr = []
    for letter in s1:
        s1_split.append(letter)
    for letter in s2:
        s2_split.append(letter)
    for symbol in range(0, len(s1)):
        if s1_split[symbol] == "+" and s2_split[symbol] == "+":
            arr.append("+")
        elif s1_split[symbol] == "-" and s2_split[symbol] == "-":
            arr.append("-")
        else:
             arr.append("0")   
    return ("").join(arr)