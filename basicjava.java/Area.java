public class Area {
    // polymorphism : single name perform more than one operations
    Area(int a)
    {
        System.out.println("area of square:"+(a*a));
    }
    Area(int l,int b)
    {
        System.out.println("area of rectangle:"+(l*b));
    }
    Area(float r)
    {
        System.out.println("area of circle:"+(Math.PI*r*r));
    }
    public static void main(String[] args) {
        new Area(2.2f);
        new Area(4);
        new Area(5,6);
    }
    
}
