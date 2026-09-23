public class Emp1 {
    int eno1;
    String ename;
    float esal;
    Emp1(int eno,String ename,float esal)
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
        
        Emp1 e1=new Emp1(1001,"sathya",77556.10f); // constructor
        Emp1 e2=new Emp1(1002,"pavya",97556.9f); // constructor
        e1.show(); // normal method
        e2.show(); // normal method
    }

}
