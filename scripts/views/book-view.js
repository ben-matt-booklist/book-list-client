'use strict';

var app = app || {};

(function(module) {
  //Define a global variable called bookView and assign an empty object literal as its value.
  const bookView = {};

  //Define a bookView.initIndexPage method which hides any element with a class of container, shows any element with a class of book-view, and maps over the Book instances stored in Book.all to render each and append them to an element with the id of book-list.
  bookView.initIndexPage = function() {
    app.showOnly('.book-view');

    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  module.bookView = bookView;
})(app)

//Using jQuery's Document.ready functionality, invoke Book.fetchAll when the DOM has loaded, and pass bookView.initIndexPage as it's argument.
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})