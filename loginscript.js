let loginbtn = document.getElementById("login_btn");
let signUpPage = document.getElementById("signup");
let logInPage = document.getElementById("login");
let signupbtn = document.getElementById("signup_btn");
let signupSubmit = document.getElementById("signupbtn");
let loginSubmit = document.getElementById("loginbtn");

// Toggle to Login Page
loginbtn.addEventListener('click', (e) => {
  e.preventDefault();
  signUpPage.style.display = 'none';
  logInPage.style.display = 'block';
});

// Toggle to Signup Page
signupbtn.addEventListener('click', (e) => {
  e.preventDefault();
  signUpPage.style.display = 'block';
  logInPage.style.display = 'none';
});

// Signup Functionality
signupSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  if (!email || !password || !firstName || !lastName) {
    alert("Please fill in all fields!");
    return;
  }

  if (localStorage.getItem(email)) {
    alert("User already registered!");
    return;
  }

  let newUser = { firstName, lastName, password, email };
  localStorage.setItem(email, JSON.stringify(newUser));
  alert("User registered successfully!");
  loginbtn.click();
});

// Login Functionality
loginSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById("email_login").value;
  let password = document.getElementById("password_login").value;

  if (!email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  let userData = localStorage.getItem(email);
  if (!userData) {
    alert("No user found with this email!");
    return;
  }

  let savedUser = JSON.parse(userData);
  if (savedUser.password !== password) {
    alert("Incorrect password!");
    return;
  }

  alert(`Welcome, ${savedUser.firstName}!`);
  localStorage.setItem("isLoggedIn", email);
  window.location.href = "index.html";
});
