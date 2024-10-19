let selectObj = document.querySelector('#dropdown');
let p1ButtonObj = document.querySelector('.p1Button');
let p2ButtonObj = document.querySelector('.p2Button');
let resetButtonObj = document.querySelector('.resetButton');
let n1Obj = document.querySelector('.n1');
let n2Obj = document.querySelector('.n2');


let maxScore = 1;
let p1Score = 0;
let p2Score = 0;

selectObj.addEventListener('change', function () {
    maxScore = parseInt(selectObj.value);
})

p1ButtonObj.addEventListener('click', function () {
    p1Score++;
    n1Obj.innerText = `${p1Score}`;
    
    if (p1Score == maxScore) {
        n1Obj.style.color = 'green';
        funcWinner()
    }

})

p2ButtonObj.addEventListener('click', function () {
    p2Score++;
    n2Obj.innerText = `${p2Score}`;

    if (p2Score == maxScore) {
        n2Obj.style.color = 'green';
        funcWinner()
    }
})

let funcWinner = function () {
    p1ButtonObj.setAttribute('disabled','disabled');
    p2ButtonObj.setAttribute('disabled','disabled');
}

resetButtonObj.addEventListener('click', function() {
    n1Obj.innerText = 0;
    n2Obj.innerText = 0;
    n1Obj.style.color = 'black';
    n2Obj.style.color = 'black';
    p1Score = 0;
    p2Score = 0;
    p1ButtonObj.removeAttribute('disabled');
    p2ButtonObj.removeAttribute('disabled');
})


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
    if (num2 < 0.9) {resolve(`This ${url} is resolved`)}
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

//Normally to wait until one promise if fulfilled, we use .then and in .then we return the next promise etc

