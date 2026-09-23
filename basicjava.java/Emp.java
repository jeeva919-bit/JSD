public class Emp {
    Emp()
    {
        System.out.println("constructor called this is default or null constructor");
    }
    void show()
    {
        System.out.println("this is normal method");
    }
    public static void main(String[] args) {
        Emp e1=new Emp(); // constructor
        e1.show(); // normal method
    }

}
