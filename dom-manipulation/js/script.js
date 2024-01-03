// 1. select the heading h2

// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with 

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);


// 3. Select element with id #list using querySelector

const list = document.querySelector("#list");
console.log(list);


// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);


// 5. Select single li

const listItem = document.querySelector("li");
console.log(listItem);


// 6. Select all li

const listItems = document.querySelectorAll("li");
console.log(listItems);


// 7. select the h1 and change color to red

const heading1 = document.querySelector("h1");
console.log("first heading 🤩: ",heading1);

console.dir(heading1);

heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";

// 8. change the background color of the heading1 variable
heading1.style.backgroundColor = "yellow";

// 9. Select the empty div and add the class of .container to it
const myDiv = document.querySelector("div");
console.log("MyDiv: ",myDiv);

console.dir(myDiv);

myDiv.classList.add("container");

//10. change the heading text to "Hei Ingrid og Hei Line"  

heading1.textContent = "Hei Ingrid og Hei Line";

heading2.innerHTML = `<span class="green">Hei Ingrid og Hei Line</span>`;


//                          0         1        2        3         4
const myArrayOfNames = ["Hesham", "Kjetil", "Jonas", "Johnny", "Marius"];
console.log(myArrayOfNames[0]);
// when choosing array 0, the console will print "Hesham", and array 2 will give "Jonas"

console.log(myArrayOfNames[0]);
console.log(myArrayOfNames[1]);
console.log(myArrayOfNames[2]);
console.log(myArrayOfNames[3]);

console.log("This is the for-Array of names:");

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// i = 0
// 0 < 4
// i = 0 + 1 = 1

console.log(myArrayOfNames[0]);
console.log(myArrayOfNames[1]);
console.log(myArrayOfNames[2]);
console.log(myArrayOfNames[3]);
console.log(myArrayOfNames[4]);

console.log("Print from 1 to 100:");

for(let i = 1; i <= 100; i++){
    console.log(i);
}

// Arithmetic Operators

// = + ++ - -- * / %
// + and ++ are completely different

console.log("10 + 5 =");

// Addition (+)
// 10 + 5 = 15

let sum = 10 + 5;
console.log(sum);

// Subtraction (-)
// 10 - 5 = 5

let subtraction = 10 - 5;
console.log("10 - 5 = ",subtraction);

// Multiplication (*)
// 10 * 5 = 50

let multiplication = 10 * 5;
console.log("10 * 5 = ",multiplication);

// Division (/)
// 10 / 5 = 2

let division = 10 / 5;
console.log("10 / 5 = ",division);

// Modulus (%)
// 10 % 4 = 2 (the remainer) (whaaaaat?)

let modulus = 10 % 4;
console.log("10 % 4 = ",modulus);

// simple operators

// simple assignment

let a = 5; // a is 5

// addition assignment (+=)

let b = 10;

b += 5; // b is now 15
b = b + 5;

// subtraction assignment (-=)

let c = 15;
console.log("c is 15: ",c);

c -= 5; // c is now 10
console.log("c is now 10: ",c);

c = c - 5; // c is now 5
console.log("c is now 5: ",c);

// comparingson operators

// equal to (==)

let isEqual = (5 == "5");
// now, this will be "true"
console.log("isEqual: ",isEqual);

// When you use ==, it will only check the value, not the type

// strict equal (===)

let isStrictEqual = (5 === "5");
// now, this will be "false"
console.log("isStrictEqual: ",isStrictEqual);
// this happens because the value is the same, but the type is not
// three equals will compare the datatype.
// the datatype her was two different ones, a number and a string
// because of this, it will be false


// not equal (!=)

// 5 != 6 // true

let isNotEqual = (5 != 6);  // true
console.log("isNotEqual: ",isNotEqual);
// This (!=) does not check the datatype, only the value

// greater than (>)
// less than (<)
// greater than or equal to (>=)
// less than or equal to (<=)

// 10 > 5 // true (Is 10 greater than 5? Yes. True.)
let isGreaterThan = (10 > 5);
console.log("isGreaterThan: ",isGreaterThan);

// less than (<)
// 5 < 10 // true (Is 5 less than 10? Yes. True.)
let isLessThan = (5 < 10);
console.log("isLessThan: ",isLessThan);

// greater than or equal to (>=)
// 10 >= 10 // true (Is 10 greater than or equal to 10? Yes. True.)
let isGreaterThanOrEqual = (10 >= 10);
console.log("isGreaterThanOrEqual: ",isGreaterThanOrEqual);

// less than or equal to (<=)
// 5 <= 10 // true (Is 5 less than or equal to 10? Yes. True.)
let isLessThanOrEqual = (5 <= 10);
console.log("isLessThanOrEqual: ",isLessThanOrEqual);


// AND   //   0R
// &&    //   ||  (OPTION + 7)

//               true      true
let andResult = (5 > 3 && 10 > 5); // true
console.log("andResult: ",andResult);
// in an operation like this, you need both of them to be true
// the code will check one and one, and if one of them is false, it will be false

let andResult2 = (5 < 3 && 10 > 5); // false
console.log("andResult2: ",andResult2);

//  OR
//  ||
// if ONE of them is true, then it's true
// "I want chocolate, or banana, or ice cream"
// "They only have chocoloate? Yes please! I want chocolate!" = TRUE

let orResult = (5 > 3 || 10 > 5); // true
console.log("orResult: ",orResult);


// NOT (!)
// 5 > 10 // false
// !(5 > 10) // true
let notResult = !(5 > 10); // true
console.log("notResult: ",notResult);

(true && true) // true
(false && false && true) // false
(true && false) // false

(true || false || false) // true (if one of them is true, then it's true)