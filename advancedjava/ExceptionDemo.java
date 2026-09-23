package advancedjava;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try{
            System.out.println("Enter 2 numbers");
            int num1 = scanner.nextInt();
            int num2 = scanner.nextInt();
            int result = num1 % num2;
            System.out.println("Result: " + result);
            System.out.print("Enter Size of Array : ");
            int size = scanner.nextInt();
            int[] arr = new int[size];
            System.out.println("Array Size Accepted");
            int brr[] = {11,22,33};
            System.out.println("2rd Element of Array : " + brr[2]);
            
        }
        catch (ArithmeticException e) {
            System.out.println("Error: Arithmetic Exception");
       
        }
        catch (InputMismatchException e) {
            System.out.println("Error: Don't type text, type numbers only");
        }
        catch (NegativeArraySizeException e) {
            System.out.println("Error: Array Size can't be negative");
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array Index Out of Bounds");
        }
        finally {
            scanner.close();
        }
}
}