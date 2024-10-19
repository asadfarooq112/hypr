const buttonObj = document.querySelector('button');

buttonObj.addEventListener('click', () =>{
    
    const pObj = document.createElement('p');
    pObj.innerText = 'Your login credentials created. Go to home to login into any Agent!';
    pObj.style.fontWeight = 'bold';
    buttonObj.after(pObj);

    const linkObj = document.querySelector('a');
    
    setInterval( () => {
        if (linkObj.style.backgroundColor == 'white') {
            linkObj.style.backgroundColor = '#1200d4';
            linkObj.style.color = 'white';
        }
        else {
            linkObj.style.backgroundColor = 'white';
            linkObj.style.color = '#1200d4';
        }
    }, 400);

})


