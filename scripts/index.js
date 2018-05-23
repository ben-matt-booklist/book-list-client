'use strict';

var app = app || {};

(function(module) {
  let productionApiUrl = 'https://bt-mg-booklist.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  //Create a property called isProduction to evaluate your environment based on the browser URL.
  module.isProduction = window.location.protocol === 'https'

  //Use this property to set app.ENVIRONMENT.apiUrl.
  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  //Create a .showOnly method to reveal the containters of your single-page app
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  }

  //Create a .render method to compile your Handlebars template
  module.render = (templateId, data) => {
    let template = Handlebars.compile($(`#${templateId}`).text());
    return template(data);
  }
  
})(app)

$('.book-view').on('click', function(e){
  e.preventDefault();
  let book = app.Book.all.filter(book => book.book_id === parseInt(e.target.value))[0];
  book ? book.fetchOne() : null;
})