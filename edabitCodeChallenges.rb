### profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

def less_than_or_equal_to_zero(num)
	if num <= 0
		return true
	else
	  	return false
    end
end

### tests
Test.assert_equals(less_than_or_equal_to_zero(5), false)
Test.assert_equals(less_than_or_equal_to_zero(0), true)
Test.assert_equals(less_than_or_equal_to_zero(-5), true)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of numbers. Return the largest number in the array.

def find_largest_num(nums)
	return nums.max
end

### tests
Test.assert_equals(find_largest_num([4, 5, 1, 3]), 5)
Test.assert_equals(find_largest_num([13, 27, 18, 26]), 27)
Test.assert_equals(find_largest_num([32, 35, 37, 39]), 39)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two numbers as arguments and return their sum.

def addition(a, b)
  	return a+b
end


### tests
Test.assert_equals(addition(2,3), 5)
Test.assert_equals(addition(-3,-6), -9)
Test.assert_equals(addition(7,3), 10)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that accepts an array and returns the last item in the array. The array can be either homogeneous or heterogeneous.

def get_last_item(arr)
	return arr.last
end

### tests
Test.assert_equals(get_last_item(['Cat', 'Dog', 'Duck']), 'Duck')
Test.assert_equals(get_last_item([1, 2, 3]), 3)
Test.assert_equals(get_last_item([true, false, false, true]), true)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of numbers and returns the smallest number in the array.

def find_smallest_num(arr)
	return arr.min
end

### tests
Test.assert_equals(find_smallest_num([34, 15, 88, 2]), 2)
Test.assert_equals(find_smallest_num([34, -345, -1, 100]), -345)
Test.assert_equals(find_smallest_num([-76, 1.345, 1, 0]), -76)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
=begin Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
Sort numbers array in ascending order.
If function's argument is an empty array, return an empty array.
Return a new array of sorted numbers. =end

def sort_nums_ascending(arr)
	return arr.sort
end

### tests
Test.assert_equals(sort_nums_ascending([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50])
Test.assert_equals(sort_nums_ascending([80, 29, 4, -95, -24, 85]), [-95, -24, 4, 29, 80, 85])
Test.assert_equals(sort_nums_ascending([]), [])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
# Create a function that takes a base number and an exponent number and returns the calculation.

def calculate_exponent(num, exp)
	return num**exp
end

# tests
Test.assert_equals(calculate_exponent(5,5), 3125)
Test.assert_equals(calculate_exponent(3,3), 27)
Test.assert_equals(calculate_exponent(10,10), 10000000000)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests


















#                 template
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
