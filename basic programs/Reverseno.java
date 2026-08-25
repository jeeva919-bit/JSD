
import java.util.Scanner;

public class Reverseno {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter n value:");
        int n=scan.nextInt();
        int r=0;
        while(n!=0)
        {
            int rem=n%10;
            r=r*10+rem;
            n=n/10;
        }
        System.err.println("Reverse of the nummber is:"+r);
        scan.close();
    }
    
}
