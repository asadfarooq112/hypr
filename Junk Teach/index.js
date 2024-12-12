let x = 5;

console.log(`abs = ${x+5}`);


function hello(a,b) {
    return a+b; //below doesnt run
    console.log(a+b);
}

hello(2,5)

let func3 = function(c,d) {
    ///
}
 
const obj1 = {
    key1: 5,

    hello1: function(h) {
        console.log(h+this.key1);
    }

    
}

obj1.hello1(7)