import java.util.Scanner;

public class Automobile {
    private static int count = 0;
    private String make;
    private double price;
    private Tire tire;

    // Setters
    public void setMake(String m) {
        make = m;
    }

    public void setPrice(double p) {
        price = p;
    }

    public void setTire(Tire a) {
        tire = a;
    }

    //getters
    public String getMake() {
        return make;
    }

    public double getPrice() {
        return price;
    }

    public Tire getTire() {
        return tire;
    }

    //default constructor

    public Automobile() {
        this("No value", 0.0, new Tire());
    }
    //Constructor

    public Automobile(String ma, double pr, Tire ti) {
        this.make = ma;
        this.price = pr;
        this.tire = ti;
        this.count++;

    }


    public String toString() {

        return "Make" + make + "Price " + price + "Tire " + tire.toString();
    }

    static void count(){
        System.out.println(count);
    }
}



