document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('formContainer').classList.add('hidden');
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const booksGrid = document.getElementById('BooksGrid');
    booksGrid.innerHTML = ''; // reset grid before displaying
    
    myLibrary.forEach((book, index) =>  {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', index);

        const title = document.createElement('p');
        title.textContent = `"${book.title}"`;

        const author = document.createElement('p');
        author.textContent = book.author;

        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;

        const readBtn = document.createElement('button');
        readBtn.textContent = book.isRead ? 'Read' : 'Not Read';
        readBtn.classList.add(book.isRead ? 'btn-light-green' : 'btn-light-red');
        readBtn.onclick = () => toggleReadStatus(index);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeBook(index);

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(removeBtn);

        booksGrid.appendChild(bookCard);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Handle form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    addBookToLibrary(title, author, pages, isRead);
    document.getElementById('formContainer').classList.add('hidden');
});

// Show form when "New Book" button is clicked
document.getElementById('newBookBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
});

// list fluff:
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
displayBooks();