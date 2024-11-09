// you can stqrt a new project and automatically create the package.json file by using the command 'npm init'

const figlet = require('figlet');

figlet("Asad DADAss!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });


  let franc = require('franc');
  let langs = require('langs');

  // franc('text of language') outputs a three letter string referreing to the language. e.g nld for Dutch
  // to convert nld to Dutch full word, using langs module

  console.log(process.argv[2]);
  // we can also get user input in terminal as a string and put it in franc using franc(process.argv[2])

  console.log(franc('ik ben een nederlander en ik spreek alleen nederlandse allemaal altijd'));

  let langsObj = langs.where('3', franc('ik ben een nederlander en ik spreek alleen nederlandse allemaal altijd'));

  console.log(langsObj.name);



