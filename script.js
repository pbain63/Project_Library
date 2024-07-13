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
console.log(myLibrary);
console.log(myLibrary[0]);

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numberOfPagesInput = document.getElementById("number-pages");
const readingOption = document.getElementById("reading-option");
// function onChange() {
//   const readingOption = document.getElementById("reading-option");

//   console.log(readingOption.text);
// }
// onChange();
// console.log(readingOption.text);

titleInput.addEventListener("keydown", (event) => {
  console.log(event.key);
  // event.preventDefault();
});
authorInput.addEventListener("keydown", (event) => {
  console.log(event.key);
});
numberOfPagesInput.addEventListener("keydown", (event) => {
  console.log(event.key);
});

readingOption.addEventListener("change", (event) => {
  console.log(readingOption.options[readingOption.selectedIndex].text);
});
