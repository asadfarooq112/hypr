//variable and scoping

{
    var x=3;
}

console.log(x);



// strings typoe of array. array is object

const str1 = 'abc';

console.log(str1.__proto__);

const str2= 'asad';

let z = 'abc' + 'cde' + str2;

console.log(z);

console.log(`aadfkjhsadf 
    fsdfds


    dfsgdfs
    gsdfg
     ${str2 + "sdf"}`)



console.log(xyz());

function xyz() {
    console.log('hi');
}

// descision making ==  === != !==  >= <=  
//Logical && || !


// True: any value 

// False/falsy:  false, 0, "", null, ndefined, NaN



//Arrays are objects key:

//closure


let funcDivisor = function(divisor) {

    return function(number) {
        console.log(number/divisor);
    }

}


funcDivisor(7)(14);


(
(x) => {
    console.log(x);
}
)(5)



function funcA() {
    let x = 5;

        function funcB() {
            const y = 4;
        }

}


function funcX(callBackFunc) {
    callBackFunc();
}


function funcY() {
    console.log('hiihihi');
}

funcX(funcY);



const obj10 = {
    key1: 4,
    key2: 10,

    method1: x => console.log(this)

}


obj10.method1();


//ArrAY Methods

const array1 = [ 6, 234, 1, 3 ,5 ];

console.log(array1.__proto__);



console.log(array1.sort(

    (a,b) => {
        return b-a;
    }

));


const arrayObj = [

    {
            key1:3
    }
,
    {
        key2:34534
    }
,
    {
        key4:34543
    }


]


console.log(arrayObj[1].key2);



const objNew = {
    key1: 34,
    key2:454,
    key3: 4532
}




let {key1, key2: NewNamekey2, key3 } = objNew;



const arrNEW = [ 234 , 4342, 4234];

let [ anyName1, anyName2, anyName3] = arrNEW;


let arrNEW2 = [ 23432, 234324, 23432];
 
let arrNEW3 = [...arrNEW, ...arrNEW2];

console.log(arrNEW3);


// Very helpful to use Object.methods

console.log(Object.keys(objNew));


console.log(Object.values(objNew));


console.log(Object.entries(objNew));

console.log(document);



const para1 = document.getElementById('idPara');

console.log(para1);

para1.style.backgroundColor = 'red';

console.log(document.getElementsByTagName('li'));

const liQuery = document.querySelector('.class2');

liQuery.style.color = 'purple';

liQuery.innerHTML = '<br> hjfkdsjkf <br> sdfasda <hr> dsafds';

const link1 = document.querySelector('a');

link1.href = 'yahoo.com';

console.log(window);


const newPara = document.createElement('p');

newPara.innerHTML = 'fadsfdsaf';

newPara.style.color = 'red';


const form1 = document.querySelector('form');

form1.after(newPara);

console.log(newPara.__proto__);

const button1 = document.querySelector('.firstButton');

button1.onclick = () => {
    alert('sdfdsf');
}

const html1 = document.querySelector('html');

console.log(html1);

newPara.addEventListener('click', (e) => {
    console.log('clickedf');
    console.log(e);
})



console.log(document.querySelector('#input1').value);

const ol1 = document.querySelector('.ol11');

ol1.addEventListener('click', (e) => {
    console.log(e.target);
})

console.log(document.body);


//async

//singe thread

console.log('line1');

console.log('line2');

console.log('line3');

console.log('-------------------');
//

// prmise pbject -> resovle reject

console.log(Promise);


const newProm1 = new Promise( (res, rej) => {
    res('data11111');
    rej('datathrown by REJECT')
});

const newProm2 = new Promise( (res, rej) => {
    res('data2222222');
    rej('datathrown by REJECT')
});

const newProm3 = new Promise( (res, rej) => {
    res('data333333333');
    rej('datathrown by REJECT')
});


//

console.log(newProm1);


newProm1.then( (data) => {
    console.log(data);

    newProm2.then((data) => {
        console.log(data);
        
         newProm3.then((data) => {
            console.log(data);
         })
        }) 
    })
.catch ( (data) => {
    console.log(data);              
})


//return another promise in the first promise

// promObj
//     .then( (resolvedData) => { 
//         console.log(resolvedData);
//         return promObj
//     })
//     .then( (resolvedData) => { 
//         console.log(resolvedData);
//         return promObj
//     })
//     .then( (resolvedData) => { 
//         console.log(resolvedData);
//         return promObj
//     })
//     .then( (resolvedData) => { 
//         console.log(resolvedData);
//         return promObj
//     })
//     .catch( (rejectData) => {
//         console.log(rejectData);
//     })




///// Async functions: Normal functions that RETURN Promise without Explicitly creating and returning Promise

// The data returned from the function becomes the 'resolve' data of the promise -> used by .then
// The thrown data from the function becomes the 'reject' data of the promise -> used by .catch
//The whole function itself returns the Promise




const async1 = async function() {
    console.log('resolved1');
}

console.log(async1());


// Fetch vs axios

fetch("https://swapi.dev/api/people/1")
.then((data) => {
    console.log(data);
})