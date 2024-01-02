console.log("hello");

// variables (a box where you save 
// something and give it a name)

// variables are created with "var":

var myName = "Anette";
console.log(myName); // Output : Anette

let age = 31;
console.log(age); // Output: 31

const MAKE = "BMW";
console.log(MAKE); // Output: BMW

// Data Types

let greeting = "Hello, World!";
console.log(typeof greeting);

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // Output: boolean

let someVar;
console.log(typeof someVar); // Output: undefined

let emptyValue = null;
console.log(typeof emptyValue); // Output: null / object

// object
// A viariable we can group loads of elements in

let person = {
    firstName: "Hesham",
    lastName: "El Masry",
    age: 31
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

let car = {
    carBrand: "Volvo",
    carYear: 1992,
    carCondition: "used",
    carPrice: 10000,
};

console.log(car);
console.log(car.carBrand);
console.log(car.carYear);
console.log(car.carCondition);
console.log(car.carPrice);

// Write this in a console:
// I have a Volvo, it is from 1992 and used. 
// The price is 10.000.

console.log("I have a " 
+ car.carBrand + ", it is from " 
+ car.carYear + " and " 
+ car.carCondition+ ". The price is " 
+ car.carPrice + " kroner");

console.log(`I have a 
${car.carBrand} from 
${car.carYear} and it is 
${car.carCondition}. The price is 
${car.carPrice}`);

console.log(car["carBrand"]);

// Array

let colors = [
    "Red", "Green", "Blue"
];

let random = [
    55656, // 0
    "Green", // 1
    { name: "Hesh", age: 31}, // 2
    ["boy", "girl", "whatever"] // 3
];

console.log(random[0]); // first item in array

console.log(random[1]); // second item in array


// Type conversion

let year = "1992"; // String

// from string to number

let convertedYear = parseInt(year);

console.log(year);
console.log(typeof year);
console.log(typeof convertedYear);


// Convert from a number to a string

let num = 123;

console.log(num);
console.log(typeof num);

console.log(num.toString());

let convertedNumber = num.toString();

console.log(convertedNumber);
console.log(typeof convertedNumber);