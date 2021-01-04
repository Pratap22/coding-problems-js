campNumbers = {}
campNumbers[(1, 3, 5)] = 2
campNumbers[(3, 2, 1)] = 6
campNumbers[(1, 3)] = 10

# True False None
sum = 0
for k in campNumbers:
    sum += campNumbers.get(k)

print(len(campNumbers) + sum)
