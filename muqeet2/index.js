console.log(localStorage.getItem('pen'));
if(!localStorage.getItem('asd'));

const convertedToObj = JSON.parse(
    `{
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zipcode": "10001"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "555-1234"
      },
      {
        "type": "work",
        "number": "555-5678"
      }
    ],
    "isEmployed": true,
    "skills": ["JavaScript", "Node.js", "React"]
  }`
  
  )



console.log(convertedToObj);

console.log(JSON.stringify(convertedToObj))