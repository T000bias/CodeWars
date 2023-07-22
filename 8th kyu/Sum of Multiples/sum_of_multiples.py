def sum_mul(n, m):
    if n <= 0:
        return 'INVALID'
    
    if m <= 0:
        return 'INVALID'
    
    numbers=range(n,m,n)
    sum = 0
    for x in numbers:
        sum = x + sum
    return sum
        
    