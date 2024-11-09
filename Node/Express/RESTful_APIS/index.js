// GET requests: used to receive data. can also send some data in form of query string
// POST requests: used to create, edit or delete from server. ANY data sent and received through requests body

const express =require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));  

app.use(express.urlencoded({extended:true})); //Telling express how to manage post requests req.body for form url data (html form i mean)
app.use(express.json());                      //Telling express how to manage post requests req.body for JSON data
// if we don't do this, req.body will be undefined regardless of what data is sent by the client to us in the post request

app.get('/', (req,res) => {
    res.render('form1.ejs');
})


//We can access data sent from GET request in a form via query string req.query. The keys for the data entered is the attribute name= in the input field
app.get('/submit1', (req,res) => {
    res.send('This was a GET request');
    console.log(req.query);
})


//We can access data sent from POST request in req.body .BUT we MUST add the following on top of code to tell express to respond to which type od req body:
// for form-url POST data: app.use(expresss.urlencoded({extended:true}))
// for json POST data: app.use(express.json());
// If we dont do this, by default, the req.body is shown as undefined 

app.post('/submit1',(req,res) => {
    res.send('This was a POST request');
    console.log(req.body);
})



app.listen(4500, () => {
    console.log('listening on port 4500');
})