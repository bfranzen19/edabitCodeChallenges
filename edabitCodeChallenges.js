// profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk

/*                 template              */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//



// tests



/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */





/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//



// tests


/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

function isTrue(relation) {
	return eval(relation.replace('=', '==='))
}

// tests
Test.assertEquals(isTrue("8<7"), false)
Test.assertEquals(isTrue("15>4"), true)
Test.assertEquals(isTrue("6>6"), false)


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
/* Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes these tests, it's considered a valid email address. */

function validateEmail(str) {
	let basics = /\S+@\S+\.\S+/.test(str)
	return basics
}

// tests
Test.assertEquals(validateEmail('@edabit.com'), false)
Test.assertEquals(validateEmail('@edabit'), false)
Test.assertEquals(validateEmail('matt@edabit.com'), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the number of argument it was called with.

function numArgs() {
	 return arguments.length
}

// tests
Test.assertEquals(numArgs(), 0);
Test.assertEquals(numArgs('foo'), 1);
Test.assertEquals(numArgs('foo', 'bar'), 2);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

function countOnes(i) {
	let arr = (i >>> 0).toString(2).split('')
    let final = arr.filter(x => x == 1).length

    return final
}

// tests
Test.assertEquals(countOnes(12), 2)
Test.assertEquals(countOnes(0), 0)
Test.assertEquals(countOnes(100), 3)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of students and returns an array of student names

function getStudentNames(students) {

}

// tests
const areEqual = (actual, expected) => expected.every(
  (item, index) => item === actual[index]
)
const sets = [
  ['Jacek', 'Ewa', 'Zygmunt'],
  ['Tomek'],
  []
].map(
  set => ({
    actual: getStudentNames(
      set.map(name => ({ name }))
    ),
    expected: set
  })
).forEach(
  ({ actual, expected }) => {
    Test.expectNoError('Result should be an array', () => {
      Test.assertEquals(areEqual(actual, expected), true, '' + actual)
    })
  }
)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of students and returns an array of student names

function getStudentNames(students) {
  let ret = []
  for(var i=0 ; i<students.length ; i++) {
    ret.push(students[i].name)
  }
  return ret
}

// tests
getStudentNames([{ name: 'Steve',}, { name: 'Mike'}, { name: 'John'}])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
	let newArr = []
	newArr.push(arr.shift())
	newArr.push(arr.pop())
	return newArr
}

// tests
Test.assertSimilar(firstLast([5, 10, 15, 20, 25]), [5, 25]);
Test.assertSimilar(firstLast(["edabit", 13, null, false, true]), ["edabit", true]);
Test.assertSimilar(firstLast([undefined, 4, "6", "hello", null]), [undefined, null]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and return the first and last elements as a new array.

Examples

function firstLast(arr) {
	let retArr = []
	retArr.push(arr[0])
  	retArr.push(arr.pop())
  	return retArr
}

// tests
Test.assertSimilar(firstLast([5, 10, 15, 20, 25]), [5, 25]);
Test.assertSimilar(firstLast(["edabit", 13, null, false, true]), ["edabit", true]);
Test.assertSimilar(firstLast([undefined, 4, "6", "hello", null]), [undefined, null]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of students and returns an array of student names.

function getStudentNames(students) {
  	let arr = [];
	const ret = students.map(x => {
    	arr.push(x.name);
    });
	return arr;
}

// tests
const areEqual = (actual, expected) => expected.every(
  (item, index) => item === actual[index]
)
const sets = [
  ['Jacek', 'Ewa', 'Zygmunt'],
  ['Tomek'],
  []
].map(
  set => ({
    actual: getStudentNames(
      set.map(name => ({ name }))
    ),
    expected: set
  })
).forEach(
  ({ actual, expected }) => {
    Test.expectNoError('Result should be an array', () => {
      Test.assertEquals(areEqual(actual, expected), true, '' + actual)
    })
  }
)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(str) {
	arr = str.split('');
  	let result = [];

  	for(let i=0 ; i<arr.length-4 ; i++) {
	  result.push('#');
	}

  	for(let i=arr.length-4 ; i<arr.length ; i++) {
	  result.push(arr[i]);
	}
  	return result.join('');
}

// tests
Test.assertEquals(percentDiff(60, 100), 50.0);
Test.assertEquals(percentDiff(100, 60), 50.0);
Test.assertEquals(percentDiff(5439, 4538), 18.1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given an array of numbers, write a function that returns an array that:
// 1. Has all duplicate elements removed.
// 2. Is sorted from least to greatest value.

function uniqueSort(arr) {
	arr.sort((a,b)=>a-b);
  	let ret = new Set();

  	arr.forEach(x => {
		ret.add(x);
	});

  	let result = Array.from(ret);

  	return result;
}

// tests
Test.assertSimilar(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]),[1, 2, 3, 4, 5, 8, 10]);
Test.assertSimilar(uniqueSort([1, 2, 5, 4, 7, 7, 7]),[1, 2, 4, 5, 7]);
Test.assertSimilar(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]),[0, 1, 2, 3, 4, 5, 6, 7]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// There is a single operator in Javascript capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.

function remainder(x, y){
	return x % y;
}

// tests
Test.assertEquals(remainder(7,2), 1);
Test.assertEquals(remainder(3, 4), 3);
Test.assertEquals(remainder(-9, 45), -9);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes three arguments (txt, txt_length, txt_suffix) and returns a truncated string.
	// txt: Original string.
	// txt_length: Truncated length limit.
	// txt_suffix: Optional suffix string parameter.
// Truncated returned string length should adjust to passed length in parameters regardless of length of the suffix.

function truncate(txt, txt_length, txt_suffix = null){
	let ret = txt.substring(-1, txt_length);

  	if(txt_suffix != null) {
	  let spl = ret.split('');
	  for(let i=txt_length-txt_suffix.length ; i>txt_suffix.length ; i--) {
		spl.pop(spl[i]);
	  }
	  	spl.push(txt_suffix)
		ret = spl.join('');
	}
  	return ret;
}

// tests
Test.assertEquals(truncate("CatDogDuck", 9, "Rat"), "CatDogRat")
Test.assertEquals(truncate("DogCat", 3), "Dog")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// x = 1 and y = 2. without the use of a temporary variable, make x = 2 and y =1.

function run() {
  let x = 1;
  let y = 2;

  console.log('x1: ', x);
  console.log('y1: ', y);

  x = x - x + y;
  y = y/x;

  console.log('x2: ', x);
  console.log('y2: ', y);
}

run();

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function which is given a number and returns the value squared.

function square(value) {
	return value * value;
}

// tests
Test.assertEquals(square(0), 0);
Test.assertEquals(square(1), 1);
Test.assertEquals(square(-1), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number argument and returns true if the number is negative, false otherwise.

function isNegative(value) {
  	return (value >= 0) ? false : true;
}

// tests
Test.assertEquals(isNegative(0), false);
Test.assertEquals(isNegative(-1), true);
Test.assertEquals(isNegative(1), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	return lastName.concat(', ' + firstName);
}

// tests
Test.assertEquals(concatName("John", "Doe"), "Doe, John");
Test.assertEquals(concatName("First", "Last"), "Last, First");
Test.assertEquals(concatName("A", "B"), "B, A");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890

function isValidPhoneNumber(str) {
  	let reg = /^\(?([0-9]{3})\)[ ]([0-9]{3})[-]([0-9]{4})$/;
	return reg.test(str);
}

// tests
Test.assertEquals(isValidPhoneNumber("(123) 456-7890"), true);
Test.assertEquals(isValidPhoneNumber("(1111)555 2345"), false);
Test.assertEquals(isValidPhoneNumber("(098) 123 4567"), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two numbers as arguments and return the percent difference between them.

function percentDiff(num1, num2) {
	let diffOfVal = Math.abs(num1 - num2);
  	let aveOfVal = (num1 + num2) / 2;
  	let ret = (diffOfVal / aveOfVal) * 100;

  	if(ret.toFixed(1) % 1 !== 0) return Number(ret.toFixed(1));
  	else return Math.round(ret);
}

// tests
Test.assertEquals(percentDiff(60, 100), 50.0);
Test.assertEquals(percentDiff(100, 60), 50.0);
Test.assertEquals(percentDiff(5439, 4538), 18.1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Write a function that takes two strings and returns (true or false) whether they're anagrams or not.

function isAnagram(s1, s2) {
	let lc1 = s1.toLowerCase().split('').sort().join('');
  	let lc2 = s2.toLowerCase().split('').sort().join('');

  	return (lc1 === lc2);
}

// tests
Test.assertEquals(isAnagram('cristian', 'Cristina'), true);
Test.assertEquals(isAnagram('Dave Barry', 'Ray Adverb'), true);
Test.assertEquals(isAnagram('Nope', 'Note'), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in s.

function isPlural(word) {
	return word.endsWith('s');
}

// tests
Test.assertEquals(isPlural("dudes"), true);
Test.assertEquals(isPlural("flowers"), true);
Test.assertEquals(isPlural("checks"), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// You are given 2 out of 3 of the angles in a triangle, in degrees.
//
// Write a function that determines the classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//
// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).

function missingAngle(angle1, angle2) {
  	let missing = Math.abs(180-(angle1 + angle2));

	if(missing === 90) return 'right';
  	else if(missing < 90) return 'acute';
  	else return 'obtuse';
}

// tests
Test.assertEquals(missingAngle(27, 59), "obtuse");
Test.assertEquals(missingAngle(135, 11), "acute");
Test.assertEquals(missingAngle(45, 45), "right");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Agatha and Bertha are sisters eating chocolate given to them by their parents. Bertha has always suspected her parents of considering Agatha as the favorite child. To settle this dispute once and for all, she decides to analyze all pieces of chocolate split between them, and determine that if they both have an equal amount of chocolate, then no favoritism exists.

// Create a function that returns true if the total amount of chocolate is identical for each sister. All chocolate are given in rectangular pieces that are represented by a pair of coordinates for length and width. Sum up the total area of chocolate for each sister, and return true if the total area of chocolate is the same.

function testFairness(agatha, bertha) {
  	let ag = [];
  	let b = [];

  	for(let i=0 ; i<agatha.length ; i++) {
		ag.push(agatha[i][0] * agatha[i][1]);
	}

  	for(let i=0 ; i<bertha.length ; i++) {
	  	b.push(bertha[i][0] * bertha[i][1]);
	}

  	let agSum = ag.reduce((a,b) => a+b, 0);
  	let bSum = b.reduce((a,b) => a+b, 0);

  	if(agSum == bSum) return true;
  	else return false;
}

// tests
Test.assertEquals(testFairness([[1,5], [6,3], [1,1]], [[7,1], [2,2], [1,1]]), false);
Test.assertEquals(testFairness([[2,2], [2,2], [2,2], [2,2]], [[4,4]]), true);
Test.assertEquals(testFairness([[1,2], [2,1]], [[2,2]]), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
	if(num % 100 === 0) return true;
  	else return false;
}

// tests
Test.assertEquals(divisible(1), false);
Test.assertEquals(divisible(100), true);
Test.assertEquals(divisible(1000), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// A chessboard has rows numbered 1-8 and columns numbered A-H. In chess, rooks are pieces that can any number of squares horizontally or vertically.

// Given the location of your rook and your opponent's rook, determine whether or not you can capture your opponent's rook with your own. For this exercise, assume there are no other pieces that are blocking. Your position and your opponent's position are represented as the first and second element of the input array, respectively.
//
// For instance, in this example: canCapture(["A8", "E8"]) ➞ true your rook (at A8) can take your opponents rook (at E8) by moving horizontally.

function canCapture([yourRook, opponentsRook]) {
	if(yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]) return true;
	else return false;
}

// tests
Test.assertEquals(canCapture(['A8', 'E8']), true);
Test.assertEquals(canCapture(['A1', 'B2']), false);
Test.assertEquals(canCapture(['H4', 'H3']), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes in array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles. A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// So for example, hurdleJump([1, 2, 4, 3, 2, 3], 4) should return true, since 4 is greater than or equal to each element in the array. On the other hand, hurdleJump([1,2,2,1], 1) should return false, since the hurdler cannot clear the second hurdle.
//
// Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

function hurdleJump(hurdles, jumpHeight) {
	let sorted = hurdles.sort((a,b) => a-b);
  	if(sorted.length === 0 || sorted[sorted.length - 1] <= jumpHeight) return true;
  	else return false;
}

// tests
Test.assertEquals(hurdleJump([1, 2, 3, 4, 5], 5), true);
Test.assertEquals(hurdleJump([5, 5, 3, 4, 5], 3), false);
Test.assertEquals(hurdleJump([], 4), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// coding challenge for iFit through hackerrank

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Need to deliver a package of cookie bags. you will be given an inventory of small bags (1 kilo each) and big bags (5 kilos each), along with the goal amount of kilos that need to be shipped to the customer. return the amount of small bags the package will contain, assuming we always use big bags first. return -1 if this cannot be done.

function createPackage(small, big, goal) {
  let newGoal = goal;
  let newBig = big;

  while (newGoal >= 5 && newBig > 0) {
    newGoal = newGoal - 5;
    newBig--;
  }
  if (newGoal > small) {
    return -1;
  }
  return newGoal;
}

// tests
createPackage(10, 5, 12);  // 12 - 10 (2big) = 2 small
createPackage(10, 5, 15);  // 15 - 15 (3big) = 0 small
createPackage(1, 5, 12); // 12 - 10 (2big) = 2 small. return -1.
createPackage(100, 5, 120); // 120 - 25 (5big) = 95 small
createPackage(100, 5, 0); // return 0
createPackage(3, 5, 10); // 10 - 10 (2big) = 0 small
createPackage(4, 1, 9);  // 9 - 5 (1big) = 4 small
createPackage(0, 1, 24);  // 24 - 5 (1big) = 19. return -1.



/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// return 1 if the array contains 3 increasing consecutive numbers ([...,4,5,6,...] or [...,23,24,25,...]). otherwise, return 0.

function consecThree(a) {
    for(let i=0 ; i<a.length ; i++) {
    	if(a[i]+1 === a[i+1] && a[i+1] + 1 === a[i+2]) return true;
      	else return false;
    }
}

// tests
consecThree([3,1,2,3]);
consecThree([13,4,1,2,3]);
consecThree([1,2,4,5]);
consecThree([3,2,1,3]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Create a function that takes in 3 parameters (probability of winning, prize value, and cost of playing) and returns whether or not the gamble is profitable.

A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

For instance, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 0.2 * 50 - 9 = 1 and 1 > 0. */

function profitableGamble(prob, prize, pay) {
	let net = prob * prize - pay;
  	if(net > 0) return true;
  	else return false;
}

// tests
Test.assertEquals(profitableGamble(0.2, 50, 9), true);
Test.assertEquals(profitableGamble(0.9, 1, 2), false);
Test.assertEquals(profitableGamble(0.9, 3, 2), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
    Total number of slices.
    Number of recipients.
    How many slices each person gets. */

function equalSlices(total, people, each) {
	return people * each <= total;
}

// tests
Test.assertEquals(equalSlices(8, 3, 2), true);
Test.assertEquals(equalSlices(8, 3, 3), false);
Test.assertEquals(equalSlices(24, 12, 2), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
	let arr = []

  	for(var i=1 ; i<=num ; i++) {
		arr.push(i);
	}

  	let retArr = arr.filter(x => x % 2 === 0);
  	return retArr;
}

// tests
Test.assertSimilar(findEvenNums(4), [2, 4]);
Test.assertSimilar(findEvenNums(8), [2, 4 ,6, 8]);
Test.assertSimilar(findEvenNums(2), [2]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code.

function isValid(zip) {
	let zipArr = zip.split('')

	if(zipArr.length !== 5) return false;
	const ret = zipArr.filter(x => x / 1 >= 0 && x !== ' ');

  	return ret.length === 5;
}

// tests
Test.assertEquals(isValid("59001"), true);
Test.assertEquals(isValid("853a7"), false);
Test.assertEquals(isValid("732 32"), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an integer and returns an array from 1 to the given number, where:
    // If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
    // If the number cannot be divided evenly by 4, simply return the number.

function amplify(num) {
  	let arr = [];
	for(let i=1 ; i<=num ; i++) {
		arr.push(i);
	}

  	for(let j=0 ; j<arr.length ; j++) {
		if(arr[j] % 4 === 0) {
			arr.splice(j, 1, arr[j]*10);
		}
	}
  	return arr;
}

// tests
Test.assertSimilar(amplify(1), [1]);
Test.assertSimilar(amplify(4), [1, 2, 3, 40]);
Test.assertSimilar(amplify(25), [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* In JavaScript, a truthy value is a value that translates
to true when evaluated in a Boolean context. All values
are truthy unless they're defined as falsy.

All falsy values are as follows:
  false
  null
  undefined
  0
  NaN
  ""

Create a function that takes an argument of any data
type and returns 1 if it's truthy and 0 if it's falsy. */

function isTruthy(input) {
	if(input === false || input === null
	   || input === undefined || input === 0
	   || input === ""|| Number.isNaN(input) ) return 0;
  	else return 1;
}

// or

function isTruthy(input) {
	return input ? 1 : 0;
}


// tests
Test.assertEquals(isTruthy(1), 1);
Test.assertEquals(isTruthy(-1), 1);
Test.assertEquals(isTruthy("false"), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

function maximumScore(tileHand) {
  	let scores = [];

  	tileHand.forEach(x => {
		scores.push(x.score);
	});

	const sum = scores.reduce((acc,cur) => {
		return acc + cur;
	});

	return sum;
}

// tests
Test.assertEquals(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]), 28);
Test.assertEquals(maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]), 15);
Test.assertEquals(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 18);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// without using multiplication, how would you multiply two inputs?

function multiply(num, times) {
	return ("i").repeat(num).repeat(times).length;
}

// // or

function multiply(num, times) {
	let answer = num;

  	for(let i=0 ; i<times-1 ; i++) {
    	answer += num;
    }
  	return answer;
}

// tests
multiply(3,2);	// 6
multiply(2,2);	// 4
multiply(3,8);	// 24

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {
  	return str === str.split('').reverse().join('') ? true : false;
}

// tests
Test.assertEquals(checkPalindrome('mom'), true)
Test.assertEquals(checkPalindrome('scary'), false)
Test.assertEquals(checkPalindrome('reviver'), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largestSwap(num) {
	let newNum = num.toString().split('').reverse().join('');
  	return num >= newNum  ? true : false;
}

// tests
Test.assertEquals(largestSwap(27), false, '27 < 72, so not largest swap.')
Test.assertEquals(largestSwap(43), true, '43 > 34, so largest swap.')
Test.assertEquals(largestSwap(99), true, 'Cannot do better, so largest swap.')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that transforms an array into a set and then back into an array of unique values.

function set(arr) {
	const newSet = new Set([...arr]);
  	const newArr = [];
  	newArr.push(...newSet);
  	return newArr;
}

// tests
Test.assertSimilar(set([1, 3, 3, 5, 5]), [1, 3, 5])
Test.assertSimilar(set([4, 4, 4, 4]), [4])
Test.assertSimilar(set([5, 7, 8, 9, 10, 15]), [5, 7, 8, 9, 10, 15])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to remove all null values from an array.

function removeNull(arr) {
	let result = arr.filter(x => x != null);
  	return result;
}

// tests
Test.assertSimilar(removeNull(['a', null, 'b', null]), ['a', 'b'])
Test.assertSimilar(removeNull([null, null, null, null, null]), [])
Test.assertSimilar(removeNull([7, 8, null, 9]), [7, 8, 9])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//

// tests
Test.assertSimilar(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'), ['cleverly', 'meekly', 'hurriedly', 'nicely'])
Test.assertSimilar(addEnding(['new', 'pander', 'scoop'], 'er'), ['newer', 'panderer', 'scooper'])
Test.assertSimilar(addEnding(['bend', 'sharpen', 'mean'], 'ing'), ['bending', 'sharpening', 'meaning'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

function numberSyllables(word) {
	let arr = word.split('-');
  	return arr.length;
}

// tests
Test.assertEquals(numberSyllables("buf-fet"), 2)
Test.assertEquals(numberSyllables("beau-ti-ful"), 3)
Test.assertEquals(numberSyllables("mon-u-men-tal"), 4)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
	// The first number is the major version.
	// The second number is the minor version.
	// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
	let maj = semver.split('.');
  	return maj[0]
}

function retrieveMinor(semver) {
	let minor = semver.split('.');
  	return minor[1]
}

function retrievePatch(semver) {
	let patch = semver.split('.');
  	return patch[2]
}

// tests
Test.assertEquals(retrieveMajor("6.1.9"), "6")
Test.assertEquals(retrieveMinor("6.1.9"), "1")
Test.assertEquals(retrievePatch("6.1.9"), "9")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
	return str.includes(' ');
}

// tests
Test.assertEquals(hasSpaces("Foo"), false)
Test.assertEquals(hasSpaces("Foo bar"), true)
Test.assertEquals(hasSpaces("Foo "), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
	return (num >= range.min && num <= range.max);
}

// tests
Test.assertEquals(isInRange(4, { min: 0, max: 5 }), true)
Test.assertEquals(isInRange(4, { min: 4, max: 5 }), true)
Test.assertEquals(isInRange(4, { min: 0, max: 4 }), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:
// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }

// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

function checkAllEven(arr) {
  return arr.every(x => x % 2 === 0)
}

// tests
Test.assertEquals(checkAllEven([1, 2, 3, 4]), false)
Test.assertEquals(checkAllEven([2, 4, 6]), true)
Test.assertEquals(checkAllEven([5, 6, 8, 10]), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(start) {
	let arr = [];
  	for(let i=start ; i>=0 ; i--) {
		arr.push(i);
	}
  	return arr;
}

// tests
Test.assertSimilar(countdown(3), [3, 2, 1, 0])
Test.assertSimilar(countdown(20), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
Test.assertSimilar(countdown(1), [1, 0])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/***
* Write two functions:
* firstArg() should return the first parameter passed in.
* lastArg() should return the last parameter passed in.
* Return undefined if the function takes no parameters.
***/

function firstArg() {
  	if(arguments.length === 0) return undefined;
	return arguments[0];
}

function lastArg() {
	return arguments[arguments.length-1]
}

// tests
Test.assertEquals(firstArg(1, 2, 3), 1)
Test.assertEquals(firstArg('a', 'b', 'c'), 'a')
Test.assertEquals(firstArg(8), 8)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that repeats each character in a string n times.

function repeat(str, n) {
  	let arr = str.split('');
	const res = arr.map(x => x.repeat(n));
	return res.join('');
}

// tests
Test.assertEquals(repeat("mice", 5), "mmmmmiiiiiccccceeeee")
Test.assertEquals(repeat("hello", 3), "hhheeellllllooo")
Test.assertEquals(repeat("stop", 1), "stop")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the ASCII value of the passed in character.

function ctoa(c) {
	return c.charCodeAt();
}

// tests
Test.assertEquals(ctoa(' '), 32)
Test.assertEquals(ctoa('A'), 65)
Test.assertEquals(ctoa(']'), 93)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the total number of parameters passed in.

function numberArgs(/* fill-in */) {
	return arguments.length;
}

// tests
Test.assertEquals(numberArgs('a', 'b', 'c'), 3)
Test.assertEquals(numberArgs(10, 20, 30, 40, 50), 5)
Test.assertEquals(numberArgs('x', 'y'), 2)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to calculate the determinant of a 2 x 2 matrix. The determinant of the following matrix is: ad - bc

function calcDeterminant(matrix) {
  	return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// tests
Test.assertEquals(calcDeterminant([[1, 2],[3, 4]]), -2)
Test.assertEquals(calcDeterminant([[5, 3],[3, 1]]), -4)
Test.assertEquals(calcDeterminant([[1, 1],[1, 1]]), 0)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/***
* Your friend is trying to write a function that removes all vowels from a string. They write:
* 	function removeVowels(str) {
*		return str.replace(/[aeiou]/, "");
*	}
* However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.
***/

function removeVowels(str) {
  return str.replace(/['aeiou']/g, '');
}

// tests
Test.assertEquals(removeVowels('ben'), 'bn')
Test.assertEquals(removeVowels('many'), 'mny')
Test.assertEquals(removeVowels('candy'), 'cndy')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function replaces all the vowels in a string with a specified character.

function replaceVowels(str, ch) {
	return str.replace(/[aeiou]/g, ch);
}

// tests
Test.assertEquals(replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
Test.assertEquals(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
Test.assertEquals(replaceVowels("shakespeare", "*"), "sh*k*sp**r*")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
	let up = str.toUpperCase();
  	let lc = str.toLowerCase();
  	return str === up || str === lc;
}

// tests
Test.assertEquals(sameCase("HELLO"), true)
Test.assertEquals(sameCase("HEllo"), false)
Test.assertEquals(sameCase("mArmALadE"), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
*/

function mysteryFunc(arr, num) {
	return arr.map(x => x % num);
}

// tests
Test.assertSimilar(mysteryFunc([5, 7, 8, 2, 1], 2), [1, 1, 0, 0, 1])
Test.assertSimilar(mysteryFunc([9, 8, 16, 47], 4), [1, 0, 0, 3])
Test.assertSimilar(mysteryFunc([17, 11, 99, 55, 23, 1], 5), [2, 1, 4, 0, 3, 1])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a function that filters out an array of state names into two categories based on the second parameter.
    Abbreviations abb
    Full names full
*/

function filterStateNames(arr, type) {
	if(type == 'abb') {
		return arr.filter(x => x.length <= 2)
	} else {
		return arr.filter(x => x.length > 2)
	}
}

// tests
Test.assertSimilar(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb'), ['CA', 'NY'])
Test.assertSimilar(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'), ['Arizona', 'Nevada'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/***
* Write two functions:
*	toInt() : A function to convert the integer value of a string.
*	toStr() : A function to transform a string into an integer.
***/

function toInt(str) {
	return Number(str);
}

function toStr(int) {
	return int.toString();
}

// tests
Test.assertEquals(toInt("37"), 37)
Test.assertEquals(toInt("113"), 113)
Test.assertEquals(toInt("5"), 5)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that removes the first and last characters from a string.

function removeFirstLast(str) {
	return str.slice(1, str.length-1);
}

// tests
Test.assertEquals(removeFirstLast("hello"), "ell")
Test.assertEquals(removeFirstLast("benefit"), "enefi")
Test.assertEquals(removeFirstLast("wordy"), "ord")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Fix this broken code!
/*
function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
*/

function checkEquals(arr1, arr2) {
	if (arr1.join('') === arr2.join('')) return true;
  	else return false;
}

// tests
Test.assertEquals(checkEquals([1, 2], [1, 3]), false)
Test.assertEquals(checkEquals([1, 2], [1, 2]), true)
Test.assertEquals(checkEquals([4, 5, 6], [4, 5, 6]), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// create a function that returns an array of additive inverses

function additiveInverse(arr) {
    return arr.map(x => x * -1);
}

// tests
Test.assertSimilar(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
Test.assertSimilar(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
Test.assertSimilar(additiveInverse([-5, -25, 35]), [5, 25, -35])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
	return n % 5 == 0;
}

// tests
Test.assertEquals(divisibleByFive(7), false)
Test.assertEquals(divisibleByFive(5), true)
Test.assertEquals(divisibleByFive(15), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	return s.length == 0;
}

// tests
Test.assertEquals(isEmpty(""), true)
Test.assertEquals(isEmpty(" "), false)
Test.assertEquals(isEmpty("            "), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr) {
	return arr[arr.length-1] + (arr[1] - arr[0]);
}

// tests
Test.assertEquals(nextElement([3, 5, 7, 9]), 11)
Test.assertEquals(nextElement([-5, -6, -7]), -8)
Test.assertEquals(nextElement([2, 2, 2, 2, 2]), 2)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes the base and height of a triangle and return its area. The area of a triangle is (base * height) / 2.

function triArea(base, height) {
	return (base * height) / 2;
}

// tests
Test.assertEquals(triArea(3, 2), 3)
Test.assertEquals(triArea(5, 4), 10)
Test.assertEquals(triArea(10, 10), 50)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

function same(a1, a2) {
	let one = new Set(a1);
  	let two = new Set(a2);

  	return one.size === two.size;
}

// tests
Test.assertEquals(same([1, 3, 4, 4, 4], [2, 5, 7]), true)
Test.assertEquals(same([9, 8, 7, 6], [4, 4, 3, 1]), false)
Test.assertEquals(same([2], [3, 3, 3, 3, 3]), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
	return arr.map(x => x * -1);
}

// tests
Test.assertSimilar(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
Test.assertSimilar(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
Test.assertSimilar(additiveInverse([-5, -25, 35]), [5, 25, -35])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

function animals(chickens, cows, pigs) {
	return chickens * 2 + (cows + pigs) * 4;
}

// tests
Test.assertEquals(animals(5, 2, 8), 50)
Test.assertEquals(animals(3, 4, 7), 50)
Test.assertEquals(animals(1, 2, 3), 22)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format: [[evens], [odds]]

function evenOddPartition(arr) {
	let result = [[],[]];

  	arr.filter(x => {
		if(x % 2 === 0) result[0].push(x);
	  	else result[1].push(x);
	})

	return result;
}

// tests
Test.assertSimilar(evenOddPartition([5, 8, 9, 2, 0]), [[8, 2, 0], [5, 9]])
Test.assertSimilar(evenOddPartition([1, 0, 1, 0, 1, 0]), [[0, 0, 0], [1, 1, 1]])
Test.assertSimilar(evenOddPartition([8, 8, 4, 2]), [[8, 8, 4, 2], []])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the smaller number.

function smallerNum(n1, n2) {
	return n1.length > n2.length ? n2 : n1;
}

// tests
Test.assertEquals(smallerNum("21", "44"), "21")
Test.assertEquals(smallerNum("153", "367"), "153")
Test.assertEquals(smallerNum("1500", "16"), "16")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
	return arr1.concat(arr2);
}

// tests
Test.assertSimilar(concat([1, 3, 5], [2, 6, 8]), [1, 3, 5, 2, 6, 8])
Test.assertSimilar(concat([7, 8], [10, 9, 1, 1, 2]), [7, 8, 10, 9, 1, 1, 2])
Test.assertSimilar(concat([4, 5, 1], [3, 3, 3, 3, 3]), [4, 5, 1, 3, 3, 3, 3, 3])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the product of all odd integers in an array.

function oddProduct(arr) {
	let odds = arr.filter(x => x % 2 !== 0);
	return odds.reduce((a,b) => a * b);
}

// tests
Test.assertEquals(oddProduct([3, 4, 1, 1, 5]), 15)
Test.assertEquals(oddProduct([5, 5, 8, 2, 4, 32]), 25)
Test.assertEquals(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the smaller number.

function smallerNum(n1, n2) {
	if(Number.parseInt(n1) < Number.parseInt(n2)) return n1
	else return n2;
}

// tests
Test.assertEquals(smallerNum("21", "44"), "21")
Test.assertEquals(smallerNum("153", "367"), "153")
Test.assertEquals(smallerNum("1500", "16"), "16")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array and returns the difference between the smallest and biggest numbers.

function differenceMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr);
}

// tests
Test.assertEquals(differenceMaxMin([10,4,1,2,8,91]), 90)
Test.assertEquals(differenceMaxMin([-70,43,34,54,22]), 124)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
  	if(str.length === 0) return [];
	else return str.split(', ')
}

// tests
Test.assertSimilar(toArray("watermelon, raspberry, orange"), ["watermelon", "raspberry", "orange"])
Test.assertSimilar(toArray("x1, x2, x3, x4, x5"), ["x1", "x2", "x3", "x4", "x5"])
Test.assertSimilar(toArray("a, b, c, d"), ["a", "b", "c", "d"])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function to reverse an array.

function reverse(arr) {
	return arr.reverse()
}

// tests
Test.assertSimilar(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
Test.assertSimilar(reverse([5, 6, 7]), [7, 6, 5])
Test.assertSimilar(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Hamming distance is the number of characters that differ between two strings.

To illustrate:
	String1: "abcbba"
	String2: "abcbda"

	Hamming Distance: 1 - "b" vs. "d" is the only difference.

Create a function that computes the hamming distance between two strings.
*/

function hammingDistance(str1, str2) {
  	let arr1 = [...str1]
	let arr2 = [...str2]
	let count = 0

	for(let i=0 ; i<arr1.length ; i++) {
		if(arr1[i] != arr2[i]) count++;
	}
  	return count;
}

// tests
Test.assertEquals(hammingDistance("abcde", "bcdef"), 5)
Test.assertEquals(hammingDistance("abcde", "abcde"), 0)
Test.assertEquals(hammingDistance("strong", "strung"), 1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Write a function that returns true if there exists at least one number that is larger than or equal to n.

function existsHigher(arr, n) {
	return arr.some(i => i >= n)
}

// tests
Test.assertEquals(existsHigher([5, 3, 15, 22, 4], 10), true)
Test.assertEquals(existsHigher([1, 2, 3, 4, 5], 8), false)
Test.assertEquals(existsHigher([4, 3, 3, 3, 2, 2, 2], 4), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function to check whether an array contains a particular element.

function check(arr, el) {
	return arr.includes(el)
}

// tests
Test.assertEquals(check([1, 2, 3, 4, 5], 3), true)
Test.assertEquals(check([1, 1, 2, 1, 1], 3), false)
Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 7), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if the product of an array is divisible by the sum of that same array.

function divisible(arr) {
	let prod = arr.reduce((i, val) => {
		return i * val;
	});
  	let sum = arr.reduce((i, val) => {
	  	return i + val;
	});

  	return prod % sum === 0;
}

// tests
Test.assertEquals(divisible([3, 2, 4, 1]), false)
Test.assertEquals(divisible([4, 4, 4, 4]), true)
Test.assertEquals(divisible([4, 2, 6]), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
A pair of strings form a strange pair if:
	1st string's first letter = 2nd string's last letter.
	1st string's last letter = 2nd string's first letter.
Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
*/

function isStrangePair(str1, str2) {
	return str1[0] == str2[str2.length-1] && str1[str1.length-1] == str2[0];
}

// tests
Test.assertEquals(isStrangePair("ratio", "orator"), true)
Test.assertEquals(isStrangePair("sparkling", "groups"), true)
Test.assertEquals(isStrangePair("mentee", "eminem"), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Fix this code
function checkEquals(arr1, arr2) {
	if (arr1.join(" ") === arr2.join(" ")) {
  		return true;
 	} else {
  		return false;
 	}
}


// tests

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to extract the name of the subreddit from its URL.

function subReddit(link) {
	let spLink = link.split('/');
  	return spLink[spLink.length-2];
}

// tests
Test.assertEquals(subReddit("https://www.reddit.com/r/relationships/"), "relationships")
Test.assertEquals(subReddit("https://www.reddit.com/r/mildlyinteresting/"), "mildlyinteresting")
Test.assertEquals(subReddit("https://www.reddit.com/r/funny/"), "funny")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1;
}

// tests
Test.assertEquals(nextEdge(5, 4), 8)
Test.assertEquals(nextEdge(8, 3), 10)
Test.assertEquals(nextEdge(7, 9), 15)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".

const helloName = name => 'Hello ' + name + '!'
const helloName = name => `Hello ${name}!` // better solution

// tests
Test.assertEquals(helloName("Gerald"), "Hello Gerald!")
Test.assertEquals(helloName("Fatima"), "Hello Fatima!")
Test.assertEquals(helloName("Ed"), "Hello Ed!")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.

const volumeOfBox = sizes => sizes.width * sizes.length * sizes.height

// tests
Test.assertEquals(volumeOfBox({width: 11,length: 1, height: 2}), 22)
Test.assertEquals(volumeOfBox({width: 1, length: 5,  height: 3}), 15)
Test.assertEquals(volumeOfBox({width: 2, length: 1,  height: 1}), 2)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that validates whether two strings are identical. Make this validator case insensitive.

function match(s1, s2) {
	return s1.toLowerCase() === s2.toLowerCase()
}

// tests
Test.assertEquals(match("hello", "hELLo"), true)
Test.assertEquals(match("hey", "hey"), true)
Test.assertEquals(match("venom", "VENOM"), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on... Write a function that takes a number n and returns the number of stacked boxes.

function stackBoxes(n) {
	return Math.pow(n,2);
}

// tests
Test.assertEquals(stackBoxes(1), 1)
Test.assertEquals(stackBoxes(2), 4)
Test.assertEquals(stackBoxes(0), 0)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if k^k == n for input (n, k).

function kToK(n, k) {
	return Math.pow(k,k) === n;
}

// tests
Test.assertEquals(kToK(4, 2), true)
Test.assertEquals(kToK(387420489, 9), true)
Test.assertEquals(kToK(302875106592253, 13), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

function transform(arr) {
	const results = arr.map(x => {
		if(x % 2 !== 0) {
			return x + 1;
	  	} else {
			return x - 1;
		}
	})
	return results;
}

/*
// better solution:
function transform(arr) {
    return arr.map(num => num % 2 === 0 ? num - 1 : num + 1)
}
*/

// tests
Test.assertSimilar(transform([1, 2, 3, 4, 5]), [2, 1, 4, 3, 6])
Test.assertSimilar(transform([3, 3, 4, 3]), [4, 4, 3, 4])
Test.assertSimilar(transform([2, 2, 0, 8, 10]), [1, 1, -1, 7, 9])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if an object is empty, and false otherwise.

function isEmpty(obj) {
	return Object.keys(obj).length <= 0
}

// tests
Test.assertEquals(isEmpty({}), true)
Test.assertEquals(isEmpty({a: 1}), false)
Test.assertEquals(isEmpty({z: 2, w: 4, y: 5}), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(factors, num) {
  	return factors.every(x => num % x === 0)
}

// tests
Test.assertEquals(checkFactors([2, 3, 4], 12), true)
Test.assertEquals(checkFactors([1, 2, 3, 8], 12), false, '8 is not a factor of 12')
Test.assertEquals(checkFactors([1, 2, 50], 100), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string as its argument and returns the string in reversed order.

def reverse(str)
	return str.reverse()
end

// tests
Test.assert_equals(reverse("Think different."), ".tnereffid knihT")
Test.assert_equals(reverse("It doesn't make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."), ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t'nseod tI")
Test.assert_equals(reverse("Innovation is the ability to see change as an opportunity - not a threat"), "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(num) {
	return `Ed${"a".repeat(num)}bit`
}

// tests
Test.assertEquals(howManyTimes(5), "Edaaaaabit")
Test.assertEquals(howManyTimes(15), "Edaaaaaaaaaaaaaaabit")
Test.assertEquals(howManyTimes(10), "Edaaaaaaaaaabit")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object´s three properties: name, population and continent.

The string should have the following format: 'X has a population of Y and is situated in Z' (where X is the city name, Y is the population and Z is the continent the city is situated in).
*/

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

// tests
Test.assertEquals(cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}), 'Manila has a population of 1,780,148 and is situated in Asia')
Test.assertEquals(cityFacts({name: 'Melbourne', population: '4,936,349', continent: 'Australia'}), 'Melbourne has a population of 4,936,349 and is situated in Australia')
Test.assertEquals(cityFacts({name: 'Kampala', population: '1,507,080', continent: 'Africa'}), 'Kampala has a population of 1,507,080 and is situated in Africa')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that finds the index of a given item if the array is sorted.

function search(arr, item) {
	return arr.indexOf(item)
}

// tests
Test.assertEquals(search([1, 2, 3, 4], 3), 2)
Test.assertEquals(search([2, 4, 6, 8, 10], 8), 3)
Test.assertEquals(search([1, 3, 5, 7, 9], 11), -1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that finds the index of a given item.

function search(arr, item) {
	if(!arr.indexOf(item)) {
		return -1;
	}
  	return arr.indexOf(item);
}

// tests
Test.assertEquals(search([1, 5, 3], 5), 1)
Test.assertEquals(search([9, 8, 3], 3), 2)
Test.assertEquals(search([1, 2, 3], 4), -1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

function operation(num1, num2) {
	if(num1 + num2 === 24) {
		return 'added';
	} else if(Math.abs(num1) - Math.abs(num2) === 24) {
	  	return 'subtracted';
	} else if(num1 * num2 === 24) {
	  	return 'multiplied';
	} else if(Math.abs(num1) / Math.abs(num2) === 24)
  		return 'divided';
  	else {
	  	return null;
	}
}

// tests
Test.assertEquals(operation(12, 12), "added")
Test.assertEquals(operation(100, 76), "subtracted")
Test.assertEquals(operation(6, 4), "multiplied")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.

function convertCartesian(x, y) {
  	let xy = [];
	for(let i=0 ; i<x.length ; i++) {
		xy.push([x[i], y[i]]);
	}
  	return xy;
}

/*
a better solution:
function convertCartesian(x,y) {
	return x.map((el, i) => [el, y[i]])
}
 */

// tests
Test.assertSimilar(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]])
Test.assertSimilar(convertCartesian([9, 8, 3], [1, 1, 1]), [[9, 1], [8, 1], [3, 1]])
Test.assertSimilar(convertCartesian([2, 5, 1], [7, 8, 9]), [[2, 7], [5, 8], [1, 9]])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function which filters out strings from an array and returns a new array containing only integers.

function filterList(l) {
	return l.filter(x => typeof x === 'number');
}

// tests
Test.assertSimilar(filterList([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4])
Test.assertSimilar(filterList(["A", 1, '&amp', 0, -9, 'Edabit']), [1, 0, -9])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
=======
// Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(nums) {
	return Math.max(...nums) - Math.min(...nums)
}

// tests
Test.assertEquals(difference([-9, -8, 6, -9, 15, 6]), 24)
Test.assertEquals(difference([-5, 6, 18, 4, 16, -2]), 23)
Test.assertEquals(difference([-2, 20, -9, -9, -2, -7]), 29)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
  	if(str.length > 2) return str.slice(1, str.length-1);
	else return str;
}

// tests
Test.assertEquals(removeFirstLast("benefit"), "enefi")
Test.assertEquals(removeFirstLast("to"), "to")
Test.assertEquals(removeFirstLast(""), "")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that filters out an array to include numbers who only have a certain number of digits.

function filterDigitLength(arr, num) {
  	return arr.filter(x => x.toString().length === num);
}

// tests
Test.assertSimilar(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555])
Test.assertSimilar(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9])
Test.assertSimilar(filterDigitLength([32, 88, 74, 91, 300, 4050], 1), [], 'Should return empty array if no numbers of specified length exist.')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.

function dictionary(initial, words) {
	return words.filter(x => x.startsWith(initial));
}

// tests
Test.assertSimilar(dictionary('bu', ['button', 'breakfast', 'border']), ['button'])
Test.assertSimilar(dictionary('beau', ['pastry', 'delicious', 'name', 'boring']), [])
Test.assertSimilar(dictionary('there', ['there', 'here', 'everywhere']), ['there'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	return arr[0];
}

// tests
Test.assertEquals(getFirstValue([1, 2, 3]), 1)
Test.assertEquals(getFirstValue([80, 5, 100]), 80)
Test.assertEquals(getFirstValue([-500, 0, 50]), -500)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that recursively finds the sum of the first n natural numbers.

function sum(n) {
	if(n == 0) {
		return n;
	} else {
		return n + sum(n-1);
	}
}

// tests
Test.assertEquals(sum(1), 1)
Test.assertEquals(sum(5), 15)
Test.assertEquals(sum(7), 28)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
	If the number falls within the range, the number should be returned.
	If the number is less than the lower limit of the range, the lower limit should be returned.
	If the number is greater than the upper limit of the range, the upper limit should be returned.
*/

function limitNumber(num, rangeLow, rangeHigh) {
	if(rangeLow < num && num < rangeHigh) return num;
  	else if(num < rangeLow) return rangeLow;
  	else return rangeHigh;
}

// tests
Test.assertEquals(limitNumber(5, 1, 10), 5)
Test.assertEquals(limitNumber(-3, 1, 10), 1)
Test.assertEquals(limitNumber(14, 1, 10), 10)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
  arr.pop()
  return arr
}

*/

function minusOne(arr) {
	return arr.slice(0, - 1);
}

// tests
Test.assertSimilar(minusOne(x), [1, 2, 3, 4])
Test.assertSimilar(minusOne(x), [1, 2, 3, 4])
Test.assertSimilar(minusOne(x), [1, 2, 3, 4])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

function mean(nums) {
	let sum = nums.reduce((a,cv) => a + cv);
	let mean = sum / nums.length;
	return Number(mean.toFixed(1));
}

// tests
Test.assertEquals(mean([1, 1, 2, 2, 3, 5, 5, 5, 7]), 3.4)
Test.assertEquals(mean([1, 2, 2, 3, 7, 9, 10]), 4.9)
Test.assertEquals(mean([1, 2, 3, 4, 5, 6, 6, 10, 10]), 5.2)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if a number is a palindrome.

function isPalindrome(n) {
  	let arr = n.toString().split('');
	return arr.join('') === arr.reverse().join('');
}

// tests
Test.assertEquals(isPalindrome(838), true)
Test.assertEquals(isPalindrome(77), true)
Test.assertEquals(isPalindrome(95159), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a function, that will for a given a, b, c, do the following:
	Add a to itself b times.
	Check if the result is divisible by c.
*/

function abcmath(a, b, c) {
	for(let i=0 ; i<b ; i++) {
		a += a;
	}
  	return a % c === 0;
}

// tests
Test.assertEquals(abcmath(1, 2, 3), false)
Test.assertEquals(abcmath(69, 15, 9), false)
Test.assertEquals(abcmath(9, 2, 52), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

function correctStream(user, correct) {
  	let results = [];
  	for(let i=0 ; i<user.length ; i++) {
		if(user[i] === correct[i]) {
			results.push(1);
		} else {
		  	results.push(-1);
		}
	}
  	return results;
}

/*
a better solution:

function correctStream(user, correct) {
	return user.map((user, i) => user === correct[i] ? 1 : -1);
}
*/

// tests
Test.assertSimilar(correctStream(["it", "is", "find"], ["it", "is", "fine"]), [1, 1, -1])
Test.assertSimilar(correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]), [1, -1, 1, 1, 1])
Test.assertSimilar(correctStream(["weird", "indicr", "moment"], ["weird", "indict", "moment"]), [1, -1, 1])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(s) {
	let s1 = new Set([...s]);
  	return s1.size === 1;
}

// tests
Test.assertEquals(isIdentical("kkkkk"), true)
Test.assertEquals(isIdentical("ckkkk"), false)
Test.assertEquals(isIdentical("kkkkck"), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that maps files to their extension names.

function getExtension(arr) {
  	return arr.map(x => x.split('.')[1])
}

// tests
Test.assertSimilar(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), ["jpg", "pdf", "mp3"])
Test.assertSimilar(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]), ["rb", "cpp", "py", "js"])
Test.assertSimilar(getExtension(["code.html", "code.css"]), ["html", "css"])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given an unsorted array, create a function that returns the nth smallest element (the smallest element is the first smallest, the second smallest element is the second smallest, etc).

function nthSmallest(arr, n) {
	return (n > arr.length) ? null : arr.sort()[n-1];
}

// tests
Test.assertEquals(nthSmallest([1, 3, 5, 7], 1), 1)
Test.assertEquals(nthSmallest([1, 3, 5, 7], 3), 5)
Test.assertEquals(nthSmallest([1, 3, 5, 7], 5), null)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(s1, s2) {
	let set = new Set(s1.concat(s2));
  	return set.size;
}

// tests
Test.assertEquals(countUnique("apple", "play"), 5)
Test.assertEquals(countUnique("sore", "zebra"), 7)
Test.assertEquals(countUnique("pip", "geeks"), 6)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner: firstAndLast(string) ➞ [first, last]

function firstAndLast(s) {
  	let splt = s.split('');

	let first = splt.sort().join('');
	let last = splt.reverse().sort((a,b) => {
	  if(a>b) return -1;
	  else if(a<b) return 1;
	  else return 0;
	}).join('');


  	return [first, last];
}

/*
a better solution:

function firstAndLast(s) {
  	first = s.split('').sort().join('');
	last = s.split('').sort().reverse().join('');

  	return [first, last];
}

*/

// tests
Test.assertSimilar(firstAndLast("marmite"), ["aeimmrt", "trmmiea"])
Test.assertSimilar(firstAndLast("bench"), ["bcehn", "nhecb"])
Test.assertSimilar(firstAndLast("scoop"), ["coops", "spooc"])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers(one, two, three) {
	let arr = [one, two, three];
  	arr.sort((a,b) => a-b);

  	return arr[arr.length-1] - arr[0];
}

// tests
Test.assertEquals(programmers(1,   5,   9),   8)
Test.assertEquals(programmers(43,  33,  43),  10)
Test.assertEquals(programmers(88,  14,  23),  74)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

function getWord(left, right) {
	return left[0].toUpperCase()+ left.slice(1) + right;
}

// tests
Test.assertEquals(getWord("maga", "zine"), "Magazine")
Test.assertEquals(getWord("reli", "able"), "Reliable")
Test.assertEquals(getWord("impl", "icit"), "Implicit")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
In this exercise you will have to:
	Take a list of names.
	Add "Hello" to every name.
	Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".
*/

function greetPeople(names) {
	if(names.length === 0) return "";
  	else {
		return names.map(x => `Hello ${x}`).join(', ');
	}
}

// tests
Test.assertEquals(greetPeople(["Kyrill"]),  "Hello Kyrill")
Test.assertEquals(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]), "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
Test.assertEquals(greetPeople([]), "")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes a string as an argument and returns the left most digit in the string.

function leftDigit(num) {
	return num.match(/[\d]/)[0];
}

// tests
Test.assertEquals(leftDigit("TrAdE2W1n95!"), 2)
Test.assertEquals(leftDigit("V3r1ta$"), 3)
Test.assertEquals(leftDigit("U/\/DertHe1nflu3nC3"), 1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	return num <= 0;
}

// tests
Test.assertEquals(lessThanOrEqualToZero(5), false)
Test.assertEquals(lessThanOrEqualToZero(0), true)
Test.assertEquals(lessThanOrEqualToZero(-5), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given an array, transform that array into a mirror.

function mirror(arr) {
	let mirrorArr = [];
	mirrorArr.push(...arr, ...arr.slice(0, arr.length-1).reverse());
  	return mirrorArr;
}

/*
a better solution:

function mirror(arr) {
	return [... arr, ... arr.splice(0, arr.length - 1).reverse()]
}
*/

// tests
Test.assertSimilar(mirror([1,2,3,4,5]), [1,2,3,4,5,4,3,2,1])
Test.assertSimilar(mirror([0,2,4,6]), [0,2,4,6,4,2,0])
Test.assertSimilar(mirror([1,2,2,3,3,4]), [1,2,2,3,3,4,3,3,2,2,1])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
  	let regex = /[a-zA-Z]/g;
	return str.match(regex).join('');
}

// tests
Test.assertEquals(lettersOnly(',1|2)")A^1<[_)?^"]l[a`3+%!d@8-0_0d.*}i@&n?='), 'Aladdin')
Test.assertEquals(lettersOnly('^U)6$22>8p).'), 'Up')
Test.assertEquals(lettersOnly('I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8'), 'Inception')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that retrieves the last n elements from an array.

function last(a, n) {
	if(n > a.length) return 'invalid';
  	else if(n === 0) return [];
	else if(n === 1) return [a[a.length-1]];
  	else return a.slice(n - a.length);
}

// tests
Test.assertSimilar(last([1, 2, 3, 4, 5], 0), [])
Test.assertSimilar(last([1, 2, 3, 4, 5], 1), [5])
Test.assertSimilar(last([4, 3, 9, 9, 7, 6], 3), [9, 7, 6])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// name matching
function nameMatch(known_aliases, name_match) {
  let ka = known_aliases.join(', ').split(',');
  let nm = name_match;
  let kaSP = [];
  let nmSP = name_match.split(' ');

  let hits = [];


  for(let i=0 ; i<ka.length ; i++) {
    kaSP = ka[i].split(' ');
    // console.log(kaSP.length, kaSP, nmSP.length, nmSP)

    if(kaSP.length === nmSP.length) {
      if(kaSP[i].includes(nmSP[i])) hits.push(kaSP[i]);
    }

    else if(kaSP.length === 3 && nmSP.length < 3) {
      if(kaSP[0] == '') {
        kaSP.splice(0,1);
      }

      kaSP.splice(1,1);
      console.log(kaSP)
      if(kaSP[i].includes(nmSP[i])) hits.push(kaSP[i]);
    }

    else if(kaSP.length < 3 && nmSP.length === 3) {
      nmSP.splice(1,1);
      console.log(nmSP)
      if(kaSP[i].includes(nmSP[i])) hits.push(kaSP[i]);
    }
  }









  // for(let i=0 ; i<ka.length ; i++) {
  //   // if the known_alias has the same length as name_match
  //   if(ka[i].length, nm.length) {
  //     if(ka[i].includes(nm)) hits.push(ka[i]);

  //   }

  //   // if there is a middle name in the known_alias, compare first and last of known_alias and name_match
  //   kaSP = ka[i].split(' ');

  //   if(kaSP[0] == '') {
  //     kaSP.splice(0,1);
  //   }

  //   if(kaSP.length > nmSP.length) {
  //     kaSP.splice(1,1);

  //     if(kaSP[i].includes(nmSP[i])) hits.push(kaSP[i])
  //   }

  //   if(kaSP.length < nmSP.length) {
  //     nmSP.splice(1,1);

  //     if(kaSP[i].includes(nmSP[i])) hits.push(kaSP[i])
  //   }


  // } // z for loop

  console.log('hits -->> ', hits);
  return hits.length > 0;

} // z name_match()

module.exports = nameMatch;



// tests --> jest
const nameMatch = require('./nameMatch');

// exact match test data
let test1 = ['Alphonse Gabriel Capone','Al Capone'];
// let test1 = ['Alphonse Gabriel Capone'];

// middle name missing on alias test data
let test2 = ['Alphonse Capone'];

// middle name missing on search name test data
let test3 = ['Alphonse Gabriel Capone'];
let test4 = ['Alphonse Gabriel Capone','Alphonse Francis Capone'];
let test5 = ['Alphonse Gabriel Capone','Alphonse F Capone'];


describe('nameMatch', () => {
  // test 1    ['Alphonse Gabriel Capone','Al Capone'];
  it('exact match', () => {
    expect(nameMatch(test1, 'Alphonse Gabriel Capone')).toBe(true);
  });
  it('exact match', () => {
    expect(nameMatch(test1, 'Al Capone')).toBe(true);
  });
  it('exact match', () => {
    expect(nameMatch(test1, 'Alphonse Francis Capone')).toBe(false);
  });

  // test 2     ['Alphonse Capone'];
  it('middle name missing (on alias)', () => {
    expect(nameMatch(test2, 'Alphonse Gabriel Capone')).toBe(true);
  });
  it('middle name missing (on alias)', () => {
    expect(nameMatch(test2, 'Alphonse Francis Capone')).toBe(true);
  });
  it('middle name missing (on alias)', () => {
    expect(nameMatch(test2, 'Alexander Capone')).toBe(false);
  });

  // test 3     ['Alphonse Gabriel Capone'];
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test3, 'Alphonse Capone')).toBe(true);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test3, 'Alphonse Francis Capone')).toBe(false);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test3, 'Alexander Capone')).toBe(false);
  });

  // test 4     ['Alphonse Gabriel Capone','Alphonse Francis Capone'];
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test4, 'Alphonse Gabriel Capone')).toBe(true);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test4, 'Alphonse Francis Capone')).toBe(true);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test4, 'Alphonse Edward Capone')).toBe(false);
  });

  // test 5     ['Alphonse Gabriel Capone','Alphonse F Capone'];
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test5, 'Alphonse G Capone')).toBe(true);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test5, 'Alphonse Francis Capone')).toBe(true);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test5, 'Alphonse E Capone')).toBe(false);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test5, 'Alphonse Edward Capone')).toBe(false);
  });
  it('middle name missing (on search name)', () => {
    expect(nameMatch(test5, 'Alphonse Gregory Capone')).toBe(false);
  });
});

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

function intOrString(param) {
	return isNaN(param) ? "str" : "int";
}

// tests
Test.assertEquals(intOrString(1), "int")
Test.assertEquals(intOrString("HELLO"), "str")
Test.assertEquals(intOrString("edabit"), "str")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Write a function that checks if two numbers are either:
	Smaller than 0
	Greater than 0
	Exactly 0
*/

function both(n1, n2) {
	if(n1 > 0 && n2 > 0 || n1 < 0 && n2 < 0 || n1 === 0 && n2 === 0) return true;
  	else return false;
}

// tests
[
	[6, 2, true],
	[-6, -9, true],
	[6, -2, false],
	[0, 0, true],
	[100, 1, true],
	[-0, 0, true],
	[-80, -5000, true],
	[6.28, -999, false],
	[-1, 2, false],
	[0, 2, false]
].forEach(x => Test.assertEquals(both(x[0], x[1]), x[2]))

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky13(nums) {
	return nums.filter(x => x % 13 !== 0);
}

// tests
Test.assertSimilar(unlucky13([91, 286, 416, 884, 1229]), [1229])
Test.assertSimilar(unlucky13([245, 518, 741, 824, 1092]), [245, 518, 824])
Test.assertSimilar(unlucky13([394, 447, 572, 832, 1105]), [394, 447])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step.

function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}

// tests
Test.assertEquals(matchHouses(1), 6)
Test.assertEquals(matchHouses(0), 0)
Test.assertEquals(matchHouses(17), 86)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
  	str = str.split('');
  	let hash = 0;
  	let plus = 0;

	if(str.length > 0) {
		str.forEach(x => {
			if(x == "#") hash = hash + 1;
			if(x == "+") plus = plus + 1;
		})
	  	return [hash,plus];
	}
  	else return [0,0];
}

// tests
Test.assertSimilar(hashPlusCount("####"), [4, 0])
Test.assertSimilar(hashPlusCount("#"), [1, 0])
Test.assertSimilar(hashPlusCount("+++++++"), [0, 7])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society.

function societyName(friends) {
  	let letters = [];
	friends.sort((a,b) => a > b );

  	for(let i=0 ; i<friends.length ; i++) {
		letters.push(friends[i][0]);
	}

	return letters.join('');
}

/*
a better solution:

function societyName(friends) {
  	return friends.map(x => x[0]).sort().join("");
}
*/

// tests
Test.assertEquals(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
Test.assertEquals(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
Test.assertEquals(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// interview exercise: https://codepen.io/bfranzen19-the-flexboxer/pen/bGbozPa?editors=1111
// html
// <div id="quote-module">
// 	<!-- company name -->
// 	<div class="nameDiv">
//     <h1 class="name"></h1>
// 	</div>
//
// 	<!-- row 1, last price, change, change percent -->
// 	<div class="flexcontainer">
// 		<div class="row bottomRow">
// 			<div id="LastPrice" class="column"></div>
// 			<div id="ChangeAndPercent" class="column left"></div>
// 		</div>
//
// 		<!-- row 2, range (low - high) -->
// 		<div class="row bottomRow">
// 			<div class="column leftCol"> Range </div>
// 			<div id="Range" class="column left rightCol"></div>
// 		</div>
//
// 		<!-- row 3, open -->
// 		<div class="row bottomRow">
// 			<div class="column leftCol"> Open </div>
// 			<div id="Open" class="column left rightCol"></div>
// 		</div>
//
// 		<!-- row 4, volume -->
// 		<div class="row bottomRow">
// 			<div class="column leftCol"> Volume </div>
// 			<div id="Volume" class="column left rightCol"></div>
// 		</div>
//
// 		<!-- row 5, market cap	-->
// 		<div class="row bottomRow">
// 			<div class="column leftCol"> Market Cap </div>
// 			<div id="MarketCap" class="column left rightCol"></div>
// 		</div>
//
// 		<!-- row 6, timestamp -->
// 		<div class="row bottomRow">
// 			<div id="Timestamp" class="column left"></div>
// 		</div>
//
// 		<!-- form (text input and button) -->
// 		<div class="formDiv">
// 			<form class="row">
// 				<input type="text" id="stockSymbol" class="column">
// 				<input id="btn" type="button" class="column" value="Get New Quote">
// 			</form>
// 		</div>
//
// 	</div>
// </div>

// <!-- KEEP THIS AS A REFERENCE GUIDE -->
//
// <br/><br/><br/><br/>
// <div>
// 	<section id="prototype"></section>
// </div>


// css
// #quote-module {
//   background: white;
//   min-height:200px;
//   margin: 24px auto;
// 	padding: 15px 1em 0 1em;
// 	font-family: Arial, Helvetica, sans-serif;
// 	border: 1px solid black;
// 	width: 24%;
// }
//
// .flexcontainer {
// 	display: flex;
// 	flex-direction: column;
// }
//
// .row {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   width: 100%;
// 	margin-bottom: 15px;
// 	padding-bottom: 10px;
// }
//
// .bottomRow {
// 	border-bottom: 1px solid lightgray;
// }
//
// .column {
//   display: flex;
//   flex-direction: column;
//   flex-basis: 100%;
//   flex: 1;
// }
//
// .left {
// 	align-items: flex-end;
// }
//
// .name {
// 	width: 10px;
// 	padding-top: 5px;
// 	margin-bottom: 1.5em;
// 	font-size: 16px;
// 	font-weight: normal;
// 	text-transform: uppercase;
// 	font-family: serif;
// }
//
// .nameDiv {
// 	border-top: 2px solid black;
// 	margin: 0 0 1em;
// }
//
// input[type="text"] {
//     width: 70%;
// }
//
// #btn {
// 	width: 40%;
// 	background-color: lightgray;
// 	margin-left: 5px;
// 	padding-top: 1%;
// 	padding-left: 17%;
// 	border-radius: 2px;
// 	font-size: 12px;
// 	background-image: linear-gradient(#f4f5f5, #dfdddd);
// }
//
// #btn:hover {
// 	background-image: linear-gradient(#d9dddd, #c6c3c3);
// }
//
// #LastPrice {
// 	font-size: 19px;
// 	font-family: serif;
// }
//
// #ChangeAndPercent {
// 	font-size: 18px;
// 	color: green;
// 	font-family: serif;
// }
//
// #Timestamp {
// 	font-size: 11px;
// 	color: gray:
// }
//
// .leftCol {
// 	font-size: 15px;
//
// }
//
// .rightCol {
// 	font-size: 13px;
// 	font-weight: bold;
// }



// js
$(function() {
	var symbol = "";
	var data = "";

	// click handler for the button
	$('#btn').click(function() {
		if(!dataList[symbol]) {
			// alerts the user if input is incorrect
			alert(`stock symbol not found. try one of the following: "MSFT", "BRKA", "AAPL", "INFO", "F", "PLT", "BIG", "TWX", "AME", "JWN", "CVS", "MS", "MET", "IVD", "RND"`);

			symbol = "MSFT";
			$('h1').html(datalist[symbol].Name);
			$('#ChangeAndPercent').html(`${datalist[symbol].Change.toFixed(2)} (${datalist[symbol].ChangePercent.toFixed(2)}%)`);
			$('#Range').html(`${datalist[symbol].Low} - ${datalist[symbol].High}`);
			$('#LastPrice').html(datalist[symbol].LastPrice.toFixed(2));
			$('#Open').html(datalist[symbol].Open.toFixed(2));
			$('#MarketCap').html(milOrBil(datalist[symbol].MarketCap));
			$('#Volume').html(milOrBil(datalist[symbol].Volume));

			let time = datalist[symbol].Timestamp.split(' ')[3];
			$('#Timestamp').html(`As of ${timeParse(time)}`);


		} else if(dataList[symbol] !== null) {
			// set symbol to the input value, uppercase
			symbol = $('#stockSymbol').val().toUpperCase();
			data = dataList[symbol];

			// set all the values to the html elements
			$('h1').html(data.Name);
			$('#ChangeAndPercent').html(`${data.Change.toFixed(2)} (${data.ChangePercent.toFixed(2)}%)`);
			$('#Range').html(`${data.Low} - ${data.High}`);
			$('#LastPrice').html(data.LastPrice.toFixed(2));
			$('#Open').html(data.Open.toFixed(2));

			// call the milOrBil() function to append the correct letter to the end of the number
			$('#MarketCap').html(milOrBil(data.MarketCap));
			$('#Volume').html(milOrBil(data.Volume));

			// split the date/time and set the time variable. call timeParse() function to convert from 24 hour to 12 hour format.
			let time = data.Timestamp.split(' ')[3];
			$('#Timestamp').html(`As of ${timeParse(time)}`);

			// clear the text input box
			$('#stockSymbol').val("");
		}

	})

});



// this function appends the appropriate value (M for millions, B for billions, K for thousands) at the end of a value.
function milOrBil(val) {
		// billions
    return Math.abs(Number(val)) >= 1.0e+9
    ? (Math.abs(Number(val)) / 1.0e+9).toFixed(1) + "B"
    // millions
    : Math.abs(Number(val)) >= 1.0e+6
    ? (Math.abs(Number(val)) / 1.0e+6).toFixed(1) + "M"
    // thousands
    : Math.abs(Number(val)) >= 1.0e+3
    ? (Math.abs(Number(val)) / 1.0e+3).toFixed(1) + "K"
    : (Math.abs(Number(val))).toFixed(1);
}


// this function takes the time from the timestamp and translates it from 24 hour format to 12 hour format.
function timeParse(time) {
	let splt = time.split(':');

	if(splt[0] === "00") {
		return `12:${splt[1]}:${splt[2]} AM`
	} else if(splt[0] > 0 && splt[0] < 12) {
		return `${splt[0]}:${splt[1]}:${splt[2]} AM`
	} else {
		let hr = splt[0] - 12;
		return `${hr}:${splt[1]}:${splt[2]} PM`
	}
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes a positive integer and return its factorial.

function factorial(z) {
	if (z < 0) return;
  	if (z === 0) return 1;
  	return z * factorial(z - 1);
}

/*
better solution:

function factorial(z) {
	return z ? (z * factorial(z - 1)) : 1
}
*/

// tests
Test.assertEquals(factorial(4), 24)
Test.assertEquals(factorial(0), 1)
Test.assertEquals(factorial(9), 362880)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str) {
	return str === str.split('').sort().join('');
}

// tests
Test.assertEquals(isInOrder('abc'), true)
Test.assertEquals(isInOrder('edabit'), false)
Test.assertEquals(isInOrder('xyz'), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
	return Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) <= 1
}

// tests
Test.assertEquals(middleEarth(['Frodo', 'Sam', 'Gandalf']), true)
Test.assertEquals(middleEarth(['Orc', 'Sam', 'Gandalf', 'Frodo']), false)
Test.assertEquals(middleEarth(['Sam', 'Frodo', 'Saruman']), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
	isPrefix should return true if it begins with the prefix argument.
	isSuffix should return true if it ends with the suffix argument.
	Otherwise return false.
*/

function isPrefix(word, prefix) {
	return word.startsWith(prefix.slice(0, prefix.length-1));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.slice(1));
}

// tests
Test.assertEquals(isPrefix('automation', 'auto-'), true)
Test.assertEquals(isPrefix('superfluous', 'super-'), true)
Test.assertEquals(isSuffix('movement', '-scope'), false)
Test.assertEquals(isSuffix('vocation', '-logy'), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
  	let vowels = /[aeiou]/i;
	return str.toLowerCase().search(vowels);
}

// tests
Test.assertEquals(firstVowel("apple"), 0)
Test.assertEquals(firstVowel("string"), 3)
Test.assertEquals(firstVowel("STRAWBERRY"), 3)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
	If f returns the larger number, return the string f.
	If g returns the larger number, return the string g.
	If the functions return the same number, return the string neither.
*/

function whichIsLarger(f, g) {
  	return f() > g() ? 'f' :
	f() === g() ? 'neither' : 'g'
}

// tests
Test.assertEquals(whichIsLarger(()=>5, ()=>10),'g')
Test.assertEquals(whichIsLarger(()=>10, ()=>5),'f')
Test.assertEquals(whichIsLarger(()=>25, ()=>25),'neither')

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// A value is omnipresent if it exists in every subarray inside the main array. Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr, val) {
	for(let i=0 ; i<arr.length ; i++) {
	  return arr[i].includes(val);
	}
}

/*
better solution:

function isOmnipresent(arr, val) {
	return arr.every(x => x.includes(val));
}
*/

// tests
Test.assertEquals(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1), true)
Test.assertEquals(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6), false)
Test.assertEquals(isOmnipresent([[5], [5], [5], [6, 5]], 5), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.

Profit = Total Sales - Total Cost
*/

function profit(info) {
  	return Math.round((info.sellPrice * info.inventory) - (info.costPrice * info.inventory))
}

// tests
Test.assertEquals(profit({costPrice: 32.67, sellPrice: 45.00, inventory: 1200}), 14796)
Test.assertEquals(profit({costPrice: 0.1, sellPrice: 0.18, inventory: 259800}), 20784)
Test.assertEquals(profit({costPrice: 185.00, sellPrice: 299.99, inventory: 300}), 34497)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that calculates the factorial of a number recursively.

function factorial(n) {
	if(n < 2) {
		return 1;
	}
  	return n * factorial(n-1);
}

// tests
Test.assertEquals(factorial(5), 120)
Test.assertEquals(factorial(3), 6)
Test.assertEquals(factorial(1), 1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a function that returns true if the first array can be nested inside the second.
arr1 can be nested inside arr2 if:
	arr1's min is greater than arr2's min.
  	arr1's max is less than arr2's max.
*/

function canNest(arr1, arr2) {
	return (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) ? true : false;
}

// tests
Test.assertEquals(canNest([1, 2, 3, 4], [0, 6]), true)
Test.assertEquals(canNest([3, 1], [4, 0]), true)
Test.assertEquals(canNest([9, 9, 8], [8, 9, 10]), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 3600;
}

// tests
Test.assertEquals(howManySeconds(2), 7200)
Test.assertEquals(howManySeconds(10), 36000)
Test.assertEquals(howManySeconds(24), 86400)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

function sayHelloBye(name, num) {
	return num === 1 ? `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}` : `Bye ${name.charAt(0).toUpperCase() + name.slice(1)}`
}v

// tests
Test.assertEquals(sayHelloBye("jose", 1), "Hello Jose")
Test.assertEquals(sayHelloBye("barry", 1), "Hello Barry")
Test.assertEquals(sayHelloBye("jon", 0), "Bye Jon")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns a base 2 (binary) represetation of a base 10 (decimal) number. To convert is simple: ((2) means base 2 and (10) means base 10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

function binary(decimal) {
	return decimal.toString(2);
}

// tests
Test.assertEquals(binary(100), "1100100")
Test.assertEquals(binary(1), "1")
Test.assertEquals(binary(0), "0")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//

function bitwiseAND(n1, n2) {
	return n1 & n2;
}

function bitwiseOR(n1, n2) {
	return n1 | n2;
}

function bitwiseXOR(n1, n2) {
	return n1 ^ n2;
}

// tests
Test.assertEquals(bitwiseAND(7, 12), 4)
Test.assertEquals(bitwiseOR(7, 12), 15)
Test.assertEquals(bitwiseXOR(7, 12), 11)

Test.assertEquals(bitwiseAND(32, 17), 0)
Test.assertEquals(bitwiseOR(32, 17), 49)
Test.assertEquals(bitwiseXOR(32, 17), 49)

Test.assertEquals(bitwiseAND(13, 19), 1)
Test.assertEquals(bitwiseOR(13, 19), 31)
Test.assertEquals(bitwiseXOR(13, 19), 30)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to convert an array of percentages to their decimal equivalents.

function convertToDecimal(perc) {
	return perc.map(x => parseFloat(x) / 100);
}

// tests
Test.assertSimilar(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]), [0.33, 0.981, 0.5644, 1])
Test.assertSimilar(convertToDecimal(["45%", "32%", "97%", "33%"]), [0.45, 0.32, 0.97, 0.33])
Test.assertSimilar(convertToDecimal(["1%", "2%", "3%"]), [0.01, 0.02, 0.03])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
  	let cubed = nums.map(x => Math.pow(x, 3));
  	return nums.length < 1 ? 0 : cubed.reduce((a,b) => a + b);
}

// tests
Test.assertEquals(sumOfCubes([1, 5, 9]), 855)
Test.assertEquals(sumOfCubes([3, 4, 5]), 216)
Test.assertEquals(sumOfCubes([1, 1, 1]), 3)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given a word, write a function that returns the first index and the last index of a character. If the character does not exist in the word, return undefined.

function charIndex(word, char) {
	if(word.indexOf(char) > -1) return [word.indexOf(char), word.lastIndexOf(char)];
  	else return undefined;
}

// tests
Test.assertSimilar(charIndex('hello', 'l'), [2, 3])
Test.assertSimilar(charIndex('circumlocution', 'r'), [2, 2])
Test.assertSimilar(charIndex('circumlocution', 'i'), [1, 11])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

/*
better solution:

function indexShuffle(str) {
	const even = [...str].filter((char, i) => i % 2 === 0);
	const odd = [...str].filter((char, i) => i % 2);

	return [...even, ...odd].join('');
}

*/

function indexShuffle(str) {
	let arr = str.split('');
  	let evens = [];
  	let odds = [];

  	for(let i=0 ; i<arr.length ; i++) {
		if(i % 2 === 0) evens.push(arr[i]);
	  	else odds.push(arr[i])
	}

	let results = evens.concat(odds);
  	return results.join('');
}

// tests
Test.assertEquals(indexShuffle("abcdef"), "acebdf")
Test.assertEquals(indexShuffle("abababab"), "aaaabbbb")
Test.assertEquals(indexShuffle("it was a beautiful day"), "i a  euiu atwsabatfldy")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that moves all capital letters to the front of a word.

function capToFront(s) {
  return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
}

// tests
Test.assertEquals(capToFront("hApPy"), "APhpy")
Test.assertEquals(capToFront("moveMENT"), "MENTmove")
Test.assertEquals(capToFront("aPPlE"), "PPEal")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Write a function that returns the number of users in a chatroom based on the following rules:
	If there is no one, return "no one online".
	If there 1 person, return "[user1] online".
	If there are 2 people, return [user 1] and [user 2] online".
	If there are n>2 people, return the first two names and add "and n-2 more online".
		For example, if there are 5 users, return: "[user1], [user2] and 3 more online"
*/

function chatroomStatus(users) {
	switch (users.length) {
	  	case 0:
			return 'no one online';
		case 1:
			return `${users[0]} online`;
			break;
	  	case 2:
			return `${users[0]} and ${users[1]} online`;
			break;
		default:
			return `${users[0]}, ${users[1]} and ${users.length-2} more online`;
	}
}

// tests
Test.assertSimilar(chatroomStatus([]), "no one online")
Test.assertSimilar(chatroomStatus(["becky325"]), "becky325 online")
Test.assertSimilar(chatroomStatus(["becky325", "malcolm888"]), "becky325 and malcolm888 online")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write two functions:
// 		toArray(), which converts a number to an array of its digits.
// 		toNumber(), which converts an array of digits back to its number.

function toArray(num) {
	let arr = num.toString().split('');
  	let result = arr.map(x => Number(x));
  	return result;
}

function toNumber(arr) {
  	let result = arr.join('');
	return Number(result);
}

// tests
Test.assertSimilar(toArray(235), [2, 3, 5])
Test.assertSimilar(toArray(19), [1, 9])
Test.assertSimilar(toArray(0), [0] )
Test.assertEquals(toNumber([2, 3, 5]), 235)
Test.assertEquals(toNumber([1, 9]), 19)
Test.assertEquals(toNumber([0]), 0)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that transforms all letters from [a,m] to 0 and letters from [n,z] to 1 in a string.

function convertBinary(str) {
	let am = /[a-m]/gi;
  	let nz = /[n-z]/gi;

  	return str.replace(am,0).replace(nz,1);
}

// tests
Test.assertEquals(convertBinary("house"), "01110")
Test.assertEquals(convertBinary("excLAIM"), "0100000")
Test.assertEquals(convertBinary("moon"), "0111")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
	return str.split('').map((c, i) => str.slice(0, i+1) );
}

// tests
Test.assertSimilar(spelling("bee"), ['b', 'be', 'bee'])
Test.assertSimilar(spelling("cake"), ['c', 'ca', 'cak', 'cake'])
Test.assertSimilar(spelling("happy"), ['h', 'ha', 'hap', 'happ', 'happy'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

function joinPath(portion1, portion2) {
	return `${portion1.replace('/','')}/${portion2.replace('/','')}`;
}

// tests
Test.assertEquals(joinPath("portion1", "portion2"), "portion1/portion2")
Test.assertEquals(joinPath("portion1/", "portion2"), "portion1/portion2")
Test.assertEquals(joinPath("portion1", "/portion2"), "portion1/portion2")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 60;
}

// tests
Test.assertEquals(convert(6), 360)
Test.assertEquals(convert(4), 240)
Test.assertEquals(convert(8), 480)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two integers and checks if they are equal.

function isEqual(num1, num2) {
	return num1 === num2;
}

// tests
Test.assertEquals(isEqual(2, 2), true)
Test.assertEquals(isEqual("1", 5), false)
Test.assertEquals(isEqual(88, 88), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 60;
}

// tests
Test.assertEquals(convert(6), 360)
Test.assertEquals(convert(4), 240)
Test.assertEquals(convert(8), 480)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes two integers hours minutes and converts them to seconds.

function convert(hours, minutes) {
	return (hours*60 + minutes) * 60;
}

// tests
Test.assertEquals(convert(1, 0), 3600)
Test.assertEquals(convert(1, 3), 3780)
Test.assertEquals(convert(0, 30), 1800)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
	return a % b === 0;
}

// tests
Test.assertEquals(dividesEvenly(98, 7), true)
Test.assertEquals(dividesEvenly(87, 49), false)
Test.assertEquals(dividesEvenly(34, 14), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes width and height and finds the perimeter of a rectangle.

function findPerimeter(height, width) {
	return height*2 + width*2
}

// tests
Test.assertEquals(findPerimeter(6, 7), 26)
Test.assertEquals(findPerimeter(20, 10), 60)
Test.assertEquals(findPerimeter(2, 9), 22)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

function addUpTo(n) {
  	let arr = [];

	for(let i=1 ; i<n+1 ; i++) {
		arr.push(i);
	}

  	return (n > 0 ? arr.reduce((a,cv) => a+cv) : 0);
}

// tests
Test.assertEquals(addUpTo(3), 6, "Example #1");
Test.assertEquals(addUpTo(10), 55, "Example #2");
Test.assertEquals(addUpTo(0), 0);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a function that takes a string as an argument. The string is a random name.
	If the last character of the name is an "n", return true.
	If the last character of the name is not an "n", return false.
*/

function isLastCharacterN(word) {
  	return word.endsWith('n');
}

// tests
Test.assertEquals(isLastCharacterN("Aiden"), true)
Test.assertEquals(isLastCharacterN("Roxy"), false)
Test.assertEquals(isLastCharacterN("Bert"), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes the age and return the age in days.

function calcAge(age) {
	return age*365;
}

// tests
Test.assertEquals(calcAge(10), 3650)
Test.assertSimilar(calcAge(0), 0)
Test.assertSimilar(calcAge(73), 26645)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(n){
  return (n > 0 ? n * -1 : n);
}

// tests
Test.assertEquals(returnNegative(4), -4)
Test.assertEquals(returnNegative(15), -15)
Test.assertEquals(returnNegative(-4), -4)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
function and(a, b) {
	return (a && b ? true : false);
}


// tests
Test.assertEquals(and(true, true), true)
Test.assertEquals(and(true, false), false)
Test.assertEquals(and(false, true), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
  	let count = 0;
  	for(let i=0 ; i<arr.length ; i++) {
		if(arr[i]) { count++; }
	}
	return count;
}

// better soultions
const countTrue = r => r.filter(Boolean).length

function countTrue(arr) {
	 return arr.filter(x => x == true).length;
}

// tests
Test.assertEquals(countTrue([true, false, false, true, false]), 2)
Test.assertEquals(countTrue([false, false, false, false]), 0)
Test.assertEquals(countTrue([]), 0)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
	return voltage * current;
}

// tests
Test.assertEquals(circuitPower(110, 3), 330)
Test.assertEquals(circuitPower(230, 10), 2300)
Test.assertEquals(circuitPower(480, 20), 9600)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// regex for an empty string

const REGEXP = /^\s*$/;

// tests
const str = "";

const validate = (REGEXP) => {
	 return function testReg(str) {
		 return REGEXP.test(str);
	 }
}

const testExp = validate(REGEXP)
Test.assertSimilar(testExp(str), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
	return (a + b < 100 ? true : false);
}

// tests
Test.assertEquals(lessThan100(5, 57), true)
Test.assertEquals(lessThan100(77, 30), false)
Test.assertEquals(lessThan100(0, 59), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
  	return [arr1[0], ...arr2, arr1[1]];
}

// tests
Test.assertSimilar(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
Test.assertSimilar(tuckIn([15, 150], [45, 75, 35]), [15, 45, 75, 35, 150])
Test.assertSimilar(tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]), ["bottom", "tomatosauce", "vegetables", "cheese", "topping"])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

function isFirstSuperior(arr1, arr2) {
  	return arr1.join('') > arr2.join('');
}

// tests
Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true)
Test.assertEquals(isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']), false)
Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
	return function() {
		return str;
	}
}
// better solutions
const redundant = str => () => str;

function redundant(str) {
	return () => str;
}

// tests
const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

Test.assertEquals(f1(), "apple")
Test.assertEquals(f2(), "pear")
Test.assertEquals(f3(), "")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
	The wanted word is in lowercase.
	The crowd of letters is all in uppercase.
	Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
*/

function detectWord(str) {
	const found = str.match(/[a-z]/g);
  	return found.join('');
}

// better solution
const detectWord = str => str.replace(/[A-Z]/g, '');

// tests
Test.assertEquals(detectWord("UcUNFYGaFYFYGtNUH"), "cat")
Test.assertEquals(detectWord("bEEFGBuFBRrHgUHlNFYaYr"), "burglar")
Test.assertEquals(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"), "embezzlement")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.

The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation.

setTimeout is a browser API that is very commonly used in tutorials to represent async operations. After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.

Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.
*/

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("edabit")
  }, 1000)
})

// tests
let prom = promise.then((err, res) => {
	if(err) { return err }
	return res
})

prom.then((res) => {
	Test.assertEquals(typeof res, "string", "The promise needs resolve a string." )
})

Test.assertEquals(promise, promise)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.
*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
	  	let outcome;
	  	if(this.age > other.age) { outcome = 'younger than';  }
	  	else if(this.age < other.age) { outcome = 'older than'; }
	  	else { outcome = 'the same age as';}

	  	return `${other.name} is ${outcome} me.`;
	}
}

// tests
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

Test.assertEquals(p1.compareAge(p2), "Joel is older than me.")
Test.assertEquals(p1.compareAge(p3), "Lily is the same age as me.")

Test.assertEquals(p2.compareAge(p1), "Samuel is younger than me.")
Test.assertEquals(p2.compareAge(p3), "Lily is younger than me.")

Test.assertEquals(p3.compareAge(p1), "Samuel is the same age as me.")
Test.assertEquals(p3.compareAge(p2), "Joel is older than me.")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*
The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...
*/

function signYourName(obj) {
	Object.seal(obj);

	// DON'T CHANGE OR REMOVE THE LINES BELOW //
  	obj.yourSignature = "Whatever";
  	obj.spouseSignature = "Nice Try"
  	return obj;
}

// tests
Test.assertSimilar(signYourName({yourSignature: ""}), {yourSignature: "Whatever"})

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that will take a HEX number and returns the binary equivalent (as a string).

function toBinary(num) {
	return (num >>> 0).toString(2);
}

// tests
Test.assertEquals(toBinary(0xFF), "11111111")
Test.assertEquals(toBinary(0xAA), "10101010")
Test.assertEquals(toBinary(0xFA), "11111010")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
