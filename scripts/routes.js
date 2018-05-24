'use strict';

page('/', () => app.showOnly('.book-view'));
page('/books/new', () => app.showOnly('.form-view'));
page('/books/:book_id', (req, res) => {
  app.showOnly('.detail-view');
  $('.detail-view').empty();
  app.Book.fetchOne(req.params.book_id);
});


page();