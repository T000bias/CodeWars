# Solution 1
def better_than_average(class_points, your_points):
    denominator = 0
    for point in class_points:
        denominator = denominator + 1
        
    average = (sum(class_points) / denominator)
    
    if average > your_points:
        return False
    else:
        return True