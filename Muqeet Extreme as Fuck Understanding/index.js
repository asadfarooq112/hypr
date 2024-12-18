const a = 'My Name is';
const x = 'Asad';
const y = 54;
const z = 95;

const b = 'sadffsdf';

const c = [ 23, 4, 4,4 ];

const d = {
    "key1": 'value1',
    "key2": 'value 4'
}

const e = function() {
    console.log('developersAreBelow Us')
}

const f = true;

const g = null;


/// strings are almost like arrays

console.log(b.toUpperCase());

//Task learn important relevant string methods

console.log(a + ' ' + x + ' ' + 'my age is ' + y); //Fuck I am frustrated!!!

// God sent us Backticks!!!!

const string1 = `My name is ${x} and my age is ${y}`; //Maza agya badhsoo

console.log(string1);

// Descision Making 
// == === != !== < > <= >=

const aa = 5;
const bb = 6;

if (aa == bb ) {
    console.log('same value');
}

if (aa === bb) {
    console.log('same type and value');
}

// localStorage.setItem('pen','stein');
// console.log(localStorage.getItem('pen'));

if(bb > aa) {
    console.log('b > a');
}


console.log('--------------------')
// && || !

// ARRAYS is object. Prpertied or methods whic are functions

const arr1 = [ 3 , 3 , 5, 52 ];

console.log(arr1.__proto__);

console.log(arr1);

const arr2 = arr1;

arr2.push('fasdf');


console.log(arr1);


arr1.__proto__.key1 = 'weAreBestDevs'

const arrayX = [432423, 243];

console.log(arrayX.key1);



arr1[2] = 'sdfsdfs';

console.log(arr1);

// Objects. King of ALL fuckign kings!!!!!

const obj1 = {
    key1: 234,
    key2: 3423,
    key3: 4424
}

console.log(arr1.length);

console.log(obj1);

let n = 3;

const variable = `key${n}`;

console.log(obj1[variable]);


const arrr1 = [ 
        [2 , 4, 6 ],
        [5 , 6, 2],
        [6 , 2, 4]
]

// make a loop that prints 2 4 6 5 6 2 6 2 4

for (row of arrr1) {
    for (column of row) {
        console.log(column);
    }

};



// function is a GANDU object. in out in out


function funcName(asad) {
    console.log(asad);
};

const funcName21 = function(asad1) {
    console.log(asad1);
};

((h,g) => {console.log(h+g)}) (3, 4);  // Output: 7


//  (functionCreate)(arguments)

function funcOuter() {
    let x = 3;

    funcInner();

    function funcInner() {
        let y = 4;
        
        function funcInnerMost() {
            let z = 6;
            console.log(x+y+z);

        };
        funcInnerMost();
    
    };



}



funcOuter();


// Closure: when funciton produces another fucntion, the argument value of parent fucntion gets locked in

const funcDivisor = function(divisor) {

    return function numerator(num) {
        console.log(num/divisor);
    }
}

let divisorBy3 = funcDivisor(3);

divisorBy3(12);

//error handling try catch

try {
    console.log('it')
}
catch (e) {
    console.log(e);
}

arr1.forEach( function(v) {
    console.log(v);
}

)


//Arrow function, very sexy functions. Dont use word function

const arrowFunc1 = (x,y) => {
    console.log(x + y);
};


console.log('------------');

// if single line of code, we can omit {} and therefore it automatically retuens that single line of code

const arrowFunc2 = () => y + z ;

const var2 = arrowFunc2();

console.log(var2);

// if one arguemnt we can also omit ()

const fuckAllArrowFunc = l => l + y +z;

const temp2 = fuckAllArrowFunc(0);

console.log(temp2)

let k =500;

const objj1 = {
    key1: 'hello',
    key2: 'bye'
}

erray1 = [1 , 2, 3, 4, 5, 6]; ////
erray2 = [ 'asad', 'muqeet', 'sami', 'sami ko lun'];

erray3 = [...erray1, 4, 5, 'hello', ...erray2, objj1];

console.log(erray3);

const objj2 = {
    key1: 'asad',
    key2:'muqeet',
    key3: 10
} 

const objj3 = {...objj1, fullArray:erray1, key3:'keyvalue3', ...objj2};

console.log(objj3);

console.log('-------------');


// descontruciton to break an pbject or array and add its value to indficual variables

let [xx,yy,zz, tt] = erray1;

console.log(zz);

let {key1: NewVar1, key2: varVar2, key3} = objj2;

console.log(NewVar1);

const funcArrayFucker = function([a1, a2, a3, ...fuckerSpreader]) {
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(fuckerSpreader);

}

funcArrayFucker(erray1);

console.log('-----------')

/// 

let arrr3 = [24, 2];


console.log(arrr3);

let abc = 1;

const newProm = new Promise((resolve, reject) => {
    if (abc === 1) {resolve('Resolve Data');}
    else {reject('Reject Data');}
})


newProm
.then((data) => {
    console.log(data)
})
.catch((newData) => {
     console.log(newData);
})



// Promsoie is an object, that can have 2 states, resolved, rejected

axios.get('https://pokeapi.co/api/v2/pokemon/')
.then((returnObj) => {
    console.log(returnObj.data.results[0]);

        return axios.get('https://pokeapi.co/api/v2/pokemon/')
})
.then((returnObj1) => {
    console.log(returnObj1.data.results[1]);

    return axios.get('https://pokeapi.co/api/v2/pokemon/')
})
.then((returnObj1) => {
    console.log(returnObj1.data.results[2]);

    return axios.get('https://pokeapi.co/api/v2/pokemon/')
})
.then((returnObj1) => {
    console.log(returnObj1.data.results[3]);

    return axios.get('https://pokeapi.co/api/v2/pokemon/')
})
.then((returnObj1) => {
    console.log(returnObj1.data.results[4]);

    return axios.get('https://pokeapi.co/api/v2/pokemon/')
})
.catch((e) => {
    console.log(e);
})


// async functions with await

const asyncOuter = async function() {    
        
    const returnedFromAwait = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    console.log(returnedFromAwait.data.results[5]);

    const returnedFromAwait1 = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    console.log(returnedFromAwait1.data.results[6]);


}

asyncOuter();