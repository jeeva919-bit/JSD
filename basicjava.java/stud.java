 import java.util.Scanner;
public class stud {
    int rno;
    String sname;
    float mark;
    Scanner scan=new Scanner(System.in);
    void getdata()
    {
        System.out.println("Enter rno sname and mark:");
        rno=scan.nextInt();
        sname=scan.next();
        mark=scan.nextFloat();
    }
    void dis()
    {
        System.out.println(rno+"   "+sname+"     "+mark);
    }
    public static void main(String args[])
    {
        stud s1=new stud();
        stud s2=new stud();
        stud s3=new stud();
        s1.getdata();
        s2.getdata();
        s3.getdata();
        s1.dis();
        s2.dis();
        s3.dis();
    }
}

