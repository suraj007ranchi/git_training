import java.util.*;
class rectangle{
    public static void main(String abc[]){
        int l,b;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter value for l and b");
        l=sc.nextInt();
        b=sc.nextInt();
        area(l,b);
        perimeter(l,b);
    }

    public static void area(int l,int b){
        System.out.println("area of rect = "+(l*b));
        return l*b;
    }

    public static void perimeter(int l,int b){
        System.out.println("perimeter of rect = "+2*(l+b));
    }
    
}
