// Elements
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');

// Check for saved credentials on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('username');
  const savedPass = localStorage.getItem('password');

  if (savedUser && savedPass) {
    existingBtn.style.display = 'inline-block';
  }
});

// Submit form handler
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const remember = checkbox.checked;

  alert(`Logged in as ${username}`);

  if (remember) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    existingBtn.style.display = 'inline-block';
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    existingBtn.style.display = 'none';
  }

  // Optional: clear form after submission
  form.reset();
});

// Existing user login handler
existingBtn.addEventListener('click', () => {
  const savedUser = localStorage.getItem('username');
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
