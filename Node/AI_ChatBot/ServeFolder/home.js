const loginPopupCSObj = document.querySelector('.login-popup-CS');
const loginPopupXObj = document.querySelector('.login-popup-X');
const loginPopupOmniObj = document.querySelector('.login-popup-Omni');

const closeButtonObj = document.querySelectorAll('.close-btn');

closeButtonObj.forEach( closeButtonElement => {

closeButtonElement.addEventListener('click', () => {
    loginPopupCSObj.style.display = 'none';
    loginPopupXObj.style.display = 'none';
    loginPopupOmniObj.style.display = 'none';
})
});

const useCSObj = document.querySelector('.use-button-CS');
const useXObj = document.querySelector('.use-button-X');
const useOmniObj = document.querySelector('.use-button-Omni');


// Since we want this behavior for all Use buttons, we do querySelectorAll,
// It gives us an array and we then use Array.forEach(element => {bla bla})
// to addEventListener to All Use buttons

useCSObj.addEventListener('click', () => {
        loginPopupCSObj.style.display = 'block'
});

useXObj.addEventListener('click', () => {
    loginPopupXObj.style.display = 'block'
});

useOmniObj.addEventListener('click', () => {
    loginPopupOmniObj.style.display = 'block'
});
