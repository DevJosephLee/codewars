# Find the number with the most digits.

# If two numbers in the argument array have the same number of digits, return the first one in the array.

def find_longest(arr):
    return [number for number in arr if len(str(number)) == max([len(str(num)) for num in arr])][0]
