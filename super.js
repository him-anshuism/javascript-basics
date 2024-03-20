// supereyword is used in classes to call the contructor or access the properties and methods of a parent(superclass)
//     this = this object
//     super = this parent

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }

    move(speed){
console.log(`the ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);   //used to call parents constructor
        this.runSpeed=runSpeed;
    }

    run(){
        console.log(`the ${this.name} can run`)
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }

    swim(){
        console.log(`the ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish",1,50);
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);
// rabbit.run();
// fish.swim();

