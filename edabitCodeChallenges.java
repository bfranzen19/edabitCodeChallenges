// profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// All you have to do is type return true; between the curly braces and click the Check button. If everything went according to plan, the button will turn red and say SUBMIT FINAL. Click it and see what happens.
public class Program {
    public static boolean returnTrue() {
      return true;
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ProgramTest {

    @Test
    public void test1(){
        assertEquals(true, Program.returnTrue());
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a method that takes an integer as its only argument and returns true if it's less than or equal to zero, otherwise return false.
public class Program {
    public static boolean lessThanOrEqualToZero(int num) {
    	if (num <= 0) {
			return true;
		} else {
			return false;
		}
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ProgramTest {

    @Test
    public void test1(){
        assertEquals(false, Program.lessThanOrEqualToZero(5));
    }

    @Test
    public void test2(){
        assertEquals(true, Program.lessThanOrEqualToZero(0));
    }

    @Test
    public void test3(){
        assertEquals(true, Program.lessThanOrEqualToZero(-5));
    }

    @Test
    public void test4(){
        assertEquals(false, Program.lessThanOrEqualToZero(1));
    }

    @Test
    public void test5(){
        assertEquals(false, Program.lessThanOrEqualToZero(2));
    }

    @Test
    public void test6(){
        assertEquals(false, Program.lessThanOrEqualToZero(10000));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//


// tests




























/*                 template              */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//


// tests
