# Solution

def twice_as_old(dad_years_old, son_years_old):
    solution = dad_years_old - (son_years_old * 2)
    if solution < 0:
        solution *= -1
    return solution