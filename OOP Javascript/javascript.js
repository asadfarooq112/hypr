// Prototype: Objects which are templates for other Objects. Protype contains all the 
// methods and properties that can be used by Object that use the Protype as a template

console.log(Array.prototype);

// ^ Prints the protoype of array. Which is __proto__ : Array

//Methods like .push() and .map() for arrays are actually located in its Prototype

//We can also add new methods to Prototypes. Example:

Array.prototype.newMethod = function () {
    this.push('this is the PUSHED ELEMENT');
}

//Above, this refers to the Object in which the method lies, i.e in our case the Array

let arr1 = [1,2,3,4,5];

arr1.newMethod();

console.log(arr1);
//Displays: [1, 2, 3, 4, 5, 'this is the PUSHED ELEMENT']

// Not recommended to change play with GENERAL prototypes like __proto__ : Array like we did above

console.log('-------------------------');




// Manually making Object Producing Functions
//1)Create a function that produces an Object
//2) Function fills the object's properties (keys) and methods using the arguments
//3 Function reuturns the object

//e.g function that creates person Object with its properties and Methods



let funcMakePerson = function (name, height, weight, color) {
    let person = {};

    //below adds properties (keys) and values to the person object
    person.n = name;
    person.h = height;
    person.w = weight;
    person.c = color;

    person.method1 = function () {
        const { n: N, h: H, w: W, c: C} = this;
        console.log(`Name of person: ${N}, Height is: ${H}, Weight is: ${W}, Color: ${C}`);
    }
    //Above, as studied in Deconstructing Objects, the const { var1, var2, var3 } = this
    // creates variable called N with value this.n , variable H with value this.h etc
    
    

    return person;


}

let newObjPerson = funcMakePerson('asad', 180, 100, 'red');

console.log(newObjPerson);
newObjPerson.method1();

///////////////////////////////////////////
console.log('---------------------');
/////////////////////////////////



//Normally if done manually as above, each new Object created contains the methods repeated inside it


//Constructor Functions 
// using Shell Functions(constructor functions) and 'new' keyword
//Denoted with Capital letter but not necessary
//Dont' use arrow notation for Shell Funcs
//You don't need to create or return an object in the Shell function

//Shell Function example:

let ShellFunc1 = function (word1, word2, word3) {
    this.w1 = word1;
    this.w2 = word2;
    this.w3 = word3;
}

//If we run ShellFunc1() it will give error since .this refers to the WINDOW object

//INTRODUCING: The 'new' keyword. 
// new ShellFunc1(bla) -> Creates new Object -> Maps the properties (key:values) of the
// Shell Function to the new Object -> Reutrns the new Object if the Shell Func doesn't return anything
//E.g

let objFromShell1 = new ShellFunc1( 'hello', 'go', 'away');

console.log(objFromShell1);

//This prints the new object objFromShell1 -> 
// { 
//     w1: 'hello',
//     w2 : 'go',
//     w3 : 'away'
//  }

//Note: that it does not contain the methods because we did not place any methods in constructor function. 

//We MUST ONLY place methods for the constructor in the PROPERTY of the constructor function
// using ShellFunc1.prototype.newMethod1 = function () { bla}. Example:

ShellFunc1.prototype.newMethod1 = function () {
    let a = this.w1; //gives us this.w1 = word1 
    let b = this.w2;
    let c = this.w3;

    console.log(`Capital ALL:${a.toUpperCase()}, ${b.toUpperCase()}, ${c.toUpperCase()} `);
}

//Now the prototype can be used in any new Object created from Shell Function and new
//And the new Object only contains properties of the Shell Function, not the methods

objFromShell1.newMethod1();

///////////////////////////////////////////
console.log('---------------------');
/////////////////////////////////


// ^ Above still has the inconvenience of added methods manually and outside of the Shell function

// Even Better way: CLASSES

//Class just like constructor funciton above, but different in 2 ways:
//1) You can place methods in the class after class constructor
//2) When you create a new Obj using new ClassName, the class constructor RUNS automatically, even if you didnt run it

//Syntax:

class NewClass1 {
    constructor(name, age, height) {
        this.n = name;
        this.a = age;
        this.h = height;

        console.log(`${name}, ${age}, ${height}`);
        //this runs automatically when a new Obj is create from this class
    }

    //Below we add the methods

    method100 = function() {
        console.log(this.a + 100);
    }
    //both above and below syntax is acceptable for making methods in objects
    method200() {
        console.log(this.a + 200);
    }
    nameUpper() {
        return this.n.toUpperCase();
    }
    nameUpperExclamation() {
        console.log(`${this.nameUpper()} !!!!!!`);
    }

}

let objFromClass = new NewClass1('asad', 28, 10);

objFromClass.method100();

objFromClass.method200();

console.log(objFromClass.nameUpper());

objFromClass.nameUpperExclamation();



//You can create Parent-Child Classes by using 'extend' and 'super' keywords

class Child1_NewClass1 {
    constructor (sex) {
        this.s = sex;
    }

    methodInChild1 () {
        console.log()
    }
}







