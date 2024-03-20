//static keyword that defines properties or methods that belongs to a class itself
//rather than the objects created from that class (class owns anythings static, not the objects)
//(we dont need to create any object for static methods or properties)

// class MathUtil{
//     static PI = 3.14159; //static property

//     static getDiameter(radius){
//         return radius ** 2; //squaring without using Math function
//     }

//     static getCircumference(radius){
//         return 2*this.PI*radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getCircumference(3).toFixed(2));

//**************************************************************************************************************


class User{
    static userCount=0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello ${this.username}`);
    }

    static getUsersCount(){
        console.log(`total users ${User.userCount}`);
    }
}

const user1 = new User("Him");
// console.log(user1.username);
// console.log(user1.userCount);  //it shows undefined because user doesnt have userCount as a property
// //since it is static hence it cant be called by any object created by a class but only belongs to the class
// console.log(User.userCount); //it can only be called by using a class name
 user1.sayHello();
 User.getUsersCount();



