const express =require('express');
const app = express();
const path = require('path');
const multer = require('multer');  //To handle file uploads
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));  
app.use(express.static(path.join(__dirname, 'ServeFolder'))); // Serving static content in folder ServeFolder
app.use(express.urlencoded({extended:true})); //Telling express how to manage post requests req.body for form url data
app.use(express.json());                        //Telling express how to manage post requests req.body for JSON data


//home
app.get('/', (req,res) => {
    res.render('home.ejs');
})


// Users Array of Objects contains email and password(later will use Databases instead)
let usersArray = [ { email: 'a@a.com', password: 'a' } ];


//signup page
app.get('/signup', (req,res) => {
    res.render('signup.ejs');
})

//signup form submit
app.post('/signup', (req,res) => {
    usersArray.push(req.body);
    console.log(usersArray);
})

// login popUp AgentCS
// Login form sends object {email password} in req.body which we can check if exists in usersArray using .some method
// .some method loops through each element of Array and we provide a consition code using that element, and return anything
// Arrow function automatically returns the statement

app.post('/agentCS', (req,res) => {
    const trueIfExists = usersArray.some( credentialObj => 
        credentialObj.email == req.body.email && credentialObj.password == req.body.password
    );


    if (trueIfExists == true) {
        console.log(req.body);
        res.render('agentCS.ejs');
    }
    else {
        console.log('doesnt exist');
        res.render('wrongCredentials.ejs');
    }

})

//Temporary GET request allow to agentCS for development (normally only accesible by post request)
app.get('/agentCS', (req,res) => {
    res.render('agentCS.ejs');
})

// multer upload destination defined
const uploadDocs = multer({ dest: './uploads/docs' });

// multer requires that a post request is send with using FormData constructor format.
// In multer response, req.file is the file object

// Middleware functions can be added in between the app.post or get etc, between the path and function callback
app.post('/docUpload', uploadDocs.single('file') ,(req, res) => {

    res.json({message: 'File uploaded. You can upload more if you like', file: req.file})
} );




// Copy Pasting form for imgsUpload

// multer upload destination defined
const uploadImgs = multer({ dest: './uploads/images' });

app.post('/imgsUpload', uploadImgs.single('file') ,(req, res) => {

    res.json({message: 'File uploaded. You can upload more if you like', file: req.file})
} );




app.listen(3600, () => {console.log(`Server is listening on port http://localhost:3600`)});