public class Emp2 {
    int eno1;
    String ename;
    float esal;
    Emp2(int eno,String ename,float esal)
    {
        System.out.println("arg or parametarazied constructor");
        eno1=eno;
        this.ename=ename;
        this.esal=esal;
    }
    void show()
    {
        System.out.println("this is normal method");
        System.out.println(eno1+"  "+ename+"   "+esal);
    }
    public static void main(String[] args) {
        
        Emp2 e1=new Emp2(1001,"Jeeva",77556.10f); // constructor
        Emp2 e2=new Emp2(1002,"Nishanth",97556.9f); // constructor
        e1.show(); // normal method
        e2.show(); // normal method
        e1=e2;//copy
        e1.show();
        e2.show();
    }

}

