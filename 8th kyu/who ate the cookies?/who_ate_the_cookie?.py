def cookie(x):
    print(x)
    print(type(x))
    if (type(x)) == 'str' or 'bool': 
        return "Who ate the last cookie? It was Zach!"
    
    if (type(x)) == 'int' or 'float': 
        return "Who ate the last cookie? It was Monica!"
    
    return "Who ate the last cookie? It was the dog!"
