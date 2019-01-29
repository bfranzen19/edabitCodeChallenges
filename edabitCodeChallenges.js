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

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	if(typeof arr == 'object' && arr.length>0) {
      	let min = Math.min(...arr)
      	let max = Math.max(...arr)
      	let newArr = [min, max]
        return newArr
    } else {
      	return "invalid input"
    }
}

// tests
Test.assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
	if(typeof num == 'number' && num > 0 && num < 1001) {
      	let sum = 0

      	for(var i=1 ; i<num+1 ; i++) {
          	sum = sum + i
        }
      	return sum
    } else {
      	return "invalid input"
    }
}

// tests
Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

function nameShuffle(str) {
	if(typeof str == 'string') {
		let flipsie = str.split(" ").reverse().join(" ")
		return flipsie
    } else {
        return "invalid input"
    }
}

// tests
Test.assertEquals(nameShuffle("Rosie O'Donnel"),"O'Donnel Rosie");
Test.assertEquals(nameShuffle("Seymour Butts"),"Butts Seymour");
Test.assertEquals(nameShuffle("Ebony Greene"),"Greene Ebony");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

function charCount(myChar, str) {
  	let returnArr = str.split('')
    let numChars = 0

	if(str.length > 0 && typeof myChar === 'string' && typeof str === 'string') {
		for(var i=0 ; i<str.length ; i++) {
        	if(str[i] == myChar) {
              	numChars ++
            }
        }
      	return numChars
    } else {
      	return false

    }
}

// tests
Test.assertEquals(charCount('a', 'edabit'), 1);
Test.assertEquals(charCount('b', 'big fat bubble'), 4);
Test.assertEquals(charCount('c', 'Chamber of secrets'), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function isFourLetters(arr) {
  	let retArr = []
	if(arr.length > 0 && typeof arr == 'object') {
		for(var i=0 ; i<arr.length ; i++) {
        	if(arr[i].length == 4) {
              	retArr.push(arr[i])
            }
        }
      	return retArr
    }
  	return []
}

// tests
Test.assertSimilar(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), ["Ryan", "Matt"])
Test.assertSimilar(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"])
Test.assertSimilar(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
  	let arr = []
    let retStr = ""
	for(var i=0 ; i<str.length ; i++) {
      arr.push(str.charAt(i).repeat(2))
      retStr = arr.join("").toString()
    }
  	return retStr
}

// tests
Test.assertEquals(doubleChar("String"), "SSttrriinngg")
Test.assertEquals(doubleChar("Hello World!"), "HHeelllloo  WWoorrlldd!!")
Test.assertEquals(doubleChar("1234!_ "), "11223344!!__  ")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

function filterArray(arr) {
  	let result = []

	for(var i=0 ; i<arr.length ; i++) {
       if(Number.isInteger(arr[i])) {
         result.push(arr[i])
       }
    }
  	return result
}

// tests
Test.assertSimilar(filterArray([1, 2, "a", "b"]), [1, 2]);
Test.assertSimilar(filterArray([1, "a", "b", 0, 15]), [1, 0, 15]);
Test.assertSimilar(filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
	return str.split("").sort().join("")
}

// tests
Test.assertEquals(AlphabetSoup("hello"), "ehllo");
Test.assertEquals(AlphabetSoup("edabit"), "abdeit");
Test.assertEquals(AlphabetSoup("hacker"), "acehkr");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given a number n, write a function that returns PI to n decimal places.

function myPi(n) {
  	if(n <= 15) {
      	let result = Number.parseFloat(Math.PI.toFixed(n))
      	return result
    } else {
      	return false
    }
}

// tests
Test.assertEquals(myPi(0), 3);
Test.assertEquals(myPi( 1), 3.1);
Test.assertEquals(myPi( 2), 3.14);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  	let day = date.getDate(date)
    let month = date.getMonth(date)

  	if(month == 11 && day == 24) {
      	return true
    }
  	return false
}

// tests
Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
  	let newArr = []
    let result = 0

    let abs = arr.map((x, i, arr) => {
      	return Math.abs(arr[i])
    })

    for(var i=0 ; i<abs.length; i++) {
    	result += abs[i]
    }
    return result
}


// tests
Test.assertEquals(getAbsSum([2, -1, -3, 4, 8]), 18);
Test.assertEquals(getAbsSum([-1]), 1);
Test.assertEquals(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
	let sum = arr.reduce(function(a,b) {
    	return a + b
    }, 0)

    let result = Number.isInteger(sum / arr.length)

    return result
}

// tests
Test.assertEquals(isAvgWhole([3, 5, 9]), false);
Test.assertEquals(isAvgWhole([1, 1, 1, 1]), true);
Test.assertEquals(isAvgWhole([1, 2, 3, 4, 5]), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.

function sortNumsAscending(arr) {
	if(arr == null || arr.length == 0) {
      	return []
    } else {
    	return arr = arr.sort((a,b) => a-b)
    }
}



/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns a new string with all vowels removed.
function silenceTrump(str) {
    var vowels = /[aeiou]/gi;
    return str.replace(vowels, "")
}

// tests
Test.assertEquals(silenceTrump("If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!"), "f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!")
Test.assertEquals(silenceTrump("This election is a total sham and a travesty. We are not a democracy!"), "Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!")
Test.assertEquals(silenceTrump("I have never seen a thin person drinking Diet Coke."), " hv nvr sn  thn prsn drnkng Dt Ck.")
Test.assertEquals(silenceTrump("Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!"), "vrybdy wnts m t tlk bt Rbrt Pttnsn nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
	let vowels = /[aeiou]/ig
    let count = 0

    if(str.match(vowels)) {
		return str.match(vowels).length
    }
}

// tests
Test.assertEquals(countVowels("Celebration"), 5)
Test.assertEquals(countVowels("Palm"), 1)
Test.assertEquals(countVowels("Prediction"), 4)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

function factorial(int) {
  	let result = int

	if(int == 0) {
    	return 1
    } else {
      	while (int > 1) {
        	int--
          	result = result * int
        }
      	return result
    }
}

// tests
Test.assertEquals(factorial(2), 2);
Test.assertEquals(factorial(6), 720);
Test.assertEquals(factorial(3), 6);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.

function sortNumsAscending(arr) {
	if(arr == null || arr.length == 0) {
      	return []
    } else {
    	return arr = arr.sort((a,b) => a-b)
    }
}

// tests
Test.assertSimilar(sortNumsAscending([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50])
Test.assertSimilar(sortNumsAscending([80, 29, 4, -95, -24, 85]), [-95, -24, 4, 29, 80, 85])
Test.assertSimilar(sortNumsAscending(null), [])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
  	let resultArr = []

    for(var i=0 ; i<arr.length ; i++) {
      	if(arr[i] % 2 == false) {
			resultArr.push(arr[i])
        }
    }
    return resultArr
}

// tests
Test.assertSimilar(noOdds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]);
Test.assertSimilar(noOdds([43, 65, 23, 89, 53, 9, 6]), [6]);
Test.assertSimilar(noOdds([718, 991, 449, 644, 380, 440]), [718, 644, 380, 440]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
  	let retArr = []

  	for(var i=0 ; i<arr.length ; i++) {
    	retArr.push(Math.max(...arr[i]))
    }
  	return retArr
}

// tests
Test.assertSimilar(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]), [7, 90, 2])
Test.assertSimilar(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]), [0.7634, 9.32, 9])
Test.assertSimilar(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]), [-34, -2, 7])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value
// Maximum Value
// Sequence Length
// Average Value

function minMaxLengthAverage(arr) {
	let sortedArr = arr.sort((a,b) => a-b)
    let resultArr = []
    let len = arr.length
    let min = arr[0]
    let max = arr[len-1]
    let av = arr.reduce((acc,cV) => acc+cV,0) / len

    resultArr.push(min,max,len,av)
    return resultArr
}

// tests
Test.assertSimilar(minMaxLengthAverage([6, 9, 15, -2, 92, 11]), [-2, 92, 6, 21.833333333333332]);
Test.assertSimilar(minMaxLengthAverage([30, 43, 20, 92, 3, 74]), [3, 92, 6, 43.666666666666664]);
Test.assertSimilar(minMaxLengthAverage([4.54, 8.32, 5.20]), [4.54, 8.32, 3, 6.02]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and returns the mean value.

function mean(arr) {
	const mean = arr.reduce((a,b) => a+b,0)/arr.length
	return parseFloat(mean.toFixed(2))
}

// tests
Test.assertEquals((mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])), 2.55);
Test.assertEquals((mean([324, 543, 654, 9876])), 2849.25);
Test.assertEquals((mean([0, 0, 0, 0])), 0.00);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
	const result = [...new Set(arr)]
    return result
}

// tests
Test.assertSimilar(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor'])
Test.assertSimilar(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
Test.assertSimilar(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNums(arr) {
	arr = arr.sort((a,b)=>a-b)

  	for(var i=0 ; i<arr.length ; i++) {
		if(arr[i+1] - arr[i] !== 1) {
        	return arr[i] + 1
        } else if(arr[0] !== 1) {
		  	return 1
		}
    }
}

// tests
Test.assertEquals(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
Test.assertEquals(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
Test.assertEquals(missingNums([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

//  Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

function highLow(str) {
	let arr = str.split(" ")
    let max = Math.max.apply(null, arr)
    let min = Math.min.apply(null, arr)
    let ret = []
    ret.push(max)
    ret.push(min)
    return ret.join(' ')
}

// tests
Test.assertEquals(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
Test.assertEquals(highLow("1 -1"), "1 -1")
Test.assertEquals(highLow("1 1"), "1 1")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

function sortDecending(num) {
  	let res = Number(num.toString().split('').sort((a,b)=>b-a).join(''))
  	return res
}

// tests
Test.assertEquals(sortDecending(123), 321)
Test.assertEquals(sortDecending(670276097), 977766200)
Test.assertEquals(sortDecending(2619805), 9865210)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function XO(str) {
	let result = str.toLowerCase()
    let x = /[x]/
    let o = /[o]/
    let xArr = []
    let oArr = []

    for(var i=0 ; i<result.length ; i++) {
    	if(result[i].match(x)) {
        	xArr.push(result[i])
        } else if(result[i].match(o)) {
        	oArr.push(result[i])
        }
    }
  	if(xArr.length == oArr.length) {
      	return true
    } else {
      	return false
    }
}

// tests
Test.assertEquals(XO("ooxx"), true);
Test.assertEquals(XO("xooxx"), false);
Test.assertEquals(XO("ooxXm"), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
  	let ret = [num].toString()
    let arr = ret.split('').reverse().join('')

    if(ret.length == 1) {
      	return true
    } else {
      	if(ret == arr) {
          	console.log('ret - ' + ret + ' ;  arr - ' + arr)
          	return true
        } else {
		 	return false
		}
    }
}

// tests
Test.assertEquals(isSymmetrical(23), false);
Test.assertEquals(isSymmetrical(9562), false);
Test.assertEquals(isSymmetrical(10019), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.

function formatNum(num) {
	return num.toLocaleString().toString()
}

// tests
Test.assertEquals(formatNum(1000), "1,000");
Test.assertEquals(formatNum(1000000), "1,000,000");
Test.assertEquals(formatNum(20), "20");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(str) {
  	let result = str.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5)
    return result
}

// tests
Test.assertEquals(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l");
Test.assertEquals(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r");
Test.assertEquals(hackerSpeak("hi there"), "h1 th3r3");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes three input values (a, b, c) and returns the number of equal values. Your function must return 0, 2 or 3.

function equal(a, b, c) {
	if(a == b && a == c && b == c) {
      	return 3
    } else if(a == b || a == c || b == c) {
      	return 2
    } else {
      	return 0
    }
}

// tests
Test.assertEquals(equal(2,3,4), 0, "All values are differents");
Test.assertEquals(equal(7,3,7), 2, "Two values are equal");
Test.assertEquals(equal(4,4,4), 3, "All 3 values are equal");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that alternates the case of the characters in a string. The first character should always be UPPERCASE.

function alternatingCaps(str) {
	let arr = []

	for(var i=0 ; i<str.length ; i++) {
    	if(i % 2 !== 0) {
        	arr.push(str[i].toLowerCase())
        } else {
        	arr.push(str[i].toUpperCase())
        }
    }
  	str = arr.join('')
	return str
}

// tests
Test.assertEquals(
  alternatingCaps('alternating caps'),
  'AlTeRnAtInG CaPs'
);
Test.assertEquals(
  alternatingCaps("Hello, what's your name?"),
  "HeLlO, wHaT'S YoUr nAmE?"
);
Test.assertEquals(
  alternatingCaps('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
  'LoReM IpSuM DoLoR SiT AmEt, CoNsEcTeTuR AdIpIsIcInG ElIt.'
);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of names and returns an array with the first letter capitalized. Don't change the order of the original array. Notice in the second example above, "MABELLE" is returned as "Mabelle".

function capMe(arr) {
  	let retArr = []

  	let str = arr.join(', ')
  	str = str.toLowerCase()
  	arr = str.split(', ')

    for(var i=0 ; i<arr.length ; i++) {
    	let firstLetter = arr[i].slice(0,1)
  		firstLetter = firstLetter.toUpperCase()

      let restOfWord = arr[i].slice(1)
    	let fullWord = []

    	fullWord.push(firstLetter)
        fullWord.push(restOfWord)

	  	res = fullWord.join('')
      	retArr.push(res)
    }
  	return retArr
}

// tests
Test.assertSimilar(capMe(['mavis', 'senaida', 'letty']), ['Mavis', 'Senaida', 'Letty'])
Test.assertSimilar(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']), ['Samuel', 'Mabelle', 'Letitia', 'Meridith'])
Test.assertSimilar(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']), ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string, removes all "special" characters (e.g. ! @ # $ % ^ & \ *) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

function removeSpecialCharacters(str) {
  let reg = /[^A-Za-z0-9_ -]/gi
  let ret = str.replace(reg, '')
	return ret
}

// tests
Test.assertEquals(removeSpecialCharacters("The quick brown fox!"), "The quick brown fox")
Test.assertEquals(removeSpecialCharacters("%fd76$fd(-)6GvKlO."), "fd76fd-6GvKlO")
Test.assertEquals(removeSpecialCharacters("D0n$c sed 0di0 du1"), "D0nc sed 0di0 du1")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.". You'll always get exactly four strings as arguments. Tests are case sensitive.

function verifySubstrs(mainStr, head, body, tail) {
  	if(mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)) {
      	return "My head, body, and tail."
    } else {
      	return "Incomplete."
    }
}

// tests
Test.assertEquals(verifySubstrs("Onomatopeia", "on", "mato", "ia"), "Incomplete.");
Test.assertEquals(verifySubstrs("Baby", "B", "ab", "y"), "My head, body, and tail.");
Test.assertEquals(verifySubstrs("Centipede", "Cent", "tip", "pede"), "My head, body, and tail.");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//



// tests



























/*                 template              */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//



// tests
