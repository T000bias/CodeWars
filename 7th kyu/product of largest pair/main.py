def max_product(a):
    lst = []
    max1 = max(a)
    a.remove(max1)
    lst.append(max1)
    max1 = max(a)
    lst.append(max1)
    return lst[0] * lst[1]