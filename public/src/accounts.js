function findAccountById(accounts, id) {
  return accounts.find(code => code.id === id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((personA, personB) => personA.name.last.toLowerCase() < personB.name.last.toLowerCase() ? -1 : 1);
};

function getTotalNumberOfBorrows(account, books) {
  let borrowInfo = books.map(idArray => idArray = idArray.borrows)
  let merged = [].concat.apply([], borrowInfo);
  return merged.reduce((count, book) =>  {return book.id === account.id ? ++count : count}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account;
  return books.filter(book => {
    book.author = authors.find(author => author.id === book.authorId);
    return book.borrows.some(borrow => borrow.id === id && !borrow.returned)// why can't I use borrow[0].returned?
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
