### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function that takes the base and height of a triangle and return its area.

def tri_area(base, height):
	return (base * height) / 2

### tests
Test.assert_equals(tri_area(3, 2), 3)
Test.assert_equals(tri_area(5, 4), 10)
Test.assert_equals(tri_area(10, 10), 50)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that finds the maximum range of a triangles third edge. (side1 + side2) - 1 = maximum range of third edge.

def nextEdge(side1, side2):
	return (side1 + side2) - 1

### tests
Test.assert_equals(nextEdge(5, 4), 8)
Test.assert_equals(nextEdge(8, 3), 10)
Test.assert_equals(nextEdge(7, 9), 15)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns True if a string is empty and False otherwise.

def is_empty(s):
	return len(s) == 0

### tests
Test.assert_equals(is_empty(""), True)
Test.assert_equals(is_empty(" "), False)
Test.assert_equals(is_empty("            "), False)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as an argument, increments the number by +1 and returns the result.

def addition(num):
	return num + 1

### tests
Test.assert_equals(addition(2), 3)
Test.assert_equals(addition(-9), -8)
Test.assert_equals(addition(0), 1)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two numbers as arguments and return their sum.

def addition(a, b):
	return a + b

### tests
Test.assert_equals(addition(2,3), 5)
Test.assert_equals(addition(-3,-6), -9)
Test.assert_equals(addition(7,3), 10)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write two functions:
	# to_int() : A function to convert a string to an integer.
	# to_str() : A function to convert an integer to a string.

def to_int(txt):
	return int(txt)

def to_str(num):
	return str(num)

### tests
Test.assert_equals(to_int("37"), 37)
Test.assert_equals(to_int("113"), 113)
Test.assert_equals(to_int("5"), 5)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function to concatenate two integer lists.

def concat(lst1, lst2):
	return lst1 + lst2

### tests
Test.assert_equals(concat([1, 3, 5], [2, 6, 8]), [1, 3, 5, 2, 6, 8])
Test.assert_equals(concat([7, 8], [10, 9, 1, 1, 2]), [7, 8, 10, 9, 1, 1, 2])
Test.assert_equals(concat([4, 5, 1], [3, 3, 3, 3, 3]), [4, 5, 1, 3, 3, 3, 3, 3])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns True if an integer is divisible by 5, and false otherwise.

def divisible_by_five(n):
	return n % 5 == 0

### tests
Test.assert_equals(divisible_by_five(7), False)
Test.assert_equals(divisible_by_five(5), True)
Test.assert_equals(divisible_by_five(15), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests








































#                 template
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
