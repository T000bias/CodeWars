def dna_to_rna(dna):
    string = list(dna)
    string2 = ""
    for value in string:
        if value.lower() == 't':
            value = 'U'
        elif value.lower() == 'u':
            value = 'T'
        string2 += value
    return string2