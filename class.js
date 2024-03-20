// class (ES6 feature) provides a more strunctured and cleaner way to work with objects compared to traditional constructore functionality
// ex.. static keyword, encapsulation, inheritence

//creating a constructor 
/*
function Product(name,price){
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }

    this.calculateTotal = function(salesTax){
        return this.price + (this.price* salesTax)
    }
}

const salesTax = 0.05;
const prod1 = new Product("Shirt", 19.99);

prod1.displayProduct();
prod1.calculateTotal(salesTax);
*/

//creating this with a class

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }
    calculateTotal = function(salesTax){
        return this.price + (this.price* salesTax);
    }
}
const salesTax = 0.05;
const prod1 = new Product("shirt", 19.99);
prod1.displayProduct();
console.log(prod1.calculateTotal(salesTax));
