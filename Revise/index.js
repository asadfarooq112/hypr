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




























