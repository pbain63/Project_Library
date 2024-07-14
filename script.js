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
const newBook = new Book("Hobbit", "p", 9, "Read");
// console.log(newBook.info());
// console.log(newBook.title);

let book1 = newBook.info();
myLibrary.push(book1);
// console.log(myLibrary);
console.log(myLibrary[0]);

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numberOfPagesInput = document.getElementById("number-pages");
const readingOption = document.getElementById("reading-option");
const addLibButton = document.querySelector("#submit");

let showNewBook = document.getElementById("new-book-items-show");

let titleDisplay;
let authorDisplay;
let pagesDisplay;
let optionDisplay;

titleInput.addEventListener("keydown", (event) => {
  titleDisplay = event.key;
  // showNewBook.innerText = titleInput.value;
  // showNewBook.innerText = `${titleInput.value }`;
  // title = event.key;
  console.log(titleDisplay);
  // event.preventDefault();
});
// console.log(title.id);

authorInput.addEventListener("keydown", (event) => {
  authorDisplay = event.key;
  console.log(authorDisplay);
});
numberOfPagesInput.addEventListener("keydown", (event) => {
  pagesDisplay = event.key;
  console.log(pagesDisplay);
});

readingOption.addEventListener("change", (event) => {
  optionDisplay = readingOption.options[readingOption.selectedIndex].text;
  console.log(optionDisplay);
});

addLibButton.addEventListener("click", (event) => {
  // showNewBook.textContent = titleInput.value;//this doesn't work
  // showNewBook.textContent = authorInput.value; // only this works
});
function addBookToLibrary() {}
