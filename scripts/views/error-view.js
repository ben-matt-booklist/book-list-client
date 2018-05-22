'use strict';

var app = app || {};

(function(module) {
  //Define a global variable called errorView and assign an empty object literal as it's value.
  const errorView = {};

  //Define a errorView.initErrorPage method which takes an argument of err.
  errorView.initErrorPage = function(err) {
    //Hides any element with a class of container.
    //Shows any element with a class of error-view.
    app.showOnly('.error-view');

    //Empties any content within the element with an id of error-message.
    $('#error-message').empty();

    //Compiles the Handlebars template with an id of error-template.
    //Renders the err argument to the template, and appends it to an element with an id of error-message.
    $('#error-message').append(app.render('error-template', err));
  }

})(app)

//Define a function called errorCallback which takes an error object as an argument when invoked.
errorCallback = function(err) {
  //Log the error and pass the error to the errorView.initErrorPage method.
  console.log(err);
  app.errorView.initErrorPage(err);
}