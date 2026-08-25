
import java.util.Scanner;

public class EOCS {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a  number:");
        long n=scan.nextLong();
        long seven=0,sodd=0,ceven=0,codd=0,edis=0,odis=0;
        long te=1,to=1;
        while(n!=0)
        {
            long rem=n%10;
            if(rem%2==0)
            {
                seven=seven+rem;
                ceven++;
                //edis=edis*10+rem;
                edis=edis+rem*te;
                te=te*10+rem;

            }
            else
            {
                sodd=sodd+rem;
                codd++;
               // odis=odis*10+rem;
               edis=edis+rem*to;
               to=to*10+rem;

            }
            n=n/10;
        }
        System.out.println("display even number:"+edis);
        System.out.println("sum of even digits"+seven);
        System.out.println("even count:"+ceven);
        System.out.println("display odd number:"+odis);
        System.out.println("sum of odd digits"+sodd);
        System.out.println("odd count:"+codd);
        scan.close();
    }
}
