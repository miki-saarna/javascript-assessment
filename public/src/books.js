function findById(input, id) {
  return input.find(code => code.id === id)
}

function findAuthorById(authors, id) {
  return findById(authors, id)
}

function findBookById(books, id) {
  return findById(books, id)
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((status, book) => {
  book.borrows[0].returned ? status[1].push(book) : status[0].push(book);
  return status}, ([[], []]));
}

function getBorrowersForBook({borrows}, accounts) {
  return borrows.map(borrower => 
    ({...borrower, ...accounts.find(code => code.id === borrower.id)})) // careful not to use [] brackets. Have to pay attention when using spread operator on array or object
  .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
