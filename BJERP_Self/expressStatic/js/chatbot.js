const chatbotButton = document.querySelector('.chatbot-icon');
const chatbotContainer = document.querySelector('.chatbot-container');
const cross = document.querySelector('.cross');
const promptForm = document.querySelector('.prompt-form');
const textarea = document.querySelector('#prompt');
const chatResponse = document.querySelector('.response');

chatbotButton.addEventListener('click', () => {
    chatbotContainer.style.display = 'grid';
})
cross.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
})

promptForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // Best practice is to send JSON with requests. Therefore extracting data in textarea
    // and making object. Then using JSON.stringify(obj) to send it in fetch
    const dataSend = JSON.stringify({prompt: textarea.value});

    fetch('/chatbot', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: dataSend
    })
    .then((data) => {
        const midResponse = data.json();
        midResponse.then((response) => {
            console.log(response);


            //Changing DOM text
            chatResponse.innerHTML = `text is ${response}`;

        })
    })
    



})

