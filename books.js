const defaultBooks = [
  { id: 1, title: "Atomic Habits", author: "James Clear", available: true },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 3, title: "Introduction to Algorithms", author: "Thomas H. Cormen", available: true },
  { id: 4, title: "Data Structures and Algorithms Made Easy", author: "Narasimha Karumanchi", available: true },
  { id: 5, title: "Operating System Concepts", author: "Abraham Silberschatz", available: true },
  { id: 6, title: "Computer Networks", author: "Andrew S. Tanenbaum", available: true },
  { id: 7, title: "Database System Concepts", author: "Abraham Silberschatz", available: true },
  { id: 8, title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", available: true },
  { id: 9, title: "The Pragmatic Programmer", author: "Andrew Hunt", available: true },
  { id: 10, title: "Design Patterns", author: "Erich Gamma", available: true },
  { id: 11, title: "Python Crash Course", author: "Eric Matthes", available: true },
  { id: 12, title: "You Don’t Know JS", author: "Kyle Simpson", available: true }
];
let books = JSON.parse(localStorage.getItem("books")) || [];
defaultBooks.forEach(defaultBook => {
  const exists = books.some(book => book.id === defaultBook.id);
  if (!exists) {
    books.push(defaultBook);
  }
});
localStorage.setItem("books", JSON.stringify(books));
const container = document.getElementById("booksContainer");
const searchInput = document.getElementById("search");
function displayBooks(bookList) {
  container.innerHTML = "";
  if (bookList.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>No books found</p>";
    return;
  }
  bookList.forEach(book => {
    container.innerHTML += `
      <div class="book">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Status:</strong> ${book.available ? "Available" : "Issued"}</p>
        <button 
          onclick="issueBook(${book.id})"
          ${!book.available ? "disabled" : ""}>
          ${book.available ? "Issue Book" : "Issued"}
        </button>
      </div>
    `;
  });
}
displayBooks(books);
if (searchInput) {
  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value)
    );

    displayBooks(filteredBooks);
  });
}