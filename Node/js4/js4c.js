module.exports = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genres: ["Fiction", "Classics"],
    isAvailable: true,
    getSummary: function() {
      return `${this.title}, written by ${this.author}, is a classic novel published in ${this.publishedYear}.`;
    }
  };