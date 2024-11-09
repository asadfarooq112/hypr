// Routing using Parameters req.params and req.query.  Restarting server evertime -> solution nodemon
// www.google.com/parameter1/parameter2  Parameters are /text entered in url

const express = require('express');

const app = express();

app.listen(4000, () => {console.log(`Server is listening on port http://localhost:4000`)});

// To target parameters, we use:
// req.params which gives an Object with key_name of :variable placed in the parameter string, and value of user enters as parameter

app.get('/product/:prodName', (req,res) => {
    console.log(req.params);  // prints { prodName: 'helloProduct' } when user enters localhost:4000/products/helloProduct

    res.send(`<h1>You entered parameter after product ${req.params.prodName}</h1>`);
})
// Queries are key value pairs added at end of url with syntax google.com/bla ? queryKey1=value1 & queryKey2=value2
// Queries accessed by req.query which gives an object containing key value pairs of query enters by the user

app.get('/', (req,res) => {
    console.log(req.query);  //prints { key1: '10', key2: 'Asad' }  when user enters localhost:4000/?key1=10&key2=Asad
    res.send(`<h1> If you entered nothing object will be empty, otherwise it will contain your Query String as Object (req.query gives an object) </h1> <br> ${req.query}`);
})


// To automatically restart the server whenever there is a change made in code and save, use nodemon npm module
// install nodemon globally
// then in terminal instead of running node index.js   ->   run instead   nodemon index.js 
