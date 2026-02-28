function issueBook(id) {
  let books = JSON.parse(localStorage.getItem("books"));
  let issued = JSON.parse(localStorage.getItem("issued")) || [];
  const book = books.find(b => b.id === id);
  book.available = false;
  issued.push({ ...book, date: new Date().toLocaleDateString() });
  localStorage.setItem("books", JSON.stringify(books));
  localStorage.setItem("issued", JSON.stringify(issued));
  location.reload();
}
const issuedContainer = document.getElementById("issuedContainer");
if (issuedContainer) {
  const issued = JSON.parse(localStorage.getItem("issued")) || [];
  if (issued.length === 0) {
    issuedContainer.innerHTML = "<p>No books issued</p>";
  } else {
    issued.forEach(b => {
      issuedContainer.innerHTML += `
        <div class="book">
          <h3>${b.title}</h3>
          <p>Issued on: ${b.date}</p>
        </div>
      `;
    });
  }
}
