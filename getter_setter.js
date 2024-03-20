//getters = special methods that makes a property readable
//setters = special method that makes a property writable

//validate and modify a value when reading/writing a property

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// //we can assign any value type inside this functions, example
// const p1 = new Person(123,"fhd","pizza");
// console.log(p1.lastName);
// console.log(p1.firstName);
// console.log(p1.age);
//so firstName is in number which is invalid hence to solve this type of problems we use getter and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        typeof newFirstName === "string" && newFirstName.length >0 ? this._firstName = newFirstName : console.error("name Error");
    }
    set lastName(newLastName){
        typeof newLastName === "string" && newLastName.length >0 ? this._lastName = newLastName : console.error("name Error");
        
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
}

const p1 = new Person("123","fhd","pizza");
  
console.log(p1.lastName);
console.log(p1.firstName);
 