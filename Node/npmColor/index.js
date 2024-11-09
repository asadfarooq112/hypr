//Note here since node_modules folder for colors is in the same directory we dont use entire path

const colors = require('colors');

//Here we use entire path to the folder containing the package since it's node_modules is not is the current directory
const jokes = require('../npmJokes/node_modules/give-me-a-joke');

// Note something, we learnt before that if you want to use code (data) from another js file, you export that data in form of
// an object or array using module.exports, and in the file where you want to import, you use require(./'path/FileName');
// We then learnt that if you export something from a file called index.js while lies in FolderBla and you import the whole
// folderBla, then everything exported from that file is accessible in the imported folder.

// When requiring npm modules, that is exactly what we do. we import the whole folder (therefore importing whatever is exported by index.js in that folder)
// Another fact is that if FolderBla is placed in a folder called 'node_modules', all we need to do is just require('folderBla'). we dont need to write node_modules/FolderBla

// If you want to go up two levels to require a module, your code would look like this:
// ../../npmJokes/node_modules/give-me-a-joke
// for three levels up:'../../../npmJokes/node_modules/give-me-a-joke'

console.log(colors.rainbow("HELOOOOOOOOOOOOOOO!!!"));

jokes.getRandomDadJoke( (joke1) => {
    console.log(colors.rainbow(joke1));
}

)

// you can install packages globally for use anywhere using npm -g packageName and can link it later