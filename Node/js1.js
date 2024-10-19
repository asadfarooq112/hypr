//---- Intro, process, fs

// Node has many Objects and modules. (main outer object is called global)

// Example: 'process' is a global object that helps us control processes
// process.argv -> gives an array with ar[0] -> Location of node executable ar[1] -> Location of js file
// ar[3] ar[4]... and so on as the arguments placed in the terminal during running the file

console.log(`first arg is node location ${process.argv[0]}`);
console.log(`second arg is js file location ${process.argv[1]}`);
console.log(`third arg is arg1 ${process.argv[2]}`);
console.log(`fourth arg is arg2 ${process.argv[3]}`);

// Filesystem Module: has both syncrounous and asyncronos methods. (sync will block everything until it completes execution)
// Use require to add fs module

const fs = require('fs');


// Example fs.mkdir is asyncronous and fs.mkdirSync is asyncronous

// asyncronous
console.log('before mkrdir');

fs.mkdir('NewFolder', (err) => {
    if(err) {console.log('error creating folder')}
    else {console.log('folder created')}})

console.log('after mkrdir');


//syncronouse example (Sync version doesnt need callback arguement at end (read node documentation))

console.log('before mkrdirSYNC');

fs.mkdirSync('NewFolder1');

console.log('after mkrdirSYNC');
