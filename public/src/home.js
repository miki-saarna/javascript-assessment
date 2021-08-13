function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((counter, {borrows}) => {return borrows[0].returned ? counter : ++counter}, 0)
}
function getMostCommonGenres(books) {
  const container = [];
  for (const item of books) {
    const classify = item.genre;
    const exists = container[classify];
    if(exists) {
      exists.count++;
    } else {
      container[item.genre] = {name: item.genre, count: 1}
  }
  }
  const contain = Object.values(container).sort((itemA, itemB) => (itemA.count > itemB.count ? -1 : 1));
  contain.length = 5;
  return contain;
}

function getMostPopularBooks(books) {
  const container = [];
  const rankings = books.map(classify => {
      return container[classify] = {name: classify.title, count: (classify.borrows.length)}
  })
  const assortedRankings = rankings.sort((itemA, itemB) => (itemA.count > itemB.count ? -1 : 1));
  assortedRankings.length = 5;
  return assortedRankings;
}

function getMostPopularAuthors(books, authors) {
  // console.log(getMostPopularAuthors(books, authors))
  return books.map(book => {
    const { name: {first, last}} = authors.find(author => author.id === book.authorId)
    return {
      name: `${first} ${last}`,
      count: book.borrows.length
    }
  }).sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
