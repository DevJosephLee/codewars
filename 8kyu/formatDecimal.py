# Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

# Example:
# 5.5589 is rounded 5.56
# 3.3424 is rounded 3.34
def two_decimal_places(n):
    n_stringed = str(n)

    if int(n_stringed[n_stringed.index(".") + 3]) >= 5:
        if int(n_stringed[n_stringed.index(".") + 2]) == 9:
            n_stringed = n_stringed[:n_stringed.index(".") + 1] + str(int(n_stringed[n_stringed.index(".") + 1]) + 1)
        else:
            n_stringed = n_stringed[:n_stringed.index(".") + 2] + str(int(n_stringed[n_stringed.index(".") + 2]) + 1)
    else:
        n_stringed = n_stringed[:n_stringed.index(".") + 3]

    return float(n_stringed)
