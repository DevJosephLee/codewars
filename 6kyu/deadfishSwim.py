# Write a simple parser that will parse and run Deadfish.

# Deadfish has 4 commands, each 1 character long:

# i increments the value (initially 0)
# d decrements the value
# s squares the value
# o outputs the value into the return array
# Invalid characters should be ignored.

# parse("iiisdoso")  ==>  [8, 64]
def parse(data):
    value = 0
    result = []
    for cmd in data:
        if cmd == 'i':
            value += 1
        elif cmd == 'd':
            value -= 1
        elif cmd == 's':
            value = value**2
        elif cmd == 'o':
            result.append(value)
    return result
