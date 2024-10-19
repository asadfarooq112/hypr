//Note here since node_modules folder for colors is in the same directory we dont use entire path

const colors = require('colors');

//Here we use entire path to the folder containing the package since it's node_modules is not is the current directory
const jokes = require('../npmJokes/node_modules/give-me-a-joke');

// If you want to go up two levels to require a module, your code would look like this:
// ../../npmJokes/node_modules/give-me-a-joke
// for three levels up:'../../../npmJokes/node_modules/give-me-a-joke'

console.log(colors.rainbow("HELOOOOOOOOOOOOOOO!!!"));

jokes.getRandomDadJoke( (joke1) => {
    console.log(colors.rainbow(joke1));
}

)

// you can install packages globally for use anywhere using npm -g packageName and can link it later