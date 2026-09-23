
/*   import java.util.Scanner;
public class studArray {
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
        Scanner scan=new Scanner(System.in);
        System.out.print("Enter total no.of student:");
        int n=scan.nextInt();
        stud s[]=new Stud[n];
        for(int i=0;i<n;i++);
        {
            s[i]=new Stud();
            s[i].getdata();
        }
        for(int i=0;i<n;i++);
        {
            s[i].dis();
        }
        //fail student list(marks<50)
        System.out.println("........fail students list.......");
        for(int i=0;i<n;i++);
        {
            if(s[i].marks<50)
                s[i].dis();
        }
    }
}*/



 import java.util.Scanner;
public class studArray {
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
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter total no.of student:");
        int n = scan.nextInt();
        studArray[] s = new studArray[n];

        for (int i = 0; i < n; i++) {
            s[i] = new studArray();
            s[i].getdata();
        }

        for (int i = 0; i < n; i++) {
            s[i].dis();
        }

        //pass student list (marks > 49)
        System.out.println("/n");
        System.out.println("........pass students list.......");
        for (int i = 0; i < n; i++) {
            if (s[i].mark > 49)
                s[i].dis();
        }
    }
}


