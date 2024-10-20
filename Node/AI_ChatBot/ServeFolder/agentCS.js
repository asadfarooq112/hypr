let n = 0;

const docsFormObj = document.querySelector('#uploadFormDocs');

//Getting the file input data from the form
const fileInput = document.querySelector('#docsFile');  //Its the id of <input> element

// Doing above gives us not the file itself. To access the file, use:
// fileInput.files which gives us an array containing an Object for each file (the Object contains metaData and the file itself)
// .files is a method on Objects containing files.   fileInput.files[0] gives us Object containing metaData and the file itself

docsFormObj.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('formSubmiteed');

    console.log(fileInput.files[0]);

    // You can send this file over the server using FormData() (which is a built in Constructor function that creates key:value pairs
    // to send via Fetch and AJAX)
    // To add the file to formData object created from FormData() constructor, use formData.append('fileName', fileInput.files[0])
    // formData can then send the file as binary to the server using Fetch etc.

    const formData = new FormData();

    formData.append('file', fileInput.files[0]);

    // Now sending this file using Fetch API using POST request

    fetch('/docUpload',  {
        method: 'POST',
        body: formData
    }

    )
    .then( (resolve) => {
        //here resolve is an OBJECT (since fetch always resolves an object)

        let resObj = resolve.json();
        //here .json is a METHOD on the resolve OBJECT that gives a Promise
        //the Promise resolve.json() is placed in a variable resObj

        resObj.then ((data) => {
            //the resolve of resolve.json() object is now finally the JS Object we want (converted from JSON)
            
            console.log(data);
        });
    })
    .catch( (err) => {
        console.log(err);
    })




    n++;
})