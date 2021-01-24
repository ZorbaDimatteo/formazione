package eserciziojava;

abstract class Animals {
    int legs;
    boolean hasWings;
    boolean hasLegs;
    String race;

    abstract void animalSound();

    public void sleep() {
        System.out.println("Zzz");
    }

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

class Dogs extends Animals {
    private int legs = 4;
    private boolean hasWings = false;
    private boolean hasLegs = true;
    private String race;

    public void animalSound() {
        System.out.println("BAU BAU");
    }
}

class Birds extends Animals {
    private int legs = 2;
    private boolean hasWings = true;
    private boolean hasLegs = true;
    private String race;

    public void animalSound() {
        System.out.println("CIP CIP CIP");
    }
}
