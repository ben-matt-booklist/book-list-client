'use strict';

var app = app || {};

console.log(app);
page('/', () => app.showOnly('.book-view'));
page('/books/new', () => app.showOnly('.form-view'));
page('/books/:book_id', (req, res) => {
  app.showOnly('.detail-view');
  $('.detail-view').empty();
  app.Book.fetchOne(req.params.book_id);
  app.adminView.verify();
});
page('/admin', () => app.adminView.initAdminPage());

page();