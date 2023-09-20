
var users = [];

// Check if users array exists in localStorage
if (localStorage.getItem('users')) {
  try {
    // Retrieve users array from localStorage
    users = JSON.parse(localStorage.getItem('users'));
  } catch (error) {
    console.error('Error parsing users from localStorage:', error);
    // Handle the error as per your requirement
  }
}

function saveUsers() {
  // Save users array to localStorage
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users to localStorage:', error);
    // Handle the error as per your requirement
  }
}

function signup(event) {
  event.preventDefault();
  
  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Check if username already exists
  if (users.find(user => user.username === username)) {
    alert('Username already exists!');
    return;
  }
  
  // Create user object
  var user = {
    username: username,
    password: password
  };
  
  // Add user object to the array
  users.push(user);
  console.log(users);
  
  // Save users array to localStorage
  saveUsers();
  
  window.location.href = 'login.html';
}

function login(event) {
  event.preventDefault();
  
  // Get input values
  var loginUsername = document.getElementById('login-username').value;
  var loginPassword = document.getElementById('login-password').value;
  
  // Find user object with matching username
  var user = users.find(user => user.username === loginUsername);
  
  // Check if user exists and password is correct
  if (user && user.password === loginPassword) {
    // Redirect to home page
    window.location.href = 'home.html';
  } else {
    alert('Invalid login credentials!');
  }
}
















// Check if users array exists in localStorage
// if (localStorage.getItem('users')) {
//     // Retrieve users array from localStorage
//     users = JSON.parse(localStorage.getItem('users'));
//   }
  
//   function saveUsers() {
//     // Save users array to localStorage
//     localStorage.setItem('users', JSON.stringify(users));
//   }
  
//   function signup(event) {
//     event.preventDefault();
  
//     // Get input values
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
  
//     // Check if username already exists
//     if (users.find(user => user.username === username)) {
//       alert('Username already exists!');
//       return;
//     }
  
//     // Create user object
//     var user = {
//       username: username,
//       password: password
//     };
  
//     // Add user object to the array
//     users.push(user);
  
//     // Save users array to localStorage
//     saveUsers();
  
//     // Redirect to login page
//     window.location.href = 'login.html';
//   }
  
//   function login(event) {
//     event.preventDefault();
  
//     // Get input values
//     var loginUsername = document.getElementById('login-username').value;
//     var loginPassword = document.getElementById('login-password').value;
  
//     // Find user object with matching username
//     var user = users.find(user => user.username === loginUsername);
  
//     // Check if user exists and password is correct
//     if (user && user.password === loginPassword) {
//       // Redirect to home page
//       window.location.href = 'home.html';
//     } else {
//       alert('Invalid login credentials!');
//     }
//   }