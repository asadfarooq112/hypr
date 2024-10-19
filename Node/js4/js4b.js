module.exports = {
    make: "Tesla",
    model: "Model S",
    year: 2023,
    isElectric: true,
    features: ["autopilot", "panoramic sunroof", "heated seats"],
    start: function() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
  };