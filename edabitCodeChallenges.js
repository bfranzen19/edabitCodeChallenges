// profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two strings as arguments and return either true or false depending on whether the number of their charcters is equal or not.
function comp(str1, str2) {
	if(str1.length == str2.length) {
    return true
  } else {
    return false
  }
}

// tests
Test.assertEquals(comp("AB", "CD"), true);
Test.assertEquals(comp("ABC", "DE"), false);
Test.assertEquals(comp("hello", "edabit"), false);


/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns the amount of digits it has.
function findDigitAmount(num) {
  let numStr = num.toString().length
  return numStr
}

// tests
Test.assertEquals(findDigitAmount(1), 1, 'Should work with one digit');
Test.assertEquals(findDigitAmount(67), 2, 'Should work with a two-digit number');
Test.assertEquals(findDigitAmount(123), 3, 'Should work with a three-digit number');

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
  if(num>0 && exp>0) {
    var exp = Math.pow(num, exp)
    return exp
  } else {
    return false
  }
}

// tests
Test.assertEquals(calculateExponent(5,5), 3125);
Test.assertEquals(calculateExponent(3,3), 27);
Test.assertEquals(calculateExponent(10,10), 10000000000);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
  var hyph = '-'
	if(num>0 && num<61) {
    return hyph.repeat(num)
  } else {
    return false
  }
}

// tests
Test.assertEquals(Go(1),"-");
Test.assertEquals(Go(24),"------------------------");
Test.assertEquals(Go(60),"------------------------------------------------------------");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
function month_name(num) {
    if(num < 13 && num > 0) {
        switch(num) {
            case 1:
                return 'January'
            case 2:
                return 'February'
            case 3:
                return 'March'
            case 4:
                return 'April'
            case 5:
                return 'May'
            case 6:
                return 'June'
            case 7:
                return 'July'
            case 8:
                return 'August'
            case 9:
                return 'September'
            case 10:
                return 'October'
            case 11:
                return 'November'
            case 12:
                return 'December'
        }
  } else {
    return false
  }
}

// tests
Test.assertEquals(month_name(1), 'January');
Test.assertEquals(month_name(2)	, 'February');
Test.assertEquals(month_name(3), 'March');

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to multiply all values in an array by the amount of values in that array.
function MultiplyByLength(arr) {
  let len = arr.length

	if(arr.length > 0) {
    const newArrMap = arr.map(x => x*len)
    return newArrMap
  } else {
    return false
  }
}

// tests
Test.assertSimilar(MultiplyByLength([2,6,4,9]), [8,24,16,36]);
Test.assertSimilar(MultiplyByLength([4,1,1]), [12,3,3]);
Test.assertSimilar(MultiplyByLength([1,0,3,3,7,2,1]), [7,0,21,21,49,14,7]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array and a string as arguments and return the index of the string.
function find_index(arr, str) {
	let arrIndex = arr.indexOf(str)
  return arrIndex
}

// tests
Test.assertEquals(find_index(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3);
Test.assertEquals(find_index(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5);
Test.assertEquals(find_index(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
function repeat(item, times) {
  	let arr = []
	if(typeof item == 'string' || typeof item == 'number' && typeof times == 'number') {
    	for(i=0 ; i<times ; i++) {
          arr.push(item)
        }
	return arr
    }
}

// tests
Test.assertSimilar(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
Test.assertSimilar(repeat(13, 5), [13, 13, 13, 13, 13]);
Test.assertSimilar(repeat("7", 2),  ["7", "7"]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
  return ++num
}

// tests
Test.assertEquals(addition(2), 3);
Test.assertEquals(addition(-9), -8);
Test.assertEquals(addition(0), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
function reverse(bool) {
  if(typeof bool == 'number') {
    return "boolean expected"
  } else if(bool == true || bool == false){
    bool = !bool
    return bool
  } else {
    return "boolean expected"
  }
}

// tests
Test.assertEquals(reverse(false), true);
Test.assertEquals(reverse(true), false);
Test.assertEquals(reverse(0), "boolean expected");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
	if(typeof a == 'number' && typeof b == 'number') {
      	let sum = a + b
  		return sum
    } else {
      return "please enter numbers only"
    }
}

// tests
Test.assertEquals( addition(2,3), 5);
Test.assertEquals( addition(-3,-6), -9);
Test.assertEquals( addition(7,3), 10);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns the word count. The string will be a sentence.
function countWords(str) {
	let strArr = str.split(" ").length
	return strArr
}

// tests
Test.assertEquals(countWords("It's high noon"), 3);
Test.assertEquals(countWords("Is this easy mode"), 4);
Test.assertEquals(countWords("Is this easy mode"), 4);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if(num <= 0) {
        return true
    } else {
        return false
    }
}

// tests
Test.assertEquals(lessThanOrEqualToZero(5), false);
Test.assertEquals(lessThanOrEqualToZero(0), true);
Test.assertEquals(lessThanOrEqualToZero(-5), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
	let smallest = Math.min.apply(null, arr)
    return smallest
}

// tests
Test.assertEquals(findSmallestNum([34, 15, 88, 2]), 2)
Test.assertEquals(findSmallestNum([34, -345, -1, 100]), -345)
Test.assertEquals(findSmallestNum([-76, 1.345, 1, 0]), -76)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .
function checkEnding(str1, str2) {
  if(str1.length>0 && str2.length>0 && typeof str1 == 'string' && typeof str2 == 'string') {
    if(str1.substr(-str2.length) === str2) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// tests
Test.assertEquals(checkEnding("abc", "bc"), true);
Test.assertEquals(checkEnding("abc", "d"), false);
Test.assertEquals(checkEnding("samurai", "zi"), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
  var largest = Math.max.apply(null,arr)
  return largest
}

// tests
Test.assertEquals(findLargestNum([4, 5, 1, 3]), 5)
Test.assertEquals(findLargestNum([13, 27, 18, 26]), 27)
Test.assertEquals(findLargestNum([32, 35, 37, 39]), 39)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
	if(typeof num == 'number') {
    if(num % 2 == 0 || num == 0) {
      return "even"
    } else {
      return 'odd'
    }
  } else {
    return false
  }
}

// tests
Test.assertEquals(isEvenOrOdd(3), "odd");
Test.assertEquals(isEvenOrOdd(0), "even");
Test.assertEquals(isEvenOrOdd(7), "odd");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
  let lastItem = arr.pop()
  return lastItem
}

// tests
Test.assertEquals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck');
Test.assertEquals(getLastItem([1, 2, 3]), 3);
Test.assertEquals(getLastItem([undefined]));

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string as its argument and returns the string in reversed order.
function reverse(str) {
	if(typeof str == 'string') {
        let arr = str.split("").reverse().join("")
        return arr
  	} else {
    	return false
 	}
}

// tests
Test.assertEquals(reverse("Think different."), ".tnereffid knihT");
Test.assertEquals(reverse("It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."), ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI");
Test.assertEquals(reverse("Innovation is the ability to see change as an opportunity - not a threat"), "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI");




















/*                 template              */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//


// tests
