// importing a whole directory using require and this structure below


const js4a = require('./js4a');
const js4b = require('./js4b');
const js4c = require('./js4c');

const array1 = [js4a, js4b, js4c];

module.exports = array1;

// Usually module.exports is an object. Now we are making module.exports an array (instead of object)

// ANything exported from index.js in a folder is accessible when the whole folder is required.  require('./wholeFolder')

// now this array will be accessible when someone requires the outer folder where index.js lies. 