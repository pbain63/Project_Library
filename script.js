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
const addLibButton = document.getElementById("submit");
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

// let titleDisplay;
// let authorDisplay;
// let pagesDisplay;
// let optionDisplay;

// console.log(myLibrary[myLibrary.length-1]);

function addBookToLibrary(title, author, pages, readingStatus) {
  const newBook = new Book(title, author, pages, readingStatus);
  myLibrary.push(newBook);
}

function displayBooks() {
  bookContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-book-num", index);

    card.innerHTML = `
      <div id="new-book-items-show-title">${book.title}</div>
      <div id="new-book-items-show-author">${book.author}</div>
      <div id="new-book-items-show-pages">${book.pages} pages</div>
      <div id="new-book-items-show-status">${book.readingStatus}</div>
          <div class="card-btn">
            <button type="button" id="new-book-items-show-status"></button>
            <button type="button" id="new-book-items-show-remove" class= "new-book-items-show-remove">Remove</button>
          </div>
           
            `;
    bookContainer.appendChild(card);
  });
}

addLibButton.addEventListener("click", () => {
  dialog.close();
  // dialogForm.reset();
});

dialogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = titleInput.value;
  let author = authorInput.value;
  let pages = numberOfPagesInput.value;
  let readingStatus = readingOption.value;

  addBookToLibrary(title, author, pages, readingStatus);
  displayBooks();

  dialogForm.reset();
  dialog.close();

  // displayBooks();
});

myLibrary.push(
  new Book("Crime and Punishment", "Fyodor Dostoevsky", 720, "Read")
);

displayBooks();

function removeBookListener(button) {
  button.addEventListener("click", (event) => {
    const selectedCard = event.target.closest(".card");

    let bookNumber = selectedCard.getAttribute("data-book-num");

    myLibrary.splice(`${bookNumber}`, 1);
    selectedCard.remove();
    displayBooks();
  });
}

const showNewBookRemove = document.querySelectorAll(
  ".new-book-items-show-remove"
);

showNewBookRemove.forEach((button) => removeBookListener(button));

// window.onload = function () {
//   displayBooks();
// };
