class Book {
  #numofpages;
  #publicationdate;
  #price;
  coverpage = 'blue';
  constructor(numofpages, title, author, type, price, publicationdate) {
    this.#numofpages = numofpages;
    this.title = title;
    this.author = author;
    this.type = type;
    this.#price = price;
    this.#publicationdate = publicationdate;
  }

  getDetail () {
    return `The author of the book, ${this.title}, is ${this.author} and has price ${this.#getPriceinDollar()}`;
  }

  #getPriceinDollar() {
    return this.#getPrice()/80;
  }

  get title(){
    return this._title + this.coverpage;
  }

  set title(val) {
    this._title = val;
  }

  #getPrice() {
    return this.#price;
  }
}

const arifBook = new Book(899, 'Look n Like:Arif', 'Shadab', 'biography',100000, '24-02-2022');

arifBook.title = "look n lock"
console.log(arifBook.getDetail());
console.log(arifBook.title);
console.log(arifBook);