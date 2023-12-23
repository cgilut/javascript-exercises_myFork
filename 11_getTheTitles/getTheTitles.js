const getTheTitles = function(getTitle) {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]

    let arrayTitles = []
    for (let i = 0; i < books.length; i++) {
        arrayTitles = books.map(bookTitle => bookTitle.title)
    }
    return arrayTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
