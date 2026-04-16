#a
a = int(input())
b = int(input())
for i in range (a, b+1):
    if(i % 2 == 0): print(i, end=" ")
    
#b
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")
        
#c
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, end=" ")
        
#d
x = input()
d = input()

print(x.count(d))

#e
x = input()
print(sum(int(d) for d in x))

#f
x = input()
print(int(x[::-1]))

#g
x = int(input())

for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break   

#h
x = int(input())

for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

#i
x = int(input())
count = 0
for i in range(1, x + 1):
    if x % i == 0:
        count+=1
print(count)

#j
total = 0

for i in range(100):
    total += int(input())

print(total)

#k
n = int(input())

total = 0
for i in range(n):
    total += int(input())

print(total)

#l
x = input()

result = 0
for digit in x:
    result = result * 2 + int(digit)

print(result)

#m
n = int(input())

count = 0
for i in range(n):
    if int(input()) == 0:
        count += 1

print(count)