// isntall express using npm install express. (initialize using nmp init first)

// Standard: 1) require express gives us a function. 
// 2) we need to call the function and to place the return value in a variable.
// 3) use app.listen(port, Callback) to start listening on port
// 4) on local server to access, use url http://localhost:3000
// app.use(req, res => {callBack}) runs everytime we get a new request

const express = require('express');

const app = express();

app.listen(3100, () => {console.log(`Server is listening on port http://localhost:3100`)});


// On every app.use(req,res => {callback}), Express creates two objects req, and res (you can rename them whatever like any other callback;

// req Object contains the HTTP request and alot of request data.

// res Object used to send response
// res.send(data)  data can be a html, buffer, string, object or array. (buffer is binary data type in node)
// *if response data is object or array, it is automatically converted to JSON format
// we can only send one time per request, so anytime we run res.send, sending anything else is not possible


//app.use responds to all requests in a similar manner:

// app.use((req,res) => {
//     console.log('We got a new request!')
//     // console.log(req);
    
//     // res.send('<p>This is the response</p>');    // We can also send html directly as a string ofcourse

//     // res.send({name: 'Asad', age: 24});    //This sends a json response. Better to use res.json(javascriptObject) instead of res.send for sending json


// });


// Responding to different requests:

// 1) To target all requests, use app.use((req,res) => {callBack which can include res.send(blaBla}) to respond
// 2) To target specific path, use app.get() or app.post() and in which you can send response using res.send(blaBla)
//  Syntax for app.get or post is: 
//                                 app.get(('/path'), (req,res) => {callBack})  or app.post for post request
//                                  /path for specific url path.   / for root or home url.   * for all unrouted requests

// E.g

// res.send
// res.json
// res.render for ejs
// res.status

//GET root url repsonse
app.get('/', (req,res) => {
    res.status(204).send('<h1>GET RESPONSE: This is the home directory </h1>');
    console.log('we got a GET request on home');
});

//POST root url response
app.post('/', (req,res) => {
    res.send('<h1>POST RESPONSE: This is the home directory </h1>');
    console.log('we got a POST request on home');
});

//GET specific page response (can use post too)
app.get('/about', (req,res) => {
    res.send({page:'About', typeOfRequest: 'Get by Asad :)'})
});

//GET request for unrouted requests
app.get('*', (req,res) => {
    res.send('<h1>You wanna GET? This page is not routed you bitch </h1>');
});

//POST request for unrouted requests
app.post('*', (req,res) => {
    res.send('<h1>You wanna POST? This page is not routed you bitch </h1>');
});


