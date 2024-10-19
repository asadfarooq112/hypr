//---- fs, using code from another file

// to provide a default value to a variable, you can use ||
//e.g
let userinput;

let var1 = userinput || 2;
console.log(var1);
//if userinput in undefined, the default value will become 2, note you do need to create the variable or array etc

const fs = require('fs');

try{
fs.writeFileSync('js2.5NewCreated.js', 'console.log(`this is the data written in new file, HIHI`)');
}
catch (e) { console.log(e);}
// It matters where you run the node js. If you use whole path its better

//Gives complete path including the file
console.log(process.argv[1]);

//Gives complete path upto current directory
console.log(__dirname);


// To use code from another file, use require('./filename') without .js at end of filename
//e.g

const newFile = require('./js3NewCreated');

console.log(newFile); //Prints an empty object if nothing exported from the file imported

//if we want to export some stuff from the js3NewCreated.js file, we must export it from the file

console.log(newFile.funcMinusMethod(10,5)); //prints 5.  Note that the method name exported was used (not original name funcMinus)


//you can also require a whole directory. To do that:
// 1) Create a directory containing multiple .js file
// 2) Import the whole file objects of the multiple files using require to a file called 'index.js'
// 3) Export the whole file objects as an array from the index.js file. 
// 4) This way when the whole directory is imported using require(./DirectoryName), this array will be imported
// E.g

let wholeFolderJs4 = require('./js4');

console.log(wholeFolderJs4);

console.log(wholeFolderJs4[0].occupation);