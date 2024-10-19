/// See promises and Async files in computer and read them to refresh PreReq knowledge for this

let jsonData = `{"count":21,"name":"meelad","age":34}`;

//To convert JSON to JS Object:

let jsObject = JSON.parse(jsonData);

console.log(jsObject);

console.log(jsObject.count);

//To convert JS Object to JSON:

let jsonDataAgain = JSON.stringify(jsObject);

console.log(jsonDataAgain);


//FETCH

// Fetch -> returns promise -> who's resolve is an object. resolve.json returns another promise (nxt line)
// who's resolve it the JS Object (converted form JSON)

//e.g

fetch("https://swapi.dev/api/people/1")
    .then( (resolve) => {
        //here resolve is an OBJECT (since fetch always resolves an object)

        let resObj = resolve.json();
        //here .json is a METHOD on the resolve OBJECT that gives a Promise
        //the Promise resolve.json() is placed in a variable resObj

        resObj.then ((resolve2) => {
            //the resolve of resolve.json() object is now finally the JS Object we want (converted from JSON)
            
            console.log(resolve2);
        });
    })
    .catch( (err) => {
        console.log(err);
    })

    
    //Trying without comments bullshit

    fetch('https://swapi.dev/api/people/2')
        .then( (res1) => {
            res1.json()
                .then( (res2) => {
                    console.log(res2);
                })
        })
        .catch( (err) => {
            console.log(err);
        })

//Note: above I didnt add res1.json promise in a variable, just directly resolved it with .then below it

//To make multiple requests, (or to avoid nesting in the above simple request) you can (nxt line)
//return the fetch(url2) promise in .then to  avoid nesting (like studied before)

fetch('https://swapi.dev/api/people/1')
 .then( (res1) => {
    return res1.json();
    //returning the promise res1.json instead of resolving with .then right here to avoid nesting
 })
 .then( (data1) => {
    console.log(data1.height);
    return fetch('https://swapi.dev/api/people/2')
    //Note: we are returning the second fetch to avoid nesting
 })
.then( (res2) => {
    return res2.json();
})
.then( (data2) => {
    console.log(data2.height);
})


 .catch( (err) => {
    console.log(err);
 })




// We can also use AWAIT to simplify the code even more (we dont need .then if using AWAIT)

//---1) Resolve the Promise fetch(url_bla) with await prefix (due to syntax)
//(remember if AWAIT word is used before a promise the whole expression automatically returns the resolve)

//---2) store the resolve from the 'await fetch(url_bla)' Promise in a variable e.g res1
//---3) resolve the Promise var1.json() and store it in data1 


///And finally to ERROR CATCH with AWAIT keyword, use try catch on outerAsyncFunc();

let outerAsyncFunc = async function() {

    try{

    let res1 = await fetch('https://swapi.dev/api/people/1');
    let data1 = await res1.json();
    console.log(data1.name);

    let res2 = await fetch('https://swapi.dev/api/people/2');
    let data2 = await res2.json();
    console.log(data2.name);

    let res3 = await fetch('https://swapi.dev/api/people/3');
    let data3 = await res3.json();
    console.log(data3.name);

    let res4 = await fetch('https://swapi.dev/api/people/4');
    let data4 = await res4.json();
    console.log(data4.name);

    }

    catch (err) {
        console.log(err);
    }

}


outerAsyncFunc();

///Using the AXIOS library makes the syntax even easier

//1) axios.get('url1') is a Promise
//2) When resolved, it gives the resolve which is an object
//3) resolve.data is gives the JS Object converted from JSON

//In summary: axios.get('url1') -> resolve.data

//E.g

axios.get('https://api.tvmaze.com/shows/169')
.then( (res1) => {
    console.log(res1.data);
    //res1.data is directly the JS Object
    return axios.get('https://api.tvmaze.com/shows/170');
})
.then( (res2) => {
    console.log(res2.data);
})
.catch( (err) => {
    console.log(err);
})

//Using AWAIT

let outerAsyncFuncForAxios = async function() {

    try{

    let res1 = await axios.get('https://api.tvmaze.com/shows/172');
    console.log(`The show name is: ${res1.data.name}`);
    let res2 = await axios.get('https://api.tvmaze.com/shows/176');
    console.log(`The show name is: ${res2.data.name}`);
    let res3 = await axios.get('https://api.tvmaze.com/shows/174');
    console.log(`The show name is: ${res3.data.name}`);
    let res4 = await axios.get('https://api.tvmaze.com/shows/175');
    console.log(`The show name is: ${res4.data.name}`);

    }

    catch (err)  {
        console.log('Tv show finding error');
    }
}



outerAsyncFuncForAxios();

/// Adding headers using AXIOS (some APIs need us to specify headers)
// Method: axios.get('url1', configObj). configObj is an object which contains the header object and
// header key:value pairs.--->  {headers:{ke1 : value1 , key2 : value2}   --- headers with an 's'  

// Below example icanhazdadjoke.com API requires us to use Header called 'Accept' & value 'application/json'
let configObj1 = {headers: {Accept: 'application/json'}};

axios.get('https://icanhazdadjoke.com/', configObj1)
.then((resObj) => {
    console.log(resObj.data);
    console.log(resObj.data.joke);
})

