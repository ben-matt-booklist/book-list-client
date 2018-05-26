'use strict';

var app = app || {};

(function(module) {

  const adminView = {}; 

  adminView.initAdminPage = function() {
    //shows the admin view and has a form field for entering the passphrase.
    app.showOnly('.admin-view');
  };

  adminView.passphrase = 'wrongpassword';

  adminView.verify = function() {
    $.get(`${app.ENVIRONMENT.apiUrl}/admin/${adminView.passphrase}`)
      .then(response => {
        if (response) {
          $('#login').hide();
          $('.admin-only').show();
        } else { $('.admin-only').hide()}
      })
      .catch(console.error);
  };

  module.adminView = adminView;
})(app);

$('#admin-form').on('submit', function(e){
  e.preventDefault();
  app.adminView.passphrase = $('#passphrase').val();
  app.adminView.verify();
  if ($('#login').is(':hidden')){
    alert('login successful');
    app.showOnly('.book-view');
  }
});