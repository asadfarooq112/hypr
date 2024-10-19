module.exports = {
    name: "John Doe",
    age: 28,
    occupation: "Software Developer",
    hobbies: ["coding", "hiking", "reading"],
    isEmployed: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm a ${this.occupation}.`);
    }
  }