const navbar = document.getElementById("navbar");
const loggedIn = localStorage.getItem("isLoggedIn") === "true";

navbar.innerHTML = `
  <a href="index.html">Home</a>
  <a href="books.html">Books</a>
  <a href="issued.html">Issued</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
  ${loggedIn ? '<a href="#" id="logout">Logout</a>' :
  '<a href="login.html">Login</a><a href="signup.html">Signup</a>'}
`;
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.onclick = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "login.html";
  };
}
