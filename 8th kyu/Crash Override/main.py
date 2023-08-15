def alias_gen(f_name, l_name):
    # Take the first charecter of each parameter
    # and pull out from the dictionary the 
    # corresponding key value pair
    
    if f_name[:1].isdigit() or l_name[:1].isdigit():
        return "Your name must start with a letter from A - Z."
    
    if f_name[:1].upper() in FIRST_NAME and l_name[:1].upper() in SURNAME:
        return (f"{FIRST_NAME[f_name[:1].upper()]} {SURNAME[l_name[:1].upper()]}")
