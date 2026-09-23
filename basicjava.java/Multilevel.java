class HeadMaster
{
    void show()
    {
        System.out.println("headmaster class");
    }
}
class Teacher extends  HeadMaster
{
    void show()
    {
        super.show();
        System.out.println("Teacher class");
    }
}

class Students extends Teacher
{
    void show()
    {
        super.show();
        System.out.println("Students class");        
    }
}
public class multilevel {
    public static void main(String[] args) {
            Students s=new Students();
            s.show();
    }
}
