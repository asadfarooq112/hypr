// importing a whole directory using require and this structure below


const js4a = require('./js4a');
const js4b = require('./js4b');
const js4c = require('./js4c');

const array1 = [js4a, js4b, js4c];

module.exports = array1;

// now this array will be accessible when someone requires the outer folder where index.js lies. 