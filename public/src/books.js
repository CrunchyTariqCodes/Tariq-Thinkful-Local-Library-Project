//matching author with inputed author id
function findAuthorById(authors, id) {
  return findAuthor = authors.find((currentAuthor) => currentAuthor.id === id);
}
// matching book with inputed book id
function findBookById(books, id) {
  return findBo = books.find((theBooks) => theBooks.id === id);}


function partitionBooksByBorrowedStatus(books) {
  return books.reduce((a, b) => { a[+(b.borrows[0] && b.borrows[0].returned)]
    .push(b); return a }, [[],[]] )
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let {borrows} = book;
  borrows.forEach(borrow=> {
    let account = accounts.find(acc => acc.id === borrow.id);
    account['returned'] = borrow.returned;
    result.push(account);
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
