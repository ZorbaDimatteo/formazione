package eserciziojava;

abstract class Animals {
    int legs;
    boolean hasWings;
    boolean hasLegs;
    String race;

    public void setRace(String r) {
        race = r;
    }

    public String getRace() {
        return race;
    }

    public int getLegs() {
        return legs;
    }
}

interface Living {
    public void sleep();
    public void eat();
    public void animalSound();
}

class Dogs extends Animals implements Living {
    private int legs = 4;
    private boolean hasWings = false;
    private boolean hasLegs = true;
    private String race;

    public void animalSound() {
        System.out.println("BAU BAU");
    }

    public void eat() {
        System.out.println("CHOMP CHOMP CHOMP");
    }

    public void sleep(){
        System.out.println("...zZz...Zzz...*sbuff*...zZz");
    }
}

class Birds extends Animals implements Living{
    private int legs = 2;
    private boolean hasWings = true;
    private boolean hasLegs = true;
    private String race;

    public void animalSound() {
        System.out.println("CIP CIP CIP");
    }

    public void eat() {
        System.out.println("TIC TIC");
    }

    public void sleep(){
        System.out.println("...zZz...*piupiu*...Zzz...*piupiu*");
    }
}
