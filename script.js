const showDialogBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const closeDialog = document.getElementById("dialog-close");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, readingStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readingStatus = readingStatus;
  this.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.readingStatus}`;
  };
}
let newBook = new Book("Hobbit", "p", 9, "Read");
// console.log(newBook.info());
// console.log(newBook.title);

let book1 = newBook.info();
myLibrary.push(book1);

// console.log(myLibrary[0]);

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numberOfPagesInput = document.getElementById("number-pages");
const readingOption = document.getElementById("reading-option");
const addLibButton = document.getElementById("submit");
// const addLibButton = document.querySelector("#submit");
const dialogForm = document.querySelector(".dialog-form");

let showNewBookCard = document.querySelector(".new-book-items-card");
let showNewBookTitle = document.getElementById("new-book-items-show-title");
let showNewBookAuthor = document.getElementById("new-book-items-show-author");
let showNewBookPages = document.getElementById("new-book-items-show-pages");
let showNewBookStatus = document.getElementById("new-book-items-show-status");
let showNewBookRemove = document.getElementById("new-book-items-show-remove");

let titleDisplay;
let authorDisplay;
let pagesDisplay;
let optionDisplay;

// titleInput.addEventListener("keydown", (event) => {
  // titleDisplay = event.key;
  // showNewBook.innerText = titleInput.value;
  // title = event.key;
  // console.log(titleDisplay);
  // event.preventDefault();
// });
// console.log(title.id);

// authorInput.addEventListener("keydown", (event) => {
  // authorDisplay = event.key;
  // console.log(authorDisplay);
// });

// numberOfPagesInput.addEventListener("keydown", (event) => {
  // pagesDisplay = event.key;
  // console.log(pagesDisplay);
  // addBookToLibrary();
// });

// readingOption.addEventListener("change", (event) => {
//   optionDisplay = readingOption.options[readingOption.selectedIndex].text;
  // console.log(optionDisplay);
// });

// addLibButton.addEventListener("click", (event) => {
  // showNewBook.textContent = titleInput.value;//this doesn't work
  // showNewBook.textContent = authorInput.value; // only this works
// });

dialogForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let formdata = new FormData(this); // e.target

  let titleInputGet = formdata.get("title");
  let authorInputGet = formdata.get("author");
  let pagesInputGet = formdata.get("number-page");
  let readingOptionGet = formdata.get("book");

  function BookDialog(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
  }
  const newBookDialog = new BookDialog(
    titleInputGet,
    authorInputGet,
    pagesInputGet,
    readingOptionGet
  );
  // console.log(newBookDialog);

  myLibrary.push(newBookDialog);

  showNewBookTitle.textContent = `" ${newBookDialog.title} "`;
  showNewBookAuthor.textContent = `by ${newBookDialog.author}`;
  showNewBookPages.textContent = `${newBookDialog.pages} pages`;
  showNewBookStatus.textContent = `${newBookDialog.readingStatus}`;

  // console.log(myLibrary[myLibrary.length-1]);
  addBookToLibrary();
});

function addBookToLibrary() {
  console.log(title.value);
  console.log(author.value);
  console.log(readingOption.options[readingOption.selectedIndex].text);
  console.log(pagesDisplay); // only last digit show

  myLibrary.map((x) => console.log(x));
}
// myLibrary.map((x) => console.log(x));