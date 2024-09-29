const showDialogBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const closeDialog = document.getElementById("dialog-close");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
  dialogForm.reset();
});

const myLibrary = [];

function Book(title, author, pages, readingStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readingStatus = readingStatus;
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numberOfPagesInput = document.getElementById("number-pages");
const readingOption = document.getElementById("reading-option");
const submitButton = document.getElementById("submit");
const dialogForm = document.getElementById("dialog-form");
// const addLibButton = document.querySelector("#submit");
// const dialogForm = document.querySelector(".dialog-form");

const bookContainer = document.querySelector(".book-cards-container");
// const showNewBookCard = document.querySelector(".new-book-items-card");
// const showNewBookTitle = document.getElementById("new-book-items-show-title");
// const showNewBookAuthor = document.getElementById("new-book-items-show-author");
// const showNewBookPages = document.getElementById("new-book-items-show-pages");
const showNewBookStatus = document.getElementById("new-book-items-show-status");
// const showNewBookRemove = document.getElementById("new-book-items-show-remove");

// console.log(myLibrary[myLibrary.length-1]);

function addBookToLibrary(title, author, pages, readingStatus) {
  const newBook = new Book(title, author, pages, readingStatus);
  myLibrary.push(newBook);

  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `${newBook.title}`;
  card.appendChild(cardTitle);

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.textContent = `${newBook.author}`;
  card.appendChild(cardAuthor);

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.textContent = `${newBook.pages}`;
  card.appendChild(cardPages);

  const cardReadingStatus = document.createElement("div");
  cardReadingStatus.classList.add("card-readingStatus");
  cardReadingStatus.textContent = `${newBook.readingStatus}`;
  card.appendChild(cardReadingStatus);

  bookContainer.appendChild(card);

  // create remove button
}

// function displayBooks() {
//   bookContainer.innerHTML = "";

//   myLibrary.forEach((book, index) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.setAttribute("data-book-num", index);

//     card.innerHTML = `
//       <div id="new-book-items-show-title">${book.title}</div>
//       <div id="new-book-items-show-author">${book.author}</div>
//       <div id="new-book-items-show-pages">${book.pages} pages</div>
//       <div id="new-book-items-show-status">${book.readingStatus}</div>

//             `;
//     bookContainer.appendChild(card);
//   });
// }

submitButton.addEventListener("click", () => {
  dialog.close();
  // dialogForm.reset();
});

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = titleInput.value;
  let author = authorInput.value;
  let pages = numberOfPagesInput.value;
  let readingStatus = readingOption.value;

  addBookToLibrary(title, author, pages, readingStatus);
  displayBooks();

  submitButton.reset();
  dialog.close();

  // displayBooks();
});

myLibrary.push(
  new Book("Crime and Punishment", "Fyodor Dostoevsky", 720, "Read")
);

displayBooks();
