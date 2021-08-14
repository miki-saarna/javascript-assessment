const books = require('../data/books')

function findAccountById(accounts, id) {
  return accounts.find(code => code.id === id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((personA, personB) => personA.name.last.toLowerCase() < personB.name.last.toLowerCase() ? -1 : 1);
};

function getObjOfBorrows(books) {
  return [].concat.apply([], (books.map(book => book = book.borrows))) // found this solution through research, but would love to find an easier way to 'break' arrays
}

function getTotalNumberOfBorrows( {id}, books) {
  let merged = getObjOfBorrows(books) // using getObjOfBorrows as a helper function
  return merged.reduce((count, book) =>  {return book.id === id ? ++count : count}, 0);
}

function getBooksPossessedByAccount( { id }, books, authors) { 
  return books.filter(book => {
    book.author = authors.find(author => author.id === book.authorId);
    return book.borrows.some(borrow => borrow.id === id && !borrow.returned)
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
