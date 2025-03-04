const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead){
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayBooks() {
    const BooksGrid = document.getElementById('BooksGrid');
    BooksGrid.innerHTML = ''; // reset grid before displaying
    
    myLibrary.forEach((book, index) =>  {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', index);

        const title = document.createElement('p');
        title.textContent = '"${book.title}"';

        const author = document.createElement('p');
        author.textContent = book.author;

        const pages =  documents.createElement('p');
        pages.textContent = '${book.pages} pages';

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

        BooksGrid.appendChild(bookCard);
    });
    }

    function toggleReadStatus(index) {
        myLibrary[index].isRead = !myLibrary[index].isRead;
        displayBooks();
    }


//form submision
document.getElementById('book-form').addEventListener('submit', function(event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').ariaChecked;
    addBookToLibrary(title, author, pages, isRead);
    document.getElementById(formContainer).classList.remove('hidden');
});

//show form when button is clicked
document.getElementById('newBookBtn').addEventListener('click', function(){
    document.getElementById('formContainer').classList.remove('hidden');   
});


    //built in books
    addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
    addBookToLibrary('1984', 'George Orwell', 328, false);
    displayBooks();

