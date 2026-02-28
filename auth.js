// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.onsubmit = e => {
    e.preventDefault();
    const user = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful");
    window.location.href = "login.html";
  };
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.onsubmit = e => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      loginEmail.value === user.email &&
      loginPassword.value === user.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  };
}
