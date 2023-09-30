# 1. Write a function to create two lists, one for the alphabet variable
# below and one for the index of the alphabet variable
# 2. Join the two lists together and return a list of tuples
# L = 'abcdefghijklmnopqrstuvwxyz'
# Example Output = [(1, 'a), (2, 'b), (3, 'c),......]

L = 'abcdefghijklmnopqrstuvwxyz'
result = []

for letters in L:
    tuples = (L.index(letters) + 1, letters)
    result.append(tuples)

return(result)
