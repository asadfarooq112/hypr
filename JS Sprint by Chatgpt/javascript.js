// Recursion Factorial time

console.time('recursion');

let mult = 1;

let factorialMult = function (n) {
    if (n <= 0) {return mult};
    mult = mult * n;
    n--;
    return factorialMult(n);
}

console.log(factorialMult(7));


console.timeEnd('recursion');


//Iteration Factorial time

console.time('iteration');

let mult1 = 1;
let n1= 7;

for (let i = n1; i > 0; i--) {
    mult1 = mult1 * i;
}
console.log(mult1);


console.timeEnd('iteration');

//Global Execution Context:
// Created when the JavaScript code starts executing.
// Contains global object (window in browsers, global in Node.js) and this.

//Closure: If fuctions create (and return) other functions, Created function still has access to Parent function variables
//Also used for data privacy
//E.g: Muptiplier by N function

let multiplerBy = function(N) {

    return function (multiple) {
        return( N * multiple)
    } 
}

let multiplerByFive = multiplerBy(5);

console.log(multiplerByFive);  //its a function that retains the original argument N = 5

console.log(multiplerByFive(3));  //returns 15


//Functions can return Functions, Objects, Arrays, Promises, Variables, 

//const Objects and Arrays can have their Data changed (but they keep referencing to the same memory location)

//-------Maps and Sets

// Object Methods are useful: (don't need to memorize)

// Object.keys() – Returns the keys of the object.
// Object.values() – Returns the values of the object.
// Object.entries() – Returns the key-value pairs of the object.
// Object.assign() – Copies properties from one or more objects to a target object.
// Object.freeze() – Freezes the object, making it immutable.
// Object.seal() – Seals the object, preventing new properties from being added.
// Object.create() – Creates a new object with a specified prototype.
// Object.defineProperty() – Defines a property on an object.
// Object.defineProperties() – Defines multiple properties on an object.
// Object.getOwnPropertyDescriptors() – Returns the descriptors of all properties.
// Object.getPrototypeOf() – Returns the prototype of the object.
// Object.setPrototypeOf() – Sets the prototype of the object.
// Object.is() – Checks if two values are the same.
// Object.isExtensible() – Checks if new properties can be added to the object.
// Object.preventExtensions() – Prevents new properties from being added.


// In Classes, to create a Private Field (meaning a key:value pair not accessible from outside:
// use the #keyname1 = value1 syntax. keyname1 will still be accessible by the methods of the class using this.#keyname1 but will not be accesible from outside.

