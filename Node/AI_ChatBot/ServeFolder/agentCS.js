const docsFormObj = document.querySelector('#uploadFormDocs');
const imgsFormObj = document.querySelector('#uploadFormImgs');

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

    // The fetch request is a promise that RESOLVES-> an ObjectBLA
    // ObjectBLA.json() is a promise that RESOLCES-> as the JS Data Obj we want (the one that is sent from server)

    fetch('/docUpload',  {
        method: 'POST',
        body: formData
        })
    .then( (resolve) => resolve.json())  //  Usimg arrow function automatically returns the code. in this case returns result of resolve.json() which is a promise  
    .then( (data) => {
        console.log(data);
    })
    .catch( (err) => {
        console.log(err);
    })

});



const fileInputImg = document.querySelector('#imgsFile');


// Copy pasting above fetch request for Image upload (using separate request to store in separate folder i.e uploads/images)
imgsFormObj.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('formSubmiteed');

    console.log(fileInputImg.files[0]);

    // You can send this file over the server using FormData() (which is a built in Constructor function that creates key:value pairs
    // to send via Fetch and AJAX)
    // To add the file to formData object created from FormData() constructor, use formData.append('fileName', fileInput.files[0])
    // formData can then send the file as binary to the server using Fetch etc.

    const formData = new FormData();

    formData.append('file', fileInputImg.files[0]);

    // Now sending this file using Fetch API using POST request

    // The fetch request is a promise that RESOLVES-> an ObjectBLA
    // ObjectBLA.json() is a promise that RESOLCES-> as the JS Data Obj we want (the one that is sent from server)

    fetch('/imgsUpload',  {
        method: 'POST',
        body: formData
        })
    .then( (resolve) => resolve.json())  //  Usimg arrow function automatically returns the code. in this case returns result of resolve.json() which is a promise  
    .then( (data) => {
        console.log(data);
    })
    .catch( (err) => {
        console.log(err);
    })

});
