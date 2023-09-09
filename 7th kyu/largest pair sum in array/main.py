def largest_pair_sum(numbers): 
    # your code here
    lst = []
    zero = max(numbers)
    lst.append(zero)
    numbers.remove(zero)
    return lst[0] + max(numbers)
    