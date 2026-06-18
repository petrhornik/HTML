class Pet {
    
    constructor(name, age){
        console.log("V cousnturtoru u class Pet! Importováno do subclass")
        this.name = name;
        this.age = age;    
    };

    eat(){
        return `${this.name} is eating rignt now!!`;
    };
}

class Cat extends Pet{
    constructor(name, age, lives=9){
        console.log("V cousnturtoru u (sub)class Cat!");
        super(name, age) //import z Pet (nadřazené)
        this.lives = lives;
    }
    meow(){
        return "MEOOOOOOOOW";
    };

}

const catNum1 = new Cat("Leonardo", 3);

class Dog extends Pet{ //import obsahu z Pet (nadřazené class)

    bark(){
        return "WOOOOOOF";
    };

    eat(){
        return `${this.name} nechce jíst!`
    }
}

const dogNum1 = new Dog ("Max", 12);