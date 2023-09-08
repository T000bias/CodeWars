def hotpo(number):
    count = 0
    if number == 1: return 0
    while True:
        count += 1
        if number % 2 == 0:
            number = number / 2
        elif number % 2 == 1:         
            number = 3 * number + 1
        print(number)
        if number == 1:
            break
    return count

