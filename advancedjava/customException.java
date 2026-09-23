package advancedjava;

import java.util.Scanner;

class AgeException extends Exception
{
    Scanner scan=new Scanner(System.in);

    public AgeException()//default constructor
     {
        System.out.println("Enter age:");
        int age = scan.nextInt();
        if(age>=18);
        {
            System.out.println(e.tostirng());

        }
        else
        {
            try{
            throw new Execption("below 18 age is not accepted to vote");
            }
            catch(Execption e)
            {
                System.out.println(e.tostring());
            }
            new AgeException();
        }
    }
}
public Class CustomExecption{
    public static void main(string[]args){
        new AgeException();
    }
}
