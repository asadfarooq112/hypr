


// ///// Async functions: Normal functions that RETURN Promise without Explicitly creating and returning Promise

// // The data returned from the function becomes the 'resolve' data of the promise -> used by .then
// // The thrown data from the function becomes the 'reject' data of the promise -> used by .catch
// //The whole function itself returns the Promise




// const async1 = async function() {
//     console.log('resolved1');
// }


// const async2 = async function() {
//     console.log('resolved2');
// }

// async1()
// .then( (data) => {
//     console.log(data);
//         console.log(async1());
//     return async2();
// })
// .then( (data) => {
//     console.log(data);
// })


// ///

// let outerAsyncFunc = async function () {
//     const dat1 = await asyncFunc2('(used in await) New URL 1');
//     await asyncFunc2('(used in await) New URL 2');
//     await asyncFunc2('(used in await) New URL 3');
//     await asyncFunc2('(used in await) New URL 4');
//     await asyncFunc2('(used in await) New URL 5');
//     await asyncFunc2('(used in await) New URL 6');

//     return "The resolve value of the outerAsyncFunc";

// }

// Object OOP

const funcObjMaker = function(name, age, height) {
    let obj = {};

    obj.n = name;
    obj.a = age;
    obj.h = height;

    obj.method1 = function() {
        let total = obj.a + obj.h;
        console.log(total);
    }

    return obj;

}


const objNew = funcObjMaker('asad', 28, 200);

const objNew2 = funcObjMaker('jawad', 27, 23432542350);

console.log(objNew2);

console.log('------------');


//constructor function

const Shell1 = function(age,height) {
    this.a = age;
    this.h = height;
}

Shell1.prototype.method2 = function() {
    console.log('proto ka method');
}

const objFromShell = new Shell1(43,34);

console.log(objFromShell);

console.log('-----------')


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

const OBJ1 = new NewClass1('asad', 28, 234);

console.log(OBJ1);

