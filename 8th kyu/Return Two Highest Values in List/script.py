def two_highest(arg1):
    if len(arg1) == 0:
        return []
    temp = []
    
    for x in arg1:
        if x not in temp:
            temp.append(x)
            
    temp.sort()
    if len(temp) == 1:
        return [temp[0]]
    else:
        return [temp[-1],temp[-2]]