# Solution # 1
def invert(lst):
    if len(lst) == 0:
        return lst
    new_lst = []
    for elem in range(len(lst)):
        new_lst.append(-(lst[elem]))
    return new_lst

