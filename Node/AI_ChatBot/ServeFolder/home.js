const loginPopupCSObj = document.querySelector('.login-popup-CS');
const loginPopupCSXObj = document.querySelector('.login-popup-CSX');
const loginPopupXCallObj = document.querySelector('.login-popup-XCall');

const closeButtonObj = document.querySelectorAll('.close-btn');

closeButtonObj.forEach( closeButtonElement => {

closeButtonElement.addEventListener('click', () => {
    loginPopupCSObj.style.display = 'none';
    loginPopupCSXObj.style.display = 'none';
    loginPopupXCallObj.style.display = 'none';
})
});

const useCSObj = document.querySelector('.use-button-CS');
const useCSXObj = document.querySelector('.use-button-CSX');
const useXCallObj = document.querySelector('.use-button-XCall');


// Since we want this behavior for all Use buttons, we do querySelectorAll,
// It gives us an array and we then use Array.forEach(element => {bla bla})
// to addEventListener to All Use buttons

useCSObj.addEventListener('click', () => {
        loginPopupCSObj.style.display = 'block'
});

useCSXObj.addEventListener('click', () => {
    loginPopupCSXObj.style.display = 'block'
});

useXCallObj.addEventListener('click', () => {
    loginPopupXCallObj.style.display = 'block'
});
