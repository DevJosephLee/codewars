# Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)

# You can find some examples in the test fixtures.

def make_readable(seconds):
    hours = "".join("0" + str(int(seconds / 3600)) if len(str(int(seconds / 3600))) == 1 else str(int(seconds / 3600)))
    minutes = "".join("0" + str(int((seconds % 3600) / 60)) if len(str(int((seconds % 3600) / 60))) == 1 else str(int((seconds % 3600) / 60)))
    seconds = "".join("0" + str((seconds % 3600) % 60) if len(str((seconds % 3600) % 60)) == 1 else str((seconds % 3600) % 60))

    return hours + ":" + minutes + ":" + seconds
