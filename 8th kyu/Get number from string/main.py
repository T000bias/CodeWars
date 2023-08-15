def get_number_from_string(string):
    separated = [*string]
    sum = ""
    for value in separated:
        if value.isdigit() == True:
            sum += value
    return int(sum)
            
    