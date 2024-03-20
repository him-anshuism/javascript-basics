//nested objects = object inside any object

// const person ={
//     fullName: "Himanshu mishra",
//     age: 23,
//     isStudent: true,
//     hobbies: ["singing", "cooking", "sleeping"],
//     address: {
//         street: "xyz",
//         city: "gonda",
//         counrty: "India"
//     }
// }

// // console.log(person.fullName);
// // console.log(person.age);
// // console.log(person.isStudent);
// // console.log(person.address.city); //to go inside the nested object we will use dot again.

// //to access the full content we will use:
// for(const i in person.address){
//     console.log(person.address[i]);
// }

//-----------example2---------------
class Person{
    constructor(name, age, ...address){   //using ...address to take multiple values all at once
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}



class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("himanshu", 23, "xyz","gonda", "India");
 console.log(person1.name);
 console.log(person1.age);
 console.log(person1.address);