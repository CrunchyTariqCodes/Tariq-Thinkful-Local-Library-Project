function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id)
}

function sortAccountsByLastName(accounts) {
   return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1 )
                        }

function getTotalNumberOfBorrows(account, books) {
  const { id: acctId } = account;

  return books.reduce((acc, book) => {
    return (
      acc + book.borrows.filter(borrow => borrow.id === acctId)
      .reduce((accountBorrows, borrow) => accountBorrows + 1, 0));
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksTakenOut = [];
      books.forEach(book => {
        if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
          booksTakenOut.push(book);
        }
      })
      console.log(booksTakenOut);
      booksTakenOut.forEach(book => {
        let authorName = authors.find(author => author.id === book.authorId);
        book['author'] = authorName;
      })
      console.log(booksTakenOut);
      return booksTakenOut;
    }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
