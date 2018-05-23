'use strict';

var app = app || {};

(function(module) {
  //Define a constructor function called Book which takes an object literal as an argument.
  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  //Define a Book.toHtml method that compiles the Handlebars template with an id of book-list-template, and return the template with that instance's content.
  Book.prototype.toHtml = function() {
    return app.render('book-list-template', this);
  }

  //Define a Book.all property and assign an empty array as it's value.
  Book.all = [];

  //Define a Book.loadAll method which takes rows as an argument and sorts rows by title, maps over rows to create an array of Book instances, and assigns the new array of Books to Book.all.
  Book.loadAll = rows => {
    console.log(rows);
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
  }

  //Define a function called errorCallback which takes an error object as an argument when invoked.
  function errorCallback(err) {
    //Log the error and pass the error to the errorView.initErrorPage method.
    console.log(err);
    app.errorView.initErrorPage(err);
  }

  //Define a Book.fetchAll method which takes callback as an argument and makes a request to the API at GET: /api/v1/books.
  Book.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then((data => Book.loadAll(data)))
      .then(callback)
      .catch(errorCallback);
  }

  Book.prototype.fetchOne = function(callback) {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${this.book_id}`)
    .then((data => Book.loadAll(data)))
    .then(callback)
    .catch(errorCallback);
  }
  
  module.Book = Book;
})(app)