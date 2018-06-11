var assertEquals = require("./assert-helper");

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter",
    isAvailable: false
  }
];

/* 1. Define a function listTitles(booksArray) that takes in an array of book objects
       and returns an array of titles (strings) */
function listTitles(booksArray) {
    arrTitle = booksArray.map(obj=>obj.title);
    return arrTitle;
}

// Assertions (do not change)
assertEquals(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

/* 2. Define a function listAuthors(booksArray) that takes in an array of book objects
       and returns an array of authors (strings) */

function listAuthors(booksArray) {
  arrAuthor=booksArray.map(obj=>obj.author);
  return arrAuthor;
}

// Assertions (do not change)
assertEquals(listAuthors(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

/* 3. Define a more general function listValues(booksArray, key) that takes in an array
       of book objects and returns an array of authors (strings) */

function listValues(booksArray, key) {
  console.log('key:',key);
  listArr=booksArray.filter(function(obj,index){
    console.log('listValues key',booksArray[index].key);       
    return booksArray[index].key; });
  
}

// Assertions (do not change)
assertEquals(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
assertEquals(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

// 4. Define a function getAvailableBooks(booksArray) that returns a list of available books

function getAvailableBooks(booksArray) {
    bookAvail=booksArray.filter(obj=>obj.isAvailable).map(obj1=>obj1.title);
    return bookAvail;
    
}

// Assertions (do not change)
assertEquals(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])
