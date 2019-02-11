<!-- Create a function that takes an array of numbers and returns the smallest number in the set. -->

function findSmallestNum($arr) {
 	$minVal = min($arr);
	return $minVal;
}

<!-- tests -->
class SmallestNumber extends TestCase
{
    /**
     * @dataProvider exampleProvider
     */
    public function test($haystack, $expected)
    {
        $this->assertSame($expected, findSmallestNum($haystack));
    }

    public function exampleProvider()
    {
        return [
          [[34, 15, 88, 2], 2],
          [[34, -345, -1, 100], -345],
          [[-76, 1.345, 1, 0], -76],
          [[0.4356, 0.8795, 0.5435, -0.9999], -0.9999],
          [[7, 7, 7], 7],
          [[4, 6, 1, 3, 4, 5, 5, 1], 1],
          [[-4, -6, -8, -1], -8],
          [[54, 76, 23, 54], 23],
          [[100], 100],
          [[0, 1, 2, 3, 4, 5], 0]
        ];
    }
}

<!--  -->



<!-- tests -->





































<!-- template -->
<!--  -->



<!-- tests -->
