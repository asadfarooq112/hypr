
/// showing Callback hell example, changing color of box

let boxObj = document.querySelector('.box');
boxObj.style.border = 'solid 5px';

setTimeout( () => {
    boxObj.style.backgroundColor = 'red';
        setTimeout( () => {
            boxObj.style.backgroundColor = 'green';
                setTimeout( () => {
                boxObj.style.backgroundColor = 'blue';
                    setTimeout( () => {
                    boxObj.style.backgroundColor = 'yellow';
                        setTimeout( () => {
                        boxObj.style.backgroundColor = 'orange';
                            setTimeout( () => {
                            boxObj.style.backgroundColor = 'purple';
                                setTimeout( () => {
                                boxObj.style.backgroundColor = 'grey';
                                },500)
                            },500)
                        },500)
                    },500)
                },500)

        },500)
},500)


/// Even if you put it in a function

let boxObj1 = document.querySelector('.box2');
boxObj1.style.border = 'solid 5px';
let colorArray = ['red','green', 'blue', 'orange', 'purle', 'grey', 'orange'];

let colorChangeAfterInterval = function (colorArrayIn) {
        let n = 0;
        for ( let i=0; i < colorArrayIn.length; i++) {
            n = n + 500;
            let color = colorArrayIn[i];
            
            setTimeout(() => {
                boxObj1.style.backgroundColor = color;
            }, n)
        }
}

colorChangeAfterInterval(colorArray);


//////// Syncronous

// console.log('Synchronous 1');
// console.log('Synchronous 2');
// console.log('Synchronous 3');

// // Asynchronous
// console.log('Asynchronous 1');
// setTimeout(() => console.log('Asynchronous 2 (Delayed)'), 1000);
// console.log('Asynchronous 3');

///Creating a Standalone Promise

const promObj = new Promise((resolve, reject) => {
    setTimeout( () => {

    let num1 = Math.random();
    if (num1 < 0.5) {resolve('This data passed in resolve gets accesible to the argument of .this')}
    else {reject('This data passed in reject gets accessible to the argument of .catch')}; 

    },500);
})

//Calling the promise and catching in .then and .catch
//Also, returning the promise in .then so that no nesting is needed

promObj
    .then( (resolvedData) => { 
        console.log(resolvedData);
        return promObj
    })
    .then( (resolvedData) => { 
        console.log(resolvedData);
        return promObj
    })
    .then( (resolvedData) => { 
        console.log(resolvedData);
        return promObj
    })
    .then( (resolvedData) => { 
        console.log(resolvedData);
        return promObj
    })
    .catch( (rejectData) => {
        console.log(rejectData);
    })



//Creating a function that returns a Promise (copying above Promise with new name in the function)
//arrow notation used in this example

let funcPromReturn = (url) => {
    let num2 = Math.random();

    return new Promise((resolve, reject) => {
    setTimeout( () => {
    if (num2 < 0.7) {resolve(`This ${url} is resolved`)}
    else {reject(`This ${url} is rejected`)}; 

    },500);
})


}


//Catching the promise return (resolve or rejects) from the funciton in this and catch

funcPromReturn('page1')
    .then( (resolveData1) => {
        console.log(resolveData1);
        return funcPromReturn ('page2');  
    } )
    .then( (resolveData1) => {
        console.log(resolveData1);
        return funcPromReturn ('page3');  
    } )
    .then( (resolveData1) => {
        console.log(resolveData1);
        return funcPromReturn ('page4');  
    } )
    .then( (resolveData1) => {
        console.log(resolveData1);
        return funcPromReturn ('page5');  
    } )
    .then( (resolveData1) => {
        console.log(resolveData1);
        return funcPromReturn ('page6');  
    } )
    .then( (resolveData1) => {
        console.log(resolveData1);
        return funcPromReturn ('page7');  
    } )
    .catch( (rejectData1) => {
        console.log(rejectData1);
    })



///// Async functions: Normal functions that RETURN Promise without Explicitly creating and returning Promise

// The data returned from the function becomes the 'resolve' data of the promise -> used by .then
// The thrown data from the function becomes the 'reject' data of the promise -> used by .catch
//The whole function itself returns the Promise

//for Example:

let asyncFunc1 = async function (url) {
    if (!url) {
        throw new Error('(Data for reject/ to be used in catch): Enter the Url bitch');
    }
    else {
        return `(Data for resolve/ to be used in then): Url ${url} Entered Successfuly`;
    }
}

//Could also have used arrow function for async. E.g let asyncFunc2 = async (url) => {   };

//Note that in above function we did not need to create Promise, but are able to use the promise like below:

asyncFunc1('google.com')
    .then ( (resolvedData3) => {
        console.log(resolvedData3);
        return asyncFunc1('yahoo.com');
    })
    .then ( (resolvedData3) => {
        console.log(resolvedData3);
        return asyncFunc1('yahoo.com');
    })
    .then ( (resolvedData3) => {
        console.log(resolvedData3);
        return asyncFunc1('bing.com');
    })
    .then ( (resolvedData3) => {
        console.log(resolvedData3);
        return asyncFunc1('');
    })
    .catch( (rejectData3) => {console.log(rejectData3)}) 


//AWAIT keyword

let asyncFunc2 = async function (url) {
    if (!url) {
        throw new Error('(AWAIT syntax Error): Enter the Url bitch');
    }
    else {
        return `(AWAIT syntax resolve): Url ${url} Entered Successfuly`;
    }
}



//Normally to wait until one promise if fulfilled, we use .then and in .then we return the next promise etc

//Using AWAIT, we can create an OUTER ASYNC FUNCTION, and use 'await' keyword before next Promise RUN.
// This way, we can bypass the use of .then (which we usually use to make the next promise wait before the previous is resolved)



let outerAsyncFunc = async function () {
    await asyncFunc2('(used in await) New URL 1');
    await asyncFunc2('(used in await) New URL 2');
    await asyncFunc2('(used in await) New URL 3');
    await asyncFunc2('(used in await) New URL 4');
    await asyncFunc2('(used in await) New URL 5');
    await asyncFunc2('(used in await) New URL 6');

    return "The resolve value of the outerAsyncFunc";

}

//running the outerAsyncFunc below. But note that the above does not capture the resolve of each  asyncFunc1.

outerAsyncFunc();

//Therefore running will not show any result

//To capture resolve of AWAITed functions: store it in a variable

let outerAsyncFuncNew = async function () {
    let varA = await asyncFunc2('(used in await) New URL 1');
    console.log(varA);
    let varB = await asyncFunc2('(used in await) New URL 2');
    console.log(varB);
    let varC = await asyncFunc2('(used in await) New URL 3');
    console.log(varC);
    let varD = await asyncFunc2('(used in await) New URL 4');
    console.log(varD);
    let varE = await asyncFunc2('(used in await) New URL 5');
    console.log(varE);
    
    return "The resolve value of the outerAsyncFunc";

}

outerAsyncFuncNew();

///The above works now


//In case of .then : we access the resolved with .then( (resolved) => {console.log(resolve)} 

//In case of AWAIT: we must place 'await funcAsync1(bla)' in a variable. The variable becomes its resolve value.


//To await and resolve the outerAsyncFuncNew itself, used another outer fucntion outside it

let outerOuterAsyncFuncNew = async function () {
    let resolvedOuterAsync = await outerAsyncFuncNew();
    console.log(resolvedOuterAsync);
}

outerOuterAsyncFuncNew();

// What if out AWAIT async function is REJECTED (not resolved).
//SOLUTION: We use try catch. and place the let varA = await asyncfunc(); in the TRY. and rest in catch

//e.g


let outerOuterAsyncFuncNewERRORCHECK = async function () {

    try {
    let resolvedOuterAsync = await outerAsyncFuncNew();
    console.log(resolvedOuterAsync);
    }
    catch (e) {
        console.log(`error is ${e}`);
    }
}

///BAMM ALL DONE !!!