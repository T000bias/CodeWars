def collatz(number):
    #your code here
    lst = [str(number)]
    if number == 1: 
        return '1'
    while True:
        if number % 2 == 0:
            number = number / 2
            lst.append(str(int(number)))
        elif number % 2 == 1:         
            number = 3 * number + 1
            lst.append(str(int(number)))
        print(number)
        if number == 1:
            break
    
    return("->".join(lst))
                