def print_array(arr):
    #your code here
    string = ""
    for value in arr:
        string += str(value) + ","
    return string.strip(",")