// Switch between forms
function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Store user data (in-memory for demo)
let users = [];

// Handle Signup
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();
  let error = document.getElementById("signupError");

  if (users.find(user => user.email === email)) {
    error.textContent = "Email already registered!";
    error.style.color = "red";
    return;
  }

  users.push({ name, email, password });
  error.style.color = "green";
  error.textContent = "Account created successfully!";
  this.reset();
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let error = document.getElementById("loginError");

  let user = users.find(user => user.email === email && user.password === password);

  if (user) {
    error.style.color = "green";
    error.textContent = "Login successful! Welcome " + user.name;
  } else {
    error.style.color = "red";
    error.textContent = "Invalid email or password!";
  }
});
