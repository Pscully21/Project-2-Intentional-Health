const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#signupemail').value.trim();
    const password = document.querySelector('#signuppassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Error logging in!');
      }
    }
  };

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);