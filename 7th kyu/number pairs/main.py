def get_larger_numbers(a, b):
    new_array = []
    for element in range(0,len(a)):
        if a[element] > b[element]:
            new_array.append(a[element])
        else:
            new_array.append(b[element])
    return new_array
