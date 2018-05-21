'use strict';

var app = app || {};

(function(module) {
  const ENV = {
    protocol: window.location.protocol === 'https',  
    cloudUrl: 'https://bt-mg-booklist.herokuapp.com',
    localUrl: 'http://localhost:3000',
    url: protocol ? cloudUrl : localUrl
  };
})(app)