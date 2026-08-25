
import java.util.Scanner;

public class WhileTask1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter n value:");
        long n=sc.nextLong();
        n = Math.abs(n);

        int evenCount = 0;
        int oddCount = 0;
        long evenSum = 0;
        long oddSum = 0;

        if (n == 0) {
            evenCount = 1;
        } else {
            while (n != 0) {
                long e = n % 10;
                if (e % 2 == 0) {
                    evenCount++;
                    evenSum += e;
                } else {
                    oddCount++;
                    oddSum += e;
                }
                n = n / 10;
            }
        }


        System.out.println("Even digit count: " + evenCount);
        System.out.println("Odd digit count: " + oddCount);
        System.out.println("Sum of even digits: " + evenSum);
        System.out.println("Sum of odd digits: " + oddSum);
        System.out.println("Total digit count: " + (evenCount + oddCount));
        System.out.println("Total digit sum: " + (evenSum + oddSum));
    }
    
}
