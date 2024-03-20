// this keyword is used to reference to the object where it is used.
//(the object depends on the immediate context)
// person.name = this.name;


person = {
    name: 'himanshu',
    favFood: 'tehri',
    //sayHello: function(){console.log(`hi i am ${name}`)} //will not show anything since this method is unaware of the name to be defined in it
    sayHello: function(){console.log(`hi i am ${this.name}`)} //we can use person.name and it will work the same
    //this keyword will not work with arrow function because in that situation this will reference to the window object
}

person.sayHello();