function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((currentlyBorrowed, book) => {
    let borrowed = book.borrows[0].returned;
    if (borrowed === false) {
      currentlyBorrowed++;
    }
    return currentlyBorrowed;
  }, 0);
}

function getMostCommonGenres(books) {
  let countGenres = books.reduce((acc, {genre}) =>{
    acc[genre] ? acc[genre] += 1 : acc[genre] = 1;
    return acc
  }, {});
  let sortedGenres = _sortObjectByValues(countGenres);
  let sorted = sortedGenres.map((key) => ({name: key, count: countGenres[key]})).slice(0,5);
  return sorted;
}



function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => {
    return {name: book.title, count:book.borrows.length};
  }).sort(function (bookA, bookB){
    return bookB.count - bookA.count
  });
 return popularBooks.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let mostPopAuthors = books.reduce((popAuthors, {authorId, borrows})=> {
    let authorObject = authors.find((author)=> author.id === authorId);
    let name = `${authorObject.name.first} ${authorObject.name.last}`
    if  (popAuthors[authorId]) {
      popAuthors[name] += borrows.length
    } else {
      popAuthors[name] = borrows.length
    }
    return popAuthors
  }, {});
  let sortedAuthors = _sortObjectByValues(mostPopAuthors);
  return sortedAuthors.map((key) => ({name: key , count: mostPopAuthors[key]})).slice(0,5);
}

//helper function for sorting objects
function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if(obj[keyA] > obj[keyB]) {
      return -1;
    } else if(obj[keyB] > obj[keyA]) {
      return 1;
    }
    return 0;
  });
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
