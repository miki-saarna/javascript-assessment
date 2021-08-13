function findAuthorById(authors, id) {
  return authors.find(code => code.id === id)
}

function findBookById(books, id) {
  return books.find(code => code.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((status, book) => {
  book.borrows[0].returned ? status[1].push(book) : status[0].push(book);
  return status}, ([[], []]));
}
/*function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter(book => !book.borrows[0].returned)
  const returned = books.filter(book => book.borrows[0].returned)
  return [borrowed, returned];
}*/

/*function getBorrowersForBook({borrows}, accounts) {
  return borrows.map(borrower => {
    borrower = Object.assign(borrower, accounts.find(code => code.id === borrower.id)); 
  return borrower})
  .slice(0, 10)
}*/


//  why doesn't this work???
function getBorrowersForBook({borrows}, accounts) {
  return borrows.map(borrower => 
    ({...borrower, ...accounts.find(code => code.id === borrower.id)}))
  .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
