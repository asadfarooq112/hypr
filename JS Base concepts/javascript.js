
/// Function returning Funciton

function outFunc (divisor) {
    return function (num) {
            return (num % divisor ==0);
    }
} 

let varOut = outFunc(7);

console.log(varOut(21));

 //Methods

 let obj = {
    name: 'Asad',
    age: 28,
    method1: function (n1,n2) {
            return (n1/n2);
    },

    methodSyntax2(n1,n2) {
        return (n2/n1);
    }
    }
    
 

console.log(obj.method1(5,2));
console.log(obj.methodSyntax2(5,2));


let func1 = function(numm) {
    console.log(this);
    
}

func1(5); 

/// arrow functino to add line in console

const line = () => console.log('----------------------');


////////////////////
line();

//arrow function in an arrow function that Filters the input Array

const validUserNames = usernames => (usernames.filter(item => item.length <10));

line();


let obj2 = {
    key1 :1,
    key2 :2,
    key3 :3,
    key4 :4 
}

//using Deconstructor

let {key1, key2, key3 : newNameForKey3, key5 = 15} = obj2;

console.log(key1);
console.log(key2);
console.log(newNameForKey3);
console.log(key5);

///////
line();
////////////

let ar2= [1,2,3,4,5,6,7,8,9];

let funcArgArray = function (array) {
    console.log(array[0], array[2], array[4]);
}

funcArgArray(ar2);


////Using Deconstucting of Array Arguments

let funcArgArray2 = function ([first,second,third, fourth, fifth, ...rest]) {
    console.log(first, third, fifth, rest);
}

funcArgArray2(ar2);

////
line();
///

/// Using Deconstructing of Object Arguments

let obj5 = {
    key1: 'a',
    key2: 'b',
    key3: 'c',
    key4: 'd'
}   

let funcArgObject = function ({key1, key2, key4 : newVarKey4, key8 = 'z'}) {
    console.log(key1);
    console.log(key2);
    console.log(newVarKey4);
    console.log(key8)
}

funcArgObject(obj5);


line();


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:

///Changing color of each span element
document.querySelectorAll('span').fontSize = '3em';
let allSpans = document.querySelectorAll('span');

console.log(allSpans);

//Using FOR LOOP (better since two iteratables so we can use i value)
for (let i = 0; i < allSpans.length; i++) {
    allSpans[i].style.color = colors[i];
}


// Using FOR OF LOOP (incorporating i so we can interate array indexes)
let i = 0;
for (let eachSpan of allSpans) {
    
    eachSpan.style.color = colors[i];
    i++;
}

console.log(allSpans[3].getAttribute('class'));


console.log(allSpans[3].classList);

console.log(allSpans[3].classList[1]);




// WRITE YOUR CODE IN HERE:

for (i=0; i < 100 ; i++) {
    var button = document.createElement('button');
    button.innerHTML = 'hi';
    document.querySelector('#container').appendChild(button);
    }
let newP = document.createElement('p');

newP.append('--------------------------------------------');

button.after(newP);
///////////////////////////////


for (let i=0; i < 50; i++) {
    let pokemon = document.createElement('img');
    pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`;
    pokemon.style.width = '60px';
    pokemon.style.height = '60px';
    newP.after(pokemon);
    pokemon.setAttribute('class', 'pokemonClass');
    
}
///////////New Line placed after Div

let newLine = document.createElement('p');
newLine.innerText = '---------------------------------------------';
document.querySelector('#container').after(newLine);

//////////////// Button that changes background color randomly on each click

let newButton = document.createElement('button');
newButton.innerText = 'Background color changer';
newLine.after(newButton);

newButton.addEventListener('click', function () {
    document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

})

/////////////////////////// Note: everytime you must create a new element for line, otherwise it wil just change location of old line.
let newLine1 = document.createElement('p');
newLine1.innerText = '---------------------------------------------';
newButton.after(newLine1);

//// Using THIS inside FUNCTION of addEventListener refers to the Object on which addEventListener is called

let funcColorRed = function() {
    this.style.color = 'red';
}

newButton.addEventListener('dblclick', funcColorRed);

////////////

let allPokemons = document.querySelectorAll('.pokemonClass');
console.log(allPokemons);


let formObj = document.querySelector('#form1');
let inputObj = document.querySelector('#randomize');

inputObj.value = 100;

let clickCount = 1;
var id1;

formObj.addEventListener('submit', function (event) {
    event.preventDefault();


    id1 = setInterval(action, parseInt(inputObj.value));

    function action () {

        for (let i = 0; i < allPokemons.length; i++) {
            allPokemons[i].style.position = 'relative';
            allPokemons[i].style.top = `${Math.random() *200}px`;
            allPokemons[i].style.right = `${Math.random() *200}px`;


        }

    }
    
    inputObj.value = '';
    
    
})

let newButton1 = document.createElement('button');
newButton1.innerText = 'Stop It!';
formObj.after(newButton1);

newButton1.onclick = function () {
    clearInterval(id1);
}



/////Form that makes new li Elements

const formObj2 = document.querySelector('#form2');

let ul1 = document.querySelector('#list');
let input1 = document.querySelector('#product');
let input2 = document.querySelector('#qty');

formObj2.addEventListener('submit', function(e) {
    e.preventDefault();
    let liElement = document.createElement('li');
    liElement.innerText = `${input1.value} ${input2.value}`;
    ul1.append(liElement);
    input1.value = "";
    input2.value = "";
});
//////////////////


let inputObj1 = document.querySelector('#username');
let h1Obj = document.querySelector('#idH1');

inputObj1.addEventListener('input', function () {
    h1Obj.innerText = `Welcome ${inputObj1.value}`;

    if (inputObj1.value == "") {
        h1Obj.innerText = 'Enter Your Username';
    }
   
})












