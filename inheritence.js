//inheritance allows a new class to inheriet properties and methods from an existing class (parent -> child)
//helps with code resability

class Animal{  //parent class
    alive = true;

    eat(){
        console.log(`${this.name } is eating`);
    } 

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Dog extends Animal{ //dog is child class taking properties of animal
    name = 'dog';
}

class Fish extends Animal{
    name = 'fish';
}


const bruno = new Dog();
const nemo = new Fish();
console.log(bruno.alive);
bruno.eat();
bruno.sleep();

