document.addEventListener('DOMContentLoaded', () => {
  const loginFormContainer = document.getElementById('login-form-container');
  const loggedInContainer = document.getElementById('logged-in-container');
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');

  
  function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      loginFormContainer.style.display = 'none';
      loggedInContainer.style.display = 'block';
    } else {
      loginFormContainer.style.display = 'block';
      loggedInContainer.style.display = 'none';
    }
  }

  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

   
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email && password) {
      localStorage.setItem('loggedIn', 'true');
      checkLoginStatus();
    } else {
      alert('Unesite validne podatke.');
    }
  });

  
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    checkLoginStatus();
  });

  checkLoginStatus();
});
