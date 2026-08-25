
import java.util.Scanner;
public class GetInput
{
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter your name:");
        String name=scan.next();
        System.out.println("your name is:"+ name);
        scan.close();
    }
}