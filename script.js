const bookContainer = document.querySelector(".book-cards-container");
const dialog = document.getElementById("dialog");
const submitButton = document.getElementById("submit");
const showDialogBtn = document.getElementById("show-dialog-btn");
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

  dialog.close();
  dialogForm.reset();

  addBookToLibrary(title, author, pages, readingStatus);
});

// Converted to class
class Book {
  constructor(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
  }
}

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
  cardAuthor.textContent = `by ${newBook.author}`;
  card.appendChild(cardAuthor);

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.textContent = `${newBook.pages} pages`;
  card.appendChild(cardPages);

  bookContainer.appendChild(card);

   // create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-book");
  removeButton.style.backgroundColor = "orange";
  card.appendChild(removeButton);

  const readButton = document.createElement("button");
  readButton.textContent = `${readingStatus}`;
  readButton.classList.add("reading-status");
  card.appendChild(readButton);

  readButton.addEventListener("click", () => {
    if (readButton.textContent === "Want to read") {
      readButton.textContent = "Read";
      readButton.style.backgroundColor = "lightGreen";
    } else if (readButton.textContent === "Read") {
      readButton.textContent = "Reading";
      readButton.style.backgroundColor = "aqua";
    } else if (readButton.textContent === "Reading") {
      readButton.textContent = "Want to read";
      readButton.style.backgroundColor = "lightBlue";
    } else if (readButton.textContent === "Reading status") {
      readButton.textContent = "Read";
      readButton.style.backgroundColor = "lightGreen";
    }
  });

  removeButton.addEventListener("click", () => {
    removeBook(newBook);
    card.remove();
  });
}

function removeBook(book) {
  const bookIndex = myLibrary.indexOf(book);
  if (bookIndex > -1) {
    myLibrary.splice(bookIndex, 1);
  }
}

function loopLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title);
  }
}

addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 720, "Reading");
loopLibrary();
