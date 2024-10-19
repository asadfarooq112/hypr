// Using code form one file in another file

let funcPlus = (a,b) => a + b;

let funcMinus = (a,b) => a - b;

let var1 = 300;

// If we want to use the above stuff in another js file, we must make it accessible i.e export the components
// When imported with require('./filename') the other file imports an Object. 
// Whatever we export from this fille will be added as properties(keys) or methods to that object
// We can add anything we want to export to the default empty object module.exports
// e.g

module.exports.funcPlusMethod = funcPlus;
module.exports.funcMinusMethod = funcMinus;
module.exports.var1Property = var1;

// You can also create a new object containing funcPlus, funcMinus and var1 and export that whole object



