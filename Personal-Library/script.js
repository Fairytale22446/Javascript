// ✅ IndexedDB based personal library project with large PDF support + Color-Preserved UI

let db;

const request = indexedDB.open("LibraryDB", 1);

request.onerror = function (event) {
  console.error("IndexedDB Error:", event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  renderBooks();
};

request.onupgradeneeded = function (event) {
  db = event.target.result;
  db.createObjectStore("books", { keyPath: "id", autoIncrement: true });
};

document.addEventListener("DOMContentLoaded", function () {
  const addBookBtn = document.getElementById("addBookBtn");
  const bookForm = document.getElementById("bookForm");
  const bookList = document.getElementById("bookList");
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const addBookModal = document.getElementById("addBookModal");
  const pdfModal = document.getElementById("pdfModal");
  const modalCloseBtns = document.querySelectorAll(".close");
  const pdfUpload = document.getElementById("pdfUpload");

  addBookBtn.addEventListener("click", () => addBookModal.style.display = "block");
  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      addBookModal.style.display = "none";
      pdfModal.style.display = "none";
    });
  });
  window.addEventListener("click", (e) => {
    if (e.target === addBookModal) addBookModal.style.display = "none";
    if (e.target === pdfModal) pdfModal.style.display = "none";
  });

  bookForm.addEventListener("submit", handleAddBook);
  searchInput.addEventListener("input", renderBooks);
  filterSelect.addEventListener("change", renderBooks);

  function handleAddBook(e) {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genre = document.getElementById("genre").value;
    const status = document.getElementById("status").value;
    const pdfFile = pdfUpload.files[0];

    const book = {
      title,
      author,
      genre,
      status,
      createdAt: new Date().toISOString()
    };

    if (pdfFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        book.pdf = e.target.result;
        saveBook(book);
      };
      reader.readAsDataURL(pdfFile); // Using base64 encoded data
    } else {
      book.pdf = null;
      saveBook(book);
    }

    bookForm.reset();
    addBookModal.style.display = "none";
  }

  function saveBook(book) {
    const tx = db.transaction(["books"], "readwrite");
    const store = tx.objectStore("books");
    store.add(book);
    tx.oncomplete = renderBooks;
    tx.onerror = (e) => alert("Error saving book: " + e.target.error);
  }

  function renderBooks() {
    const tx = db.transaction(["books"], "readonly");
    const store = tx.objectStore("books");
    const request = store.getAll();

    request.onsuccess = function () {
      const books = request.result;
      const searchTerm = searchInput.value.toLowerCase();
      const filterValue = filterSelect.value;

      const filteredBooks = books.filter(book => {
        const matchSearch = book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
        const matchFilter = filterValue === "all" || book.status === filterValue;
        return matchSearch && matchFilter;
      });

      bookList.innerHTML = "";
      if (filteredBooks.length === 0) {
        bookList.innerHTML = '<p class="no-books">No books found.</p>';
        return;
      }

      filteredBooks.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = `book-card ${book.status}`;
        bookCard.dataset.id = book.id;
        bookCard.style.opacity = 0;
        bookCard.style.transform = 'translateY(20px)';
        bookCard.style.transition = 'all 0.3s ease';

        const statusText = book.status === "read" ? "Mark Unread" : "Mark Read";
        const pdfButton = book.pdf ? `<button class="action-btn open-btn" onclick="openPdf(${book.id})">Open PDF</button>` : '<span class="no-pdf">No PDF</span>';

        bookCard.innerHTML = `
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">By ${book.author}</p>
          ${book.genre ? `<p class="book-genre">Genre: ${book.genre}</p>` : ""}
          <div class="book-actions">
            <button class="action-btn status-btn" onclick="toggleStatus(${book.id})">${statusText}</button>
            ${pdfButton}
            <button class="action-btn delete-btn" onclick="deleteBook(${book.id})">Delete</button>
          </div>
        `;

        bookList.appendChild(bookCard);

        // Animate in
        setTimeout(() => {
          bookCard.style.opacity = 1;
          bookCard.style.transform = 'translateY(0)';
        }, 50);
      });
    };
  }

  window.toggleStatus = function (id) {
    const tx = db.transaction(["books"], "readwrite");
    const store = tx.objectStore("books");
    const getRequest = store.get(id);

    getRequest.onsuccess = function () {
      const book = getRequest.result;
      book.status = book.status === "read" ? "unread" : "read";
      store.put(book);
      tx.oncomplete = renderBooks;
    };
  };

  window.deleteBook = function (id) {
    const tx = db.transaction(["books"], "readwrite");
    const store = tx.objectStore("books");
    store.delete(id);
    tx.oncomplete = renderBooks;
  };

  window.openPdf = function (id) {
    const tx = db.transaction(["books"], "readonly");
    const store = tx.objectStore("books");
    const getRequest = store.get(id);

    getRequest.onsuccess = function () {
      const book = getRequest.result;
      if (book && book.pdf) {
        const pdfFrame = document.getElementById("pdfFrame");
        pdfFrame.src = book.pdf;
        pdfModal.style.display = "block";
      } else {
        alert("PDF not found or failed to load.");
      }
    };
  };
});
