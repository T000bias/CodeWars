def get_number_from_string(string):
    separated = [*string]
    sum = ""
    for value in separated:
        if value.isdigit() == True:
            sum += value
    return int(sum)
            
import re
def get_number_from_string(string):
    num = re.compile(r'\d')
    match = num.findall(string)
    return int(("".join(match)))