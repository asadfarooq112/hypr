const express = require('express');
const path = require('path'); // see below why use path (not important information)

const app = express();

app.use(express.static(path.join(__dirname, 'ServeFolder1'))); // See near end, why we used this

// TO use EJS, use app.set('view engine', 'ejs');
// Install npm EJS to use it 
// Create a directory called 'views' in the same folder


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));  
//Above is done so that node or nodemon can run from anywhere. Because of its ran from another directory, it will not find views and give error
        

// To respond to request with a HTML page, use res.render('name of file in views folder') to return rendered HTML page

app.get('/', (req,res) => { 
  res.render('home.ejs');

})


// You can pass in Object to be used in the res.render (this object will be available in the page1.ejs file so you dont have)
// to type compelx detailed javascript logic in the ejs file. You can pass the stuff from index.js to page1.ejs directly
// The things passed in the object like variables (key1:value1 pairs) or functions, arrays, anything will be accessible directly in the ejs file.
// (you dont have to do objectBla.key1,  you can directly use key1 as a variable)

app.get('/page1', (req,res) => {

    let randValue = Math.random() * 10;  // Sample data to send to page1.ejs so we dont have to type complex logic
    let funcSum = (a,b) => a + b;
 
    res.render('page1.ejs', {randValue:randValue, funcSum: funcSum});    // is key value pair is same, we can also use just key name e.g {randValue, funcSum}
}) 


app.get('/r/:subredditName', (req,res) => {
    res.render('subreddit.ejs', {subreddit: req.params.subredditName});  //This will give the r/pathTyped value from user
})


//Running loops in EJS, see EJS file
app.get('/content-loop', (req,res) => {
    let arr1 = ['Ahmed', 'Ali', 'Rashid', 'KuttaBC', 'Khanzeer'];
    res.render('contentloop.ejs', {arr1: arr1});
})

// For data with repetitive keys, better to use outer most container as an array (see ./data/sampledata.json)

//You can also require('json_file') from a JSON file since. Requiring a JSON file automatically parses it into a JS Object
const sampleData = require('./data/sampledata.json');
const moreData = require('./data/moredata.json');

app.get('/users', (req,res) => {
    res.render('dataloops.ejs', {sampleDataKey: sampleData, moreDataKey : moreData});
})
// To send the data using res.render to the view ejs file, you should place the key value pairs in  {} like above
// What you can also do is spread the object directly in the {}, e.g. {...sampleData, ...moreData}. 
// This way the key's and methods in sampleData and moreData will directly be able to be used in the ejs file using the key names. instead of sampleData.keyname


// !!! To use Css and Javascript static files which you connect to the HTML pages sent by server, following steps:
// 1) Create a directory in root folder where you wanna place the the files. (e.g you send app.css & js1.js)
// 2) Send the contents of the directory with response using app.use(express.static('folderPath'))
// 3) To connect in HTML, use href="./app.css"  NOT "./folderPath/app.css" because this method sends the content of the folder, not the folder itself
// (we use ./app.css directly even though it was contained in the ServerFolder1 because we served the static 
// folder SO EVEYRTHING WE SERVED in the folder is accessible as if its placed in the root directory)

//e.g serving a directory called ServeFolder1 with file app.css which I'll connect to contentloop.ejs
// app.use(express.static(path.join(__dirname, 'ServeFolder1'))); // I am adding this on the top of this file so it serves before other requests


app.listen(3200, () => {console.log('listening on port 3200!')});



