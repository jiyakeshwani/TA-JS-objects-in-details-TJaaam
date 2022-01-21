class BookList {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  addBook(book) {
    this.arr.push(book);
  }
  getCurrentBook() {
    return this.arr[this.index];
  }
  getNextBook() {
    return this.index + 1;
  }
  getPrevBook() {
    return this.index - 1;
  }
  changeCurrentBook(currentI) {
    this.index == currentI;
    return this.index;
  }
}

class Book {
  constructor(Title, Category, Author, isRead = false, finishedDate) {
    this.Title = Title;
    this.Category = Category;
    this.Author = Author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

let book1 = new Book("Harry Potter", "fiction", "J.k Rowling");
let book2 = new Book(`A Game of Thrones`, `Fantasy`, `George R.R. Martin`);
let book3 = new Book("The Three Musketeers", "adventure", "Alexandre Dumas");
let booklist = new BookList();

booklist.addBook(book1, book2, book3);
