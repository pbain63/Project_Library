const bookContainer = document.querySelector(".book-cards-container");
const dialog = document.getElementById("dialog");
const submitButton = document.getElementById("submit");

const showDialogBtn = document.getElementById("show-dialog");
// const dialog = document.getElementById("dialog");
const closeDialog = document.getElementById("dialog-close");
const dialogForm = document.getElementById("dialog-form");


showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
  dialogForm.reset();
});

const myLibrary = [];

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("number-pages").value;
  const readingStatus = document.getElementById("reading-option").value;
  // console.log(readingStatus);
  

  dialog.close();
  dialogForm.reset();
  // dialog.style.display ='none';
  addBookToLibrary(title, author, pages, readingStatus);
});

function Book(title, author, pages, readingStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readingStatus = readingStatus;
}

// const titleInput = document.getElementById("title");
// const authorInput = document.getElementById("author");
// const numberOfPagesInput = document.getElementById("number-pages");
// const readingOption = document.getElementById("reading-option");
// const submitButton = document.getElementById("submit");
// const dialogForm = document.getElementById("dialog-form");
// const addLibButton = document.querySelector("#submit");
// const dialogForm = document.querySelector(".dialog-form");

// const bookContainer = document.querySelector(".book-cards-container");
// const showNewBookCard = document.querySelector(".new-book-items-card");
// const showNewBookTitle = document.getElementById("new-book-items-show-title");
// const showNewBookAuthor = document.getElementById("new-book-items-show-author");
// const showNewBookPages = document.getElementById("new-book-items-show-pages");
// const showNewBookStatus = document.getElementById("new-book-items-show-status");
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
  cardPages.textContent = `${newBook.pages} pages`;
  card.appendChild(cardPages);

  // const cardReadingStatus = document.createElement("div");
  // cardReadingStatus.classList.add("card-readingStatus");
  // cardReadingStatus.textContent = `${newBook.readingStatus}`;
  // card.appendChild(cardReadingStatus);

  bookContainer.appendChild(card);

  // create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-book");
  card.appendChild(removeButton);

  // create reading status button
  const readButton = document.createElement("button");
  // readButton.textContent = newBook.readingStatus ? "Read" : "Want ro read";
  readButton.textContent = `${readingStatus}`;
  // readButton.textContent = "Want to read";
  readButton.classList.add("reading-status");
  card.appendChild(readButton);

  // event for reading status button
  readButton.addEventListener("click", () => {
    if (readButton.textContent === "Want to read") {
      readButton.textContent = "Read";
      readButton.style.backgroundColor = "lightGreen";
      // newBook.readingStatus = false;
    } else if (readButton.textContent === "Read") {
      readButton.textContent = "Reading";
      // newBook.readingStatus = false;
      readButton.style.backgroundColor = "aqua";
    } else if (readButton.textContent === "Reading") {
      readButton.textContent = "Want to read";
      // newBook.readingStatus = true;
      readButton.style.backgroundColor = "lightBlue";
    } else if (readButton.textContent === "Reading status") {
      readButton.textContent = "Read";
      // newBook.readingStatus = true;
      readButton.style.backgroundColor = "lightGreen";
    }
    // newBook.readingStatus = "true";
    //
  });

  // event for remove book button
  removeButton.addEventListener("click", () => {
    removeBook(newBook);
    card.remove();
  });
}
// remove book function
function removeBook(book) {
  const bookIndex = myLibrary.indexOf(book);
  if (bookIndex > -1) {
    myLibrary.splice(bookIndex, 1);
  }
}

// function to loop through library
function loopLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title);
    //
  }
}

addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 720, "Want to read");
loopLibrary();

