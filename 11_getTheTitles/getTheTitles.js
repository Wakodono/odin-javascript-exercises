const getTheTitles = function(books) {
    let titles = [];
    books.forEach(book => {
        titles.push(book.title);
    });

    return titles;
};

const getTheTitlesSolution = function(books) {
    return books.map(book => book.title);
}

// Do not edit below this line
module.exports = {getTheTitles, getTheTitlesSolution};
