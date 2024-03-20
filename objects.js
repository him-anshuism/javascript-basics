// object = A collection of related properties and/or methods.
// Can represent real world objects(people, product, places)

    // object = {key:value, function()}

//creating object with key:value pairs
    // person = {
    //     firstName: "himanshu",
    //     middleName: "prakash",
    //     lastName: "mishra",
    //     age:23,
    //     isEmployed: false
    // }
    // console.log(person.firstName + person.middleName+ person.lastName);

//creating object with a function and key-value pair

person = {
    firstName: "himanshu", //these are all properties of the object
    middleName: "prakash",
    lastName: "mishra",
    age:23,
    isEmployed: false,
    sayHello: function(){console.log("hello")},  //now it is a method inside an object 
    eat: ()=> console.log("i am eating"),
}
person.sayHello();
person.eat();