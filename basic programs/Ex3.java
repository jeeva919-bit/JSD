
import java.util.Scanner;

public class Ex3 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a value:");
        int n=sc.nextInt();
        int sum=0;
        for(int i=1;i<=n;i++)
        {
            if(i%2==1){
                sum=sum+i;
                System.out.print(i+"+");
            }
            else{
                sum=sum+i;
            System.out.print(i+"+");
            }
            
        }
        System.out.println("\b="+sum);
        sc.close();
    }
}
